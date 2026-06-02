import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Laravel + AI Agent',
    description: 'Bootcamp & Workshop — การประยุกต์ใช้ AI เพื่อการพัฒนาระบบสารสนเทศ',
    lang: 'th-TH',
    base: '/laravel-vibecode/',

    themeConfig: {
      logo: 'https://thesvg.org/icons/laravel/default.svg',

      nav: [
        { text: 'ภาพรวม', link: '/00-overview' },
        { text: 'บทเรียน', link: '/01-lesson' },
        { text: 'Workshop P1', link: '/02-workshop' },
        { text: 'Workshop P2', link: '/03-workshop-phase2' },
      ],

      sidebar: [
        {
          text: 'Laravel + AI Agent Bootcamp',
          items: [
            { text: '📋 ภาพรวม & Agenda', link: '/00-overview' },
            { text: '📚 บทเรียนหลัก (Part 1–2)', link: '/01-lesson' },
          ],
        },
        {
          text: 'Workshop',
          items: [
            { text: '🏗️ Phase 1: ระบบจองห้องประชุม (MVP)', link: '/02-workshop' },
            { text: '📧 Phase 2: แจ้งเตือนและอีเมล', link: '/03-workshop-phase2' },
          ],
        },
      ],

      search: { provider: 'local' },

      socialLinks: [
        { icon: 'github', link: 'https://github.com' },
      ],

      footer: {
        message: 'Laravel + AI Agent Bootcamp',
        copyright: 'PCRU · June 2026',
      },
    },

    markdown: {
      lineNumbers: true,
      theme: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },

    mermaid: {
      theme: 'default',
      themeVariables: {
        fontFamily: '"Trebuchet MS", Verdana, Arial, sans-serif',
      },
    },
  })
)
