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

    sidebar: {
      '/guide/': [
        {
          text: '入门指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: 'API 参考', link: '/guide/api-reference' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API 文档',
          items: [
            { text: '端点列表', link: '/api/endpoints' },
            { text: '认证', link: '/api/authentication' },
            { text: '错误处理', link: '/api/errors' }
          ]
        }
      ]
    },

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
