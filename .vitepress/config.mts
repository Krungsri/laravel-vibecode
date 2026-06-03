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
        { text: 'ความต้องการระบบ', link: '/system-requirements' },
        { text: 'บทเรียน', link: '/01-lesson' },
        {
          text: 'Workshop P1',
          items: [
            { text: '🗄️ Step 1 — Database & Seeders', link: '/02-workshop#step-1' },
            { text: '🔐 Step 2 — Authorization', link: '/02-workshop#step-2' },
            { text: '👑 Step 3 — Rooms CRUD (Admin)', link: '/02-workshop#step-3' },
            { text: '👥 Step 4 — Users CRUD (Admin)', link: '/02-workshop#step-4' },
            { text: '🎛️ Step 5 — BookingService', link: '/02-workshop#step-5' },
            { text: '🔍 Step 6 — Room Browsing', link: '/02-workshop#step-6' },
            { text: '📋 Step 7 — Booking CRUD', link: '/02-workshop#step-7' },
            { text: '👮 Step 8 — Staff Approvals', link: '/02-workshop#step-8' },
          ],
        },
        { text: 'Workshop P2', link: '/03-workshop-phase2' },
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
        fontFamily: '"Sarabun", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      },
    },
  })
)
