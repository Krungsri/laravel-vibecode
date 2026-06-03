# <img src="https://thesvg.org/icons/laravel/default.svg" width="32" height="32" valign="middle"> Laravel + <img src="https://thesvg.org/icons/google-antigravity/default.svg" width="32" height="32" valign="middle"> AI Agent — Bootcamp & Workshop

> **โครงการอบรมเชิงปฏิบัติการ**  
> การประยุกต์ใช้ปัญญาประดิษฐ์ (AI) เพื่อการพัฒนาระบบสารสนเทศสำหรับองค์กร  
> 🎙️ **วิทยากร:** นายชัยมงคล แก้วสี

ยินดีต้อนรับสู่คลังข้อมูลการอบรมเชิงปฏิบัติการหลักสูตร **Laravel + AI Agent** สื่อการเรียนรู้นี้จัดทำขึ้นเพื่อให้ผู้เรียนเข้าใจทั้งในส่วนของทฤษฎีการพัฒนาเว็บแอปพลิเคชันด้วย Laravel 13 ร่วมกับการนำเอา **AI Agent CLI** มาช่วยในการพัฒนาได้อย่างมีประสิทธิภาพสูงสุด

---

## 📂 สารบัญไฟล์ (Table of Contents)

แนะนำให้อ่านเรียงตามลำดับไฟล์ดังต่อไปนี้เพื่อทำความเข้าใจได้อย่างเป็นขั้นตอน:

| ลำดับ | ไฟล์คู่มือ | รายละเอียดเนื้อหา |
| :---: | :--- | :--- |
| 📌 | **[00-overview.md](./00-overview.md)** | ภาพรวมโครงการอบรม, แผนการเรียนรู้ และโครงสร้างไฟล์ทั้งหมด *(หน้าปัจจุบัน)* |
| 💻 | **[system-requirements.md](./system-requirements.md)** | **ความต้องการของระบบ:** สเปกฮาร์ดแวร์, ระบบปฏิบัติการ, สแต็กซอฟต์แวร์, และเครื่องมือ AI ที่จำเป็นต้องเตรียมตัวก่อนเข้าอบรม |
| <img src="https://thesvg.org/icons/laravel/default.svg" width="20" height="20" valign="middle"> | **[01-lesson.md](./01-lesson.md)** | **Part 1 & 2:** ทฤษฎีพื้นฐาน, การติดตั้งเครื่องมือ (WSL 2, PHP 8.4, Composer, Node.js), โครงสร้าง MVC, และแนวคิดการทำงานร่วมกับ AI Agent (Claude Code / Antigravity CLI) |
| <img src="https://thesvg.org/icons/react/default.svg" width="20" height="20" valign="middle"> | **[02-workshop.md](./02-workshop.md)** | **Workshop MVP:** ขั้นตอนการลงมือสร้าง **"ระบบจองห้องประชุมสำหรับองค์กร"** แบบทีละขั้นตอน (8 Steps) โดยใช้เทคนิค Short Prompt ร่วมกับ AI Agent |
| 📧 | **[03-workshop-phase2.md](./03-workshop-phase2.md)** | **Workshop Phase 2:** เสริมระบบด้วย **In-App Notification** และ **Mail Alert** ผ่าน Mailpit รวม 5 ขั้นตอน (Steps 9–13) |

---

## 🗺️ ดัชนีนำทางบทเรียนด่วน (Course Navigation Index)

หากคุณต้องการเจาะลึกบทเรียนเฉพาะหัวข้อ สามารถเปิดดูหัวข้อย่อยและคลิกเพื่อเลื่อนหน้าจอข้ามไปยังเนื้อหาที่ต้องการได้ทันที:

<details>
<summary>📖 <b>ดัชนีหัวข้อในคู่มือเรียน (01-lesson.md)</b></summary>

