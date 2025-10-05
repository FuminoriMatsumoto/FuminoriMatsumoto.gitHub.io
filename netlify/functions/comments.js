import pkg from 'pg';
const { Client } = pkg;

export async function handler(event) {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL,
    ssl: { rejectUnauthorized: false }
  });

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    await client.connect();

    // 处理预检请求 (CORS)
    if (event.httpMethod === 'OPTIONS') {
      return { statusCode: 200, headers, body: '' };
    }

    // 获取评论
    if (event.httpMethod === 'GET') {
      const { post_id } = event.queryStringParameters;
      if (!post_id) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing post_id' }) };
      }

      const result = await client.query(
        'SELECT * FROM public.comments WHERE post_id = $1 ORDER BY created_at DESC',
        [post_id]
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify(result.rows),
      };
    }

    // 提交评论
    if (event.httpMethod === 'POST') {
      const body = JSON.parse(event.body);

      // 兼容 post_id 和 postId 两种写法
      const author = body.author;
      const content = body.content;
      const post_id = body.post_id || body.postId;

      if (!author || !content || !post_id) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
      }

      await client.query(
        'INSERT INTO public.comments (author, content, post_id) VALUES ($1, $2, $3)',
        [author, content, post_id]
      );

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ message: '评论已保存', post_id }),
      };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };

  } catch (err) {
    console.error('数据库错误:', err.message);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  } finally {
    await client.end();
  }
}
