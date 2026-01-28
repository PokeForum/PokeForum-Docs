import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'PokeForum API',
  description: 'PokeForum API 文档中心',
  lang: 'zh-CN',
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/getting-started' },
      {
        text: 'API 文档',
        items: [
          { text: 'Apifox', link: 'https://pokeforum-docs.6b7.org' },
          { text: 'Swagger (JSON)', link: 'https://github.com/PokeForum/PokeForum/blob/master/docs/swagger.json' },
          { text: 'Swagger (YAML)', link: 'https://github.com/PokeForum/PokeForum/blob/master/docs/swagger.yaml' }
        ]
      }
    ],

    sidebar: [
      {
        text: '起步',
        items: [
          { text: '快速开始', link: '/getting-started/quick-start' },
          {
            text: '部署',
            collapsed: false,
            items: [
              { text: 'Docker 启动', link: '/getting-started/deployment/docker' },
              { text: 'Docker-Compose 启动', link: '/getting-started/deployment/docker-compose' },
              { text: '二进制部署', link: '/getting-started/deployment/binary' }
            ]
          },
          {
            text: '用户端独立部署',
            collapsed: false,
            items: [
              { text: '腾讯 EO Pages 部署', link: '/getting-started/frontend/tencent-eo' },
              { text: 'Vercel 部署', link: '/getting-started/frontend/vercel' }
            ]
          },
          { text: '从源代码编译', link: '/getting-started/build-from-source' },
          { text: '命令行', link: '/getting-started/cli' },
          { text: '配置', link: '/getting-started/configuration' }
        ]
      },
      {
        text: '使用',
        items: [
          { text: '功能介绍', link: '/usage/' },
        ]
      },
      {
        text: '维护',
        items: [
          { text: '更新', link: '/maintenance/update' }
        ]
      },
      {
        text: '开发者',
        items: [
          { text: '贡献指南', link: '/developer/contributing' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PokeForum/PokeForum-Docs' }
    ],

    footer: {
      message: '基于 MIT 许可证发布',
      copyright: 'Copyright © 2024 PokeForum'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/PokeForum/PokeForum-Docs/edit/main/docs/:path'
    }
  }
})