#### 📘 Part 1: Laravel Foundation
* [1. ติดตั้ง WSL 2 (Windows Subsystem for Linux 2)](./01-lesson.md#_1-ติดตั้ง-wsl-2-windows-subsystem-for-linux-2)
* [2. ติดตั้ง Stack: PHP 8.4, Composer, Node.js](./01-lesson.md#_2-ติดตั้ง-stack-php-84-composer-nodejs)
* [3. การสร้างโปรเจกต์ Laravel 13](./01-lesson.md#_3-การสร้างโปรเจกต์-laravel-13)
* [4. Git — การควบคุมเวอร์ชันและประวัติโค้ด](./01-lesson.md#_4-git-การควบคุมเวอร์ชันและประวัติโค้ด)
* [5. โครงสร้างโฟลเดอร์ของ Laravel](./01-lesson.md#_5-โครงสร้างโฟลเดอร์ของ-laravel)
* [6. การจัดการค่าคอนฟิกูเรชันผ่าน .env](./01-lesson.md#_6-การจัดการค่าคอนฟิกูเรชันผ่าน-env)
* [7. โครงสร้างสถาปัตยกรรมแบบ MVC](./01-lesson.md#_7-โครงสร้างสถาปัตยกรรมแบบ-mvc-model-view-controller)
* [8. Routes — การกำหนดเส้นทาง URL](./01-lesson.md#_8-routes-การกำหนดเส้นทาง-url)
* [9. วงจรการทำงานของ Request (Request Lifecycle)](./01-lesson.md#_9-วงจรการทำงานของ-request-request-lifecycle)
* [10. Controller — ผู้ควบคุมลอจิกและประสานงาน](./01-lesson.md#_10-controller-ผู้ควบคุมลอจิกและประสานงาน)
* [11. Middleware — ด่านตรวจกรอง Request](./01-lesson.md#_11-middleware-ด่านตรวจกรอง-request)
* [12. HTTP Methods เปรียบเทียบกับโลกจริง](./01-lesson.md#_12-http-methods-เปรียบเทียบกับโลกแห่งความเป็นจริง)
* [13. Eloquent ORM: การเชื่อมต่อฐานข้อมูล](./01-lesson.md#_13-eloquent-orm-การเชื่อมต่อและการจัดการข้อมูลในฐานข้อมูล)
* [14. การแก้ไขปัญหา N+1 Query ด้วย Eager Loading](./01-lesson.md#_14-ทำความเข้าใจและการแก้ไขปัญหา-n1-query-ด้วย-eager-loading)
* [15. React & Inertia.js — ระบบ Render หน้าจอส่วนหน้า](./01-lesson.md#_15-react-pages--inertiajs--ระบบ-render-หน้ากากเว็บฝั่งหน้าบ้าน)
* [16. การตรวจสอบข้อมูลด้วย Form Request Validation](./01-lesson.md#_16-การตรวจสอบข้อมูลด้วย-form-request-validation)
* [17. ระบบยืนยันตัวตนด้วย Starter Kit (Laravel Breeze)](./01-lesson.md#_17-ระบบยืนยันตัวตนจาก-starter-kit-laravel-breeze)

#### 🤖 Part 2: AI-Assisted Development
* [18. เครื่องมือ AI Developer Agents ประจำปี 2026](./01-lesson.md#_18-เครื่องมือ-ai-developer-agents-ประจำปี-2026)
* [19. หลักการเบื้องต้นของ AI Agent (Tokens, Context, Rate limits)](./01-lesson.md#_19-หลักการเบื้องต้นของ-ai-agent-ที่ทุกคนต้องตระหนักรู้)
* [20. Claude Code](./01-lesson.md#_20-claude-code)
* [21. Antigravity CLI](./01-lesson.md#_21-antigravity-cli)
* [22. OpenCode](./01-lesson.md#_22-opencode)
* [23. Laravel Boost AI — Skills และ MCP](./01-lesson.md#_23-laravel-boost-ai-ให้-ai-agent-เข้าใจโครงสร้างโปรเจกต์)
* [24. Prompt Patterns: สูตรสำเร็จในการคุยกับ AI](./01-lesson.md#_24-prompt-patterns-สูตรสำเร็จในการคุยกับ-ai-ให้ได้งานสูงสุด)

</details>

<details>
<summary>🛠️ <b>ดัชนีขั้นตอนในเวิร์กชอป (02-workshop.md)</b></summary>

* [1. ภาพรวมระบบ & MVP Database Schema](./02-workshop.md#schema)
* [2. ขั้นตอนปฏิบัติการ Workshop (8 Steps - CRUD ทีละเมนู)](./02-workshop.md#steps)
  * [Step 1: โครงสร้างฐานข้อมูล, Models และ Seeders (Database & Seeders)](./02-workshop.md#step-1)
  * [Step 2: ระบบสิทธิ์การเข้าถึง (Authorization — Gates & Middleware)](./02-workshop.md#step-2)
  * [Step 3: [เมนูที่ 1] ระบบจัดการข้อมูลห้องประชุมสำหรับแอดมิน (Admin's Rooms CRUD)](./02-workshop.md#step-3)
  * [Step 4: [เมนูที่ 2] ระบบจัดการข้อมูลผู้ใช้งานสำหรับแอดมิน (Admin's Users CRUD)](./02-workshop.md#step-4)
  * [Step 5: [บริการหลัก] บริการตรวจเช็คระบบคิวจองทับซ้อน (Booking Overlap Service)](./02-workshop.md#step-5)
  * [Step 6: [เมนูที่ 3ก] ค้นหาและดูรายละเอียดห้องประชุม (Room Browsing)](./02-workshop.md#step-6)
  * [Step 7: [เมนูที่ 3ข] ยื่นจองและดูประวัติการจอง (Booking CRUD)](./02-workshop.md#step-7)
  * [Step 8: [เมนูที่ 4] ระบบตรวจสอบและพิจารณาอนุมัติคิวจอง (Staff's Approvals)](./02-workshop.md#step-8)
* [3. ตารางตรวจสอบผลงานความสำเร็จ (MVP Verification Checklist)](./02-workshop.md#checklist)

</details>

<details>
<summary>📧 <b>ดัชนีขั้นตอนในเวิร์กชอป Phase 2 (03-workshop-phase2.md)</b></summary>

* [ข้อกำหนดเบื้องต้น (Prerequisites)](./03-workshop-phase2.md#prerequisites)
* [1. Mailpit — Email Testing บน WSL](./03-workshop-phase2.md#mailpit)
* [2. ขั้นตอนปฏิบัติการ Phase 2 (5 Steps)](./03-workshop-phase2.md#steps-p2)
  * [Step 9: ตั้งค่า Mailpit และตาราง Notifications (P-09)](./03-workshop-phase2.md#step-9)
  * [Step 10: สร้าง Notification สำหรับแจ้งผลการพิจารณา (P-10)](./03-workshop-phase2.md#step-10)
  * [Step 11: สร้าง Mailable สำหรับยืนยันการจอง (P-11)](./03-workshop-phase2.md#step-11)
  * [Step 12: เชื่อม Notification และ Mail เข้า Controllers (P-12)](./03-workshop-phase2.md#step-12)
  * [Step 13: หน้าจอกระดิ่งแจ้งเตือน React (P-13)](./03-workshop-phase2.md#step-13)
* [3. ตารางตรวจสอบผลงาน Phase 2](./03-workshop-phase2.md#checklist-p2)

</details>

---

## 🧭 แผนการเรียนรู้ (Agenda Overview)

### 📘 Part 1: ปูพื้นฐาน Laravel & เครื่องมือพัฒนา
* **บทนำ:** ความแตกต่างของ AI Chat UI กับ AI Agent CLI และทำไมต้องใช้ Laravel + AI
* **ติดตั้งเครื่องมือ:** การเซ็ตอัป <img src="https://thesvg.org/icons/ubuntu/default.svg" width="16" height="16" valign="middle"> WSL 2 บน Windows, <img src="https://thesvg.org/icons/php/default.svg" width="26" height="15" valign="middle" style="background:#4F5D95;border-radius:3px;padding:1px"> PHP 8.4, <img src="https://thesvg.org/icons/composer/default.svg" width="16" height="16" valign="middle"> Composer และ Node.js
* **เริ่มโปรเจกต์:** สร้างแอปพลิเคชันด้วย <img src="https://thesvg.org/icons/laravel/default.svg" width="16" height="16" valign="middle"> Laravel 13 และระบบควบคุมเวอร์ชัน <img src="https://thesvg.org/icons/git/default.svg" width="16" height="16" valign="middle"> Git
* **โครงสร้างหลัก:** เจาะลึก MVC, Routing, Controller, Middleware และ Eloquent ORM & Relationships
* **ระบบความปลอดภัย & Auth:** สำรวจการทำงานของ <img src="https://thesvg.org/icons/laravel/default.svg" width="16" height="16" valign="middle"> Laravel Starter Kit (React/Inertia)

### 🤖 Part 2: ปฏิวัติการเขียนโค้ดด้วย AI Agent CLI & เวิร์กชอป
* **AI Fundamentals:** ทำความเข้าใจ Token, Context Window, Rate Limit เพื่อการสั่งงานอย่างมีประสิทธิภาพ
* **Laravel + AI:** การใช้ประโยชน์จาก AI Skills และ MCP (Model Context Protocol)
* **Prompt Patterns:** เรียนรู้โครงสร้างคำสั่งในการสร้าง CRUD, การแก้ไขข้อผิดพลาด (Debug), การเขียน Unit Test, และการรีวิวโค้ด
* **Workshop Real-World:** ลงมือปฏิบัติจริงสร้าง **ระบบจองห้องประชุม (Meeting Room Booking System)**

---

## 🏗️ ไฮไลท์ของเวิร์กชอป (Workshop Highlights)

ใน **[02-workshop.md](./02-workshop.md)** เราจะร่วมสร้างระบบจองห้องประชุมระดับองค์กรรูปแบบ MVP (Minimum Viable Product) ซึ่งเน้นฟังก์ชันสำคัญที่ใช้งานได้จริง:

1. **3 ตารางฐานข้อมูลหลัก:** `users` (รองรับบทบาท), `rooms` (ห้องประชุมและอุปกรณ์), และ `bookings` (ข้อมูลการจองและการพิจารณา)
2. **ระบบป้องกันจองซ้ำ (Conflict Prevention):** คัดกรองและตรวจสอบช่วงเวลาชนกันแบบเรียลไทม์
3. **ระบบอนุมัติการจอง (Staff Approval):** แยกแยะบทบาทของ Teacher (ผู้จอง), Staff (ผู้พิจารณา) และ Admin (ผู้ดูแลห้อง)
4. **ส่วนติดต่อผู้ใช้สไตล์โมเดิร์น:** เขียนด้วย <img src="https://thesvg.org/icons/react/default.svg" width="16" height="16" valign="middle"> React 19 + <img src="https://thesvg.org/icons/inertia/default.svg" width="16" height="16" valign="middle"> Inertia.js + <img src="https://thesvg.org/icons/vite/default.svg" width="16" height="16" valign="middle"> Vite + Tailwind CSS

---

> [!TIP]
> **💡 แนะนำแนวคิด "AI-First Development"**
> ในเวิร์กชอปนี้เราจะมุ่งเน้นการสั่งงานด้วย **Short Prompts** (คำสั่งสั้นกระชับ) ผ่านระบบ AI Agent ที่ได้รับ **Laravel Boost AI Skill** ทำให้ผู้เรียนสามารถข้ามขั้นตอนการเขียนโค้ดที่ซ้ำซ้อน ไปโฟกัสกับ **ตรรกะทางธุรกิจ (Business Logic)** และความปลอดภัยแทนการจำไวยากรณ์โค้ด!

---

### 🛠️ เทคโนโลยีและเครื่องมือที่ใช้ (Tech Stack & Tools)

<div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:12px;"><img src="https://thesvg.org/icons/laravel/default.svg" width="36" height="36" title="Laravel"><img src="https://thesvg.org/icons/php/default.svg" width="56" height="36" title="PHP" style="background:#4F5D95;border-radius:4px;padding:3px;"><img src="https://thesvg.org/icons/composer/default.svg" width="36" height="36" title="Composer"><img src="https://thesvg.org/icons/react/default.svg" width="36" height="36" title="React"><img src="https://thesvg.org/icons/inertia/default.svg" width="36" height="36" title="Inertia.js"><img src="https://thesvg.org/icons/vite/default.svg" width="36" height="36" title="Vite"><img src="https://thesvg.org/icons/sqlite/default.svg" width="36" height="36" title="SQLite"><img src="https://thesvg.org/icons/git/default.svg" width="36" height="36" title="Git"><img src="https://thesvg.org/icons/ubuntu/default.svg" width="36" height="36" title="Ubuntu"><img src="https://thesvg.org/icons/anthropic/default.svg" width="36" height="36" title="Claude Code"><img src="https://thesvg.org/icons/google-antigravity/default.svg" width="36" height="36" title="Antigravity CLI"></div>

---
*จัดทำขึ้นเพื่อส่งเสริมความรู้การเขียนโปรแกรมและการใช้งาน AI สำหรับการพัฒนาแอปพลิเคชันยุคใหม่*
