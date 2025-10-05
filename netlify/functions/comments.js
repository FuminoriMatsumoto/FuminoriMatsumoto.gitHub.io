import pkg from 'pg';
const { Client } = pkg;

export async function handler(event) {
  const client = new Client({
    connectionString: process.env.NETLIFY_DATABASE_URL, // 在 Netlify 环境变量里配置
    ssl: { rejectUnauthorized: false }
  });

  // 通用响应头
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };

  // 处理 CORS 预检请求
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    await client.connect();

    if (event.httpMethod === 'GET') {
      const postId = event.queryStringParameters.post_id;
      if (!postId) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing post_id' }) };
      }

      const result = await client.query(
        'SELECT * FROM public.comments WHERE post_id = $1 ORDER BY created_at DESC',
        [postId]
      );

      return { statusCode: 200, headers, body: JSON.stringify(result.rows) };
    }

    if (event.httpMethod === 'POST') {
      const { author, content, post_id } = JSON.parse(event.body);
      if (!author || !content || !post_id) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing fields' }) };
      }

      const result = await client.query(
        'INSERT INTO public.comments (author, content, post_id, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [author, content, post_id]
      );

      return { statusCode: 200, headers, body: JSON.stringify(result.rows[0]) };
    }

    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method Not Allowed' }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  } finally {
    await client.end();
  }
}
