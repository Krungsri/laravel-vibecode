import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: 'Laravel + AI Agent',
    description: 'Bootcamp & Workshop — การประยุกต์ใช้ AI เพื่อการพัฒนาระบบสารสนเทศ',
    lang: 'th-TH',
    base: '/laravel-vibecode/',
    head: [
      ['link', { rel: 'icon', href: '/laravel-vibecode/favicon.ico' }]
    ],

    themeConfig: {
      logo: 'https://thesvg.org/icons/laravel/default.svg',

      nav: [
        { text: 'ภาพรวม', link: '/00-overview' },
        { text: 'ความต้องการระบบ', link: '/system-requirements' },
        { text: 'บทเรียน', link: '/01-lesson' },
        { text: 'Workshop P1', link: '/02-workshop' },
        { text: 'Workshop P2', link: '/03-workshop-phase2' },
        { text: 'Workshop P3', link: '/04-workshop-phase3' },
      ],

      sidebar: [
        {
          text: 'Laravel + AI Agent Bootcamp',
          items: [
            { text: '📋 ภาพรวม & Agenda', link: '/00-overview' },
            { text: '💻 ความต้องการระบบ (Requirements)', link: '/system-requirements' },
            { text: '📚 บทเรียนหลัก (Part 1–2)', link: '/01-lesson' },
          ],
        },
        {
          text: 'Workshop',
          items: [
            { text: '🏗️ Phase 1: ระบบจองห้องประชุม (MVP)', link: '/02-workshop' },
            { text: '📧 Phase 2: แจ้งเตือนและอีเมล', link: '/03-workshop-phase2' },
            { text: '🎨 Phase 3: Landing Page (impeccable)', link: '/04-workshop-phase3' },
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
      theme: 'neutral',
      gantt: {
        fontSize: 16,
        sectionFontSize: 16,
        barHeight: 32,
        barGap: 8,
        topPadding: 70,
        leftPadding: 220,
        rightPadding: 40,
        gridLineStartPadding: 35,
      },
      themeVariables: {
        fontFamily: '"Sarabun", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        primaryColor: '#FF2D20',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#cc1f15',
        lineColor: '#FF2D20',
      },
    },

    vite: {
      optimizeDeps: {
        include: ['mermaid', 'dayjs', 'dayjs/plugin/duration'],
      },
    },
  })
)
