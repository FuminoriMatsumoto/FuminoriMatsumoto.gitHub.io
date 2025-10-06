export default {
  // 网站标题
  Title: 'szakblog',
  // 网站地址
  Site: 'https://fuminorimatsumoto.github.io',
  // 网站副标题
  Subtitle: '美丽的语言勾勒出美丽的世界',
  // 网站描述
  Description: '分享我的生活',
  // 网站作者
  Author: 'wei',
  // 作者头像
  Avatar: 'https://szakblog.netlify.app/ResizedImage_2025-09-14_10-03-27_1.jpg',
  // 网站座右铭
  Motto: 'hello',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎您的来访</p><p>这里是wei的网站目前只是一个新网站:) </p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '而在徘徊的终点的背后,留下的是残破不堪的轨迹',
    "Beyond the end of wandering lies a shattered, broken trail",
  ],
  // 网站创建时间
  CreateTime: '2025-10-03',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('https://random.api.mikus.ink/mobile') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#1E88E5",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
  { text: '主页', link: '/', icon: 'Nav_home' },        // 首页
  { text: '朋友', link: '/links', icon: 'Nav_friends' },
  { text: '动态', link: '/talking', icon: 'Nav_talking' },
  { text: '昔日', link: '/archives', icon: 'Nav_archives' },
  { text: '留言', link: '/message', icon: 'Nav_message' },
  { text: '关于', link: '/about', icon: 'Nav_about' },
],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/FuminoriMatsumoto', icon: 'WebSite_github' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: true,
      envId: 'https://szak.netlify.app/.netlify/functions/comments'
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: ''
    }
  },
  // Han Analytics 统计（）
  HanAnalytics: { enable: true, server: '', siteId: '' },
  // Google 广告
  GoogleAds: {
    ad_Client: '', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-xxxxxx" data-ad-slot="xxxxxx" data-ad-format="auto" data-full-width-responsive="true"></ins>`
  },
  // 文章内赞赏码
  Reward: {
    // 支付宝收款码
    AliPay: '',
    // 微信收款码
    WeChat: ''
  },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}
