# <img src="https://thesvg.org/icons/laravel/default.svg" width="32" height="32" valign="middle"> Laravel + AI Agent — Bootcamp

> **โครงการอบรมเชิงปฏิบัติการ**  
> การประยุกต์ใช้ปัญญาประดิษฐ์ (AI) เพื่อการพัฒนาระบบสารสนเทศสำหรับองค์กร  
> วิทยากร: นายชัยมงคล แก้วสี

---

## Agenda

| Part | หัวข้อ | เนื้อหา |
|------|--------|---------|
| **Part 1** | บทนำ | AI-Assisted Development, ทำไมต้องใช้ Laravel + AI |
| | ติดตั้งเครื่องมือ | WSL บน Windows, PHP Stack |
| | เริ่มโปรเจกต์ | Laravel 13, Git Version Control |
| | โครงสร้าง | MVC, Routing, Controller, Middleware |
| | ฐานข้อมูล | Eloquent ORM & Relationships, N+1 Query Problem |
| | หน้าตาเว็บ | Blade Templating & Components |
| | ตรวจสอบข้อมูล | Validation & Error Handling |
| | ระบบ Auth & คำสั่ง | ส่องไฟล์จาก Starter Kit & คัมภีร์ Artisan CLI |
| **Part 2** | AI Agent CLI | Claude Code, Antigravity CLI, OpenCode |
| | AI Fundamentals | Token, Context Window, Rate Limit |
| | Laravel + AI | Boost AI, Skills & MCP |
| | Prompt Patterns | Generate CRUD, Debug, Test, Review |

---

## บทนำ: AI สองแบบ ต่างกันอย่างไร

> [!NOTE]
> เลือกใช้ให้ถูกงาน — ใน **Part 1** ใช้ Chat UI ช่วยเรียนรู้ทฤษฎี ใน **Part 2** ใช้ Agent CLI ทำ Workshop จริงใน Terminal

| คุณสมบัติ | AI Chat UI | AI Agent CLI |
|---|---|---|
| **ตัวอย่าง** | Claude.ai, ChatGPT, Gemini | Claude Code, Antigravity CLI, OpenCode |
| **สภาพแวดล้อม** | Browser / Desktop App | Terminal |
| **ขอบเขตข้อมูล** | เฉพาะโค้ดที่คัดลอกไปวาง | เข้าถึงและมองเห็นทั้ง Project |
| **ความสามารถ** | - ถาม-ตอบ, อธิบาย Concept<br>- ช่วย Debug จาก Error message ที่ส่งให้<br>- แนะนำ Best Practices ทั่วไป | - อ่านโค้ด, สร้าง/แก้ไขไฟล์จริงในระบบ<br>- รันคำสั่ง Terminal และรัน Test แทนเรา<br>- ทำ Workflow ซับซ้อนแบบอัตโนมัติ |
| **เหมาะสำหรับ** | เรียนรู้เชิงทฤษฎีและเขียนโค้ดเบื้องต้น | ทำ Workshop จริง, สร้าง Feature ครบวงจร |

---

## บทนำ: ทำไมต้องใช้ Laravel + AI

| แบบเดิม (Manual Development) | ใช้ AI ช่วย (AI-Assisted) |
|---------|-----------|
| เขียนเองทุกบรรทัด ใช้เวลานาน | AI ช่วย Generate โครงสร้างโค้ดและส่วนซ้ำซ้อนทันที |
| ค้นหาและแก้ไข Error ด้วยตัวเองซึ่งทำได้ยาก | AI วิเคราะห์และช่วย Debug พร้อมระบุจุดผิดพลาดตรงจุด |
| ใช้เวลาอ่าน Documentation นานเพราะเนื้อหาเยอะ | AI สรุปและอธิบาย Concept สำคัญให้เข้าใจได้ทันที |
| ลองผิดลองถูกแบบไม่มีทิศทาง | AI แนะนำ Best Practices และ Security Standards ให้ตั้งแต่แรก |

> [!IMPORTANT]
> **AI ไม่ใช่ตัวแทนที่จะมาทำงานแทนเราทั้งหมด แต่เป็นผู้ช่วย (Co-pilot) ที่ทำให้เราเรียนรู้และพัฒนาได้เร็วขึ้น 3–5 เท่า**

---

## 1. <img src="https://thesvg.org/icons/ubuntu/default.svg" width="20" height="20" valign="middle"> ติดตั้ง WSL 2 (Windows Subsystem for Linux 2)

### WSL 2 คืออะไร ทำไมต้องใช้?

**Windows Subsystem for Linux 2 (WSL 2)** คือฟีเจอร์ของ Windows ที่ช่วยให้เราสามารถรันสภาพแวดล้อม Linux (เช่น Ubuntu) ได้โดยตรงแบบ Native โดยไม่ต้องติดตั้ง Virtual Machine ที่กินทรัพยากรสูง หรือทำ Dual Boot ให้ยุ่งยาก

| คุณสมบัติ | VM / Dual Boot | WSL 2 |
|---|---|---|
| **ทรัพยากร** | รัน OS เต็มรูปแบบ กิน RAM และ Disk สูง | น้ำหนักเบา ใช้ทรัพยากรน้อยและยืดหยุ่น |
| **ความสะดวก** | ต้องแยก Disk หรือต้อง Restart เครื่องเพื่อสลับ OS | รันควบคู่กับ Windows ได้ทันที ไม่ต้อง Restart |
| **ประสิทธิภาพ** | ค่อนข้างช้า มี overhead สูง | เร็วเทียบเท่า Native Linux, Composer และ Node.js ทำงานลื่นไหล |
| **การเชื่อมต่อไฟล์** | แชร์ไฟล์ข้ามระบบได้ยากและช้า | เข้าถึงไฟล์ข้ามกันระหว่าง Windows และ Linux ได้โดยตรงและรวดเร็ว |

### ขั้นตอนการติดตั้ง WSL 2

```powershell
# 1. เปิด PowerShell ด้วยสิทธิ์ Administrator
# Start → ค้นหา "PowerShell" → คลิกขวา → เลือก "Run as Administrator"

# 2. ติดตั้ง WSL และ Ubuntu (Default Distribution)
wsl --install
# คำสั่งนี้จะทำการเปิดใช้งาน Virtual Machine Platform และดาวน์โหลด Ubuntu ให้โดยอัตโนมัติ

# 3. Restart เครื่องคอมพิวเตอร์ของคุณเพื่อใช้การตั้งค่า
shutdown /r /t 0
```

```bash
# 4. หลัง Restart — ระบบจะเปิดหน้าต่าง Ubuntu ให้ตั้ง Unix Username และ Password ของคุณ

# อัปเดตรายการและแพ็กเกจระบบให้เป็นเวอร์ชันล่าสุด
sudo apt update && sudo apt upgrade -y

# 5. ตรวจสอบเวอร์ชันของ WSL (ต้องมั่นใจว่าเป็น Version 2)
wsl -l -v
```

> [!TIP]
> **AI Prompt Tip** — สามารถถาม AI เพิ่มเติมเมื่อเจอปัญหา: *"แนะนำขั้นตอนการแก้ไขหากติดตั้ง WSL 2 บน Windows 11 แล้วพบ Error [ระบุ Error]"*

---

## 2. <img src="https://thesvg.org/icons/php/default.svg" width="36" height="20" valign="middle" style="background:#4F5D95;border-radius:4px;padding:2px"> ติดตั้ง Stack: PHP 8.4 · <img src="https://thesvg.org/icons/composer/default.svg" width="20" height="20" valign="middle"> Composer · Node.js

```bash
# 1. ติดตั้ง PHP 8.4 และสภาพแวดล้อมการพัฒนาทั้งหมดด้วยคำสั่งเดียวจาก php.new
/bin/bash -c "$(curl -fsSL https://php.new/install/linux/8.4)"

# ตรวจสอบความถูกต้องของการติดตั้ง
php -v
composer --version

# 2. ติดตั้ง Node.js 20 LTS + npm (สำคัญมากสำหรับรัน Vite, Tailwind และ React)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install nodejs -y

# ตรวจสอบการติดตั้ง Node.js และ npm
node -v
npm -v
```

> [!NOTE]
> - **PHP** เปรียบเสมือน "เครื่องยนต์หลัก" ที่ทำให้แอปพลิเคชันของคุณทำงานได้
> - **Composer** เปรียบเสมือน "ผู้จัดการพัสดุ/ไลบรารี" ที่คอยหาโค้ดเสริมภายนอกมาช่วยทำงาน
> - **Node.js** เปรียบเสมือน "ทีมช่างตกแต่งหน้าบ้าน" ที่คอยคอมไพล์ CSS/JS และควบคุม UI ให้สวยงามทันสมัย

---

## 3. <img src="https://thesvg.org/icons/laravel/default.svg" width="20" height="20" valign="middle"> การสร้างโปรเจกต์ Laravel 13

### แนะนำ: สร้างด้วย `laravel new` (Interactive Wizard)

```bash
laravel new myApp
```

ตัวช่วยติดตั้งจะเปิดหน้าต่าง Interactive Wizard เพื่อถามความต้องการของเราทีละขั้นตอน:

#### ขั้นตอนที่ 1 — เลือก Starter Kit
```
Which starter kit would you like to install?
  None
> React        ← เลือกอันนี้
  Svelte / Vue / Livewire
```
*การเลือก **React** จะทำการติดตั้ง **React 19** + **Inertia.js** ให้โดยอัตโนมัติ ซึ่งดีที่สุดสำหรับการทำ Single Page Application (SPA)*

#### ขั้นตอนที่ 2 — Authentication Provider
```
> Laravel's built-in authentication    ← เลือกอันนี้
  WorkOS
  No authentication scaffolding
```
*เลือก **Laravel's built-in** เพื่อใช้ระบบ Login/Register ภายในที่ปลอดภัยและไม่ต้องพึ่งพาคลาวด์ภายนอก*

#### ขั้นตอนที่ 3 — Database
```
Which database will your application use?
> SQLite        ← เลือกอันนี้ (Default และแนะนำสำหรับ Development)
  MySQL
  MariaDB
  PostgreSQL
  SQL Server
```
*SQLite ดีมากสำหรับการพัฒนาทั่วไปเพราะจัดเก็บในไฟล์เดียว ไม่ต้องรัน Database Server แยก*

#### ขั้นตอนที่ 4 — Teams Support
```
> No    ← เลือก No (สำหรับโปรเจกต์ทั่วไป)
```

#### ขั้นตอนที่ 5 — Testing Framework
```
> Pest       ← เลือกอันนี้
  PHPUnit
```
*Pest มีไวยากรณ์ที่สะอาดตา อ่านง่าย และเหมาะกับโปรเจกต์สมัยใหม่มากกว่า PHPUnit*

#### ขั้นตอนที่ 6 — Laravel Boost
```
> Yes    ← เลือก Yes
```
***Laravel Boost** เป็นตัวสร้าง Context ของโปรเจกต์สำหรับส่งต่อให้ AI Agents (เช่น Claude Code หรือ Antigravity) ช่วยให้ AI เข้าใจโครงสร้าง Codebase ได้อย่างแม่นยำ*

#### ขั้นตอนที่ 7 — Authentication Features (ฟีเจอร์เพิ่มเติม)
เลือกเปิดใช้งานฟีเจอร์ที่ต้องการ (Spacebar เพื่อเลือก/ยกเลิก):
- [x] Email verification
- [x] Registration
- [x] Password confirmation
- [x] Two-factor authentication
- [x] Passkeys

#### ขั้นตอนที่ 8 — npm Dependencies
```
Would you like to run npm install --ignore-scripts?
> Yes
```

---

### โครงสร้างเทคโนโลยีที่ได้ (Tech Stack Summary)

| เทคโนโลยี | เวอร์ชัน | บทบาทหน้าที่ |
|---|---|---|
| <img src="https://thesvg.org/icons/laravel/default.svg" width="20" height="20"> **Laravel** | 13 | Backend Framework (ขับเคลื่อนด้วย PHP 8.2+) |
| <img src="https://thesvg.org/icons/react/default.svg" width="20" height="20"> **React** | 19 | Frontend UI Library สำหรับสร้างหน้าตาเว็บที่ยืดหยุ่น |
| <img src="https://thesvg.org/icons/inertia/default.svg" width="20" height="20"> **Inertia.js** | 1.x | ตัวเชื่อมประสาน (Bridge) ระหว่าง Backend กับ React SPA โดยไม่ต้องเขียน API แยก |
| <img src="https://thesvg.org/icons/vite/default.svg" width="20" height="20"> **Vite** | ล่าสุด | Frontend Build Tool ที่ช่วยคอมไพล์โค้ดด้วยความเร็วสูง |
| <img src="https://thesvg.org/icons/sqlite/default.svg" width="20" height="20"> **SQLite** | 3.x | ระบบฐานข้อมูลแบบไฟล์เดียวน้ำหนักเบาสำหรับขั้นตอนพัฒนา |

```bash
# การเริ่มต้นรันเซิร์ฟเวอร์
cd myApp
composer run dev   # คำสั่งลัดในการเปิดใช้งาน Laravel และ Vite พร้อมกัน
```

> [!IMPORTANT]
> **💡 เคล็ดลับการรัน Dev Servers คู่ขนาน (Backend & Frontend)**
> ในขั้นตอนการพัฒนาระบบร่วมกับ React/Inertia คุณจะต้องรันเซิร์ฟเวอร์ทั้ง 2 ส่วนควบคู่กันเสมอ:
> 1. **รันฝั่ง Backend:** เปิด Terminal หน้าต่างแรก พิมพ์ `php artisan serve` เพื่อให้บริการรันโค้ด PHP
> 2. **รันฝั่ง Frontend:** เปิด Terminal หน้าต่างที่สอง พิมพ์ `npm run dev` เพื่อให้ Vite คอยคอมไพล์และฮอตโหลดหน้าจอ React
> *(หากผู้เรียนพิมพ์แต่ `php artisan serve` อย่างเดียว หน้าจอจะไม่แสดงผลและพบหน้าต่างข้อความเตือนสีแดง Vite manifest not found)*


---

## 4. <img src="https://thesvg.org/icons/git/default.svg" width="20" height="20" valign="middle"> Git — การควบคุมเวอร์ชันและประวัติโค้ด

**Git** คือระบบควบคุมเวอร์ชัน (Version Control) ที่ช่วยบันทึกการเปลี่ยนแปลงของโค้ดในแต่ละจุด ทำให้สามารถย้อนประวัติ หรือทำงานร่วมกับผู้อื่นได้โดยที่โค้ดไม่ทับกัน

```bash
# 1. แอดไฟล์เข้าสู่ระบบเตรียมการบันทึก
git add .

# 2. บันทึกประวัติพร้อมระบุข้อความอธิบายการเปลี่ยนแปลง (Commit Message)
git commit -m "feat: install Laravel with React and SQLite"

# 3. ตรวจสอบประวัติย้อนหลัง
git log --oneline -n 5
```

> [!TIP]
> **Best Commit Practices:**
> - มุ่งเน้นการ commit เป็นชิ้นงานเล็กๆ ที่ทำงานได้จริง (Atomic Commits)
> - ใช้รูปแบบ Conventional Commits เช่น:
>   - `feat: ...` (เพิ่มฟีเจอร์ใหม่)
>   - `fix: ...` (แก้ไขบัก)
>   - `docs: ...` (ปรับปรุงเอกสาร)
>   - `refactor: ...` (ปรับปรุงโครงสร้างโค้ดโดยไม่มีฟีเจอร์ใหม่)

---

## 5. โครงสร้างโฟลเดอร์ของ Laravel

ในการพัฒนาโปรเจกต์ เราจะใช้เวลาอยู่กับโฟลเดอร์เหล่านี้มากกว่า 90% ของเวลาทั้งหมด:

```
myApp/
├── app/                    # สมองและส่วนลอจิกหลักของโปรแกรม
│   ├── Http/Controllers/   # Controller — รับ Request, ดำเนินงาน, ส่งข้อมูลกลับ
│   ├── Http/Middleware/    # Middleware — ประตูคัดกรองความปลอดภัยก่อนถึง Controller
│   └── Models/             # Model — ตัวแทนตารางฐานข้อมูลและการจัดการข้อมูลด้วย Eloquent
├── config/                 # โฟลเดอร์เก็บไฟล์ตั้งค่าต่างๆ ของระบบ
├── database/
│   ├── migrations/         # ไฟล์ประวัติโครงสร้างตารางฐานข้อมูล
│   └── seeders/            # ไฟล์สำหรับสร้างข้อมูลตัวอย่างในฐานข้อมูล
├── public/                 # โฟลเดอร์หน้าบ้านสำหรับเซิร์ฟเวอร์รัน (index.php, static assets)
├── resources/
│   └── js/                 # ไฟล์ Frontend React (กรณีใช้ Inertia)
│   └── views/              # ไฟล์ Blade Template (กรณีใช้ Server-Side Rendering)
├── routes/
│   └── web.php             # ไฟล์กำหนดทิศทาง URL ของหน้าเว็บ
├── .env                    # ไฟล์สำหรับเก็บค่า Configuration ที่มีความลับและแตกต่างกันในแต่ละเครื่อง
└── composer.json           # ไฟล์เก็บรายการและเวอร์ชันของ Composer Packages
```

---

## 6. การจัดการค่าคอนฟิกูเรชันผ่าน `.env`

ไฟล์ `.env` เป็นที่สำหรับเก็บค่าตัวแปรสภาพแวดล้อม (Environment Variables) เช่น การเชื่อมต่อฐานข้อมูล หรือ API Keys

```bash
APP_NAME=Laravel
APP_ENV=local
APP_DEBUG=true            # ต้องตั้งเป็น false เสมอเมื่อรันบนเซิร์ฟเวอร์จริง (Production)!
APP_KEY=base64:xxxx...    # คีย์สำหรับเข้ารหัสข้อมูลสำคัญ หากว่างให้รัน: php artisan key:generate
APP_URL=http://localhost

# SQLite configuration (ตั้งค่าเริ่มต้นของ Laravel 13)
DB_CONNECTION=sqlite

# การเปลี่ยนไปใช้ MySQL (ใช้ใน Production)
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=myapp_db
# DB_USERNAME=root
# DB_PASSWORD=secret_password
```

> [!TIP]
> **⚙️ การเตรียมฐานข้อมูล SQLite ก่อนรันคำสั่ง Migrate:**
> 1. คัดลอกและสร้างไฟล์ `.env` เสมอหากเริ่มโปรเจกต์ใหม่: `cp .env.example .env`
> 2. ตรวจสอบให้มั่นใจว่าไฟล์ `.env` มีการตั้งค่า `DB_CONNECTION=sqlite` เรียบร้อย
> 3. ใน Laravel 13 หากไม่มีไฟล์ `database/database.sqlite` ระบบจะทำการสร้างขึ้นมาให้คุณโดยอัตโนมัติเมื่อสั่งรัน `php artisan migrate`

> [!WARNING]
> **กฎเหล็กเพื่อความปลอดภัย:**
> - ห้ามเอาไฟล์ `.env` ขึ้น Git Repository เป็นอันขาดเพราะมีรหัสผ่านและความลับของระบบ
> - ใช้ไฟล์ `.env.example` เป็นแม่แบบให้ทีมงานคัดลอกไปสร้าง `.env` ของตนเองแทน

---

## 7. โครงสร้างสถาปัตยกรรมแบบ MVC (Model-View-Controller)

```mermaid
flowchart LR
    %% Browser / Client Group
    subgraph Client ["🌐 Client Side (Browser)"]
        U["💻 Browser Request<br>(ผู้ใช้ส่งคำขอเข้าชมเว็บ)"]
        U2["✅ HTML / JSON Response<br>(ผลลัพธ์ตอบกลับแสดงหน้าจอ)"]
    end

    %% Routing & Gatekeepers
    subgraph Gate ["🛡️ Entry Gate (ระบบนำทาง & กรองข้อมูล)"]
        R["📍 <b>Routes</b><br>(routes/web.php)"]
        M["👮 <b>Middleware</b><br>(ตรวจสอบสิทธิ์ / สแกนความปลอดภัย)"]
    end

    %% MVC Core Architecture
    subgraph MVC ["🧩 MVC Core (หัวใจหลักระบบหลังบ้าน)"]
        C["🧠 <b>Controller</b><br>(app/Http/Controllers)<br><i>*สมองควบคุมตรรกะงาน*</i>"]
        Mo["🗄️ <b>Model</b><br>(app/Models)<br><i>*จัดการข้อมูล & กฎ*</i>"]
        V["🎨 <b>View / Pages</b><br>(resources/js/Pages / Blade)<br><i>*ส่วนแสดงผลเว็บ*</i>"]
    end

    %% Database
    DB[("💾 <b>Database</b><br>(SQLite / MySQL)")]

    %% Process flow
    U --> R
    R --> M
    M --> C
    C <--> Mo
    Mo <--> DB
    C --> V
    V --> U2

    %% Premium CSS/Mermaid Styling
    style Client fill:#111827,stroke:#374151,stroke-width:2px,color:#9ca3af
    style Gate fill:#1e1b4b,stroke:#4338ca,stroke-width:2px,color:#c7d2fe
    style MVC fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#93c5fd
    
    style U fill:#374151,stroke:#6b7280,stroke-width:2px,color:#ffffff,font-weight:bold
    style U2 fill:#059669,stroke:#34d399,stroke-width:2px,color:#ffffff,font-weight:bold
    
    style R fill:#db2777,stroke:#f472b6,stroke-width:2px,color:#ffffff,font-weight:bold
    style M fill:#d97706,stroke:#fbbf24,stroke-width:2px,color:#ffffff,font-weight:bold
    
    style C fill:#7c3aed,stroke:#a78bfa,stroke-width:2px,color:#ffffff,font-weight:bold
    style Mo fill:#0d9488,stroke:#2dd4bf,stroke-width:2px,color:#ffffff,font-weight:bold
    style V fill:#e11d48,stroke:#fb7185,stroke-width:2px,color:#ffffff,font-weight:bold
    
    style DB fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold
```

---

## 8. Routes — การกำหนดเส้นทาง URL

เส้นทางทราฟฟิกเว็บทั้งหมดจะถูกกำหนดในไฟล์ `routes/web.php`

```php
use App\Http\Controllers\PostController;

// การกำหนด Route แบบเดี่ยว
Route::get('/', function () {
    return view('welcome');
});

// การกำหนด Resource Route บรรทัดเดียว ได้ถึง 7 หน้าการทำงานหลัก
Route::resource('posts', PostController::class);
```

การทำงานของ `Route::resource` จะจับคู่กับ Controller อัตโนมัติ ดังนี้:

| HTTP Method | URL Pattern | Controller Method | Route Name | อธิบายหน้าที่ |
|---|---|---|---|---|
| **GET** | `/posts` | `index` | `posts.index` | แสดงรายการทั้งหมด |
| **GET** | `/posts/create` | `create` | `posts.create` | แสดงแบบฟอร์มสร้างข้อมูลใหม่ |
| **POST** | `/posts` | `store` | `posts.store` | บันทึกข้อมูลใหม่ลงฐานข้อมูล |
| **GET** | `/posts/{post}` | `show` | `posts.show` | แสดงข้อมูลรายละเอียดเฉพาะตัว |
| **GET** | `/posts/{post}/edit` | `edit` | `posts.edit` | แสดงแบบฟอร์มสำหรับแก้ไขข้อมูล |
| **PUT/PATCH** | `/posts/{post}` | `update` | `posts.update` | บันทึกการแก้ไขข้อมูลลงฐานข้อมูล |
| **DELETE** | `/posts/{post}` | `destroy` | `posts.destroy` | ลบข้อมูลออกจากฐานข้อมูล |

```bash
# คำสั่งสำหรับดูลิสต์เส้นทางทั้งหมดในระบบ
php artisan route:list
```

---

## 9. วงจรการทำงานของ Request (Request Lifecycle)

```mermaid
flowchart TD
    %% Nodes Definitions
    A["🖱️ <b>HTTP Request</b><br>User คีย์ URL หรือคลิกลิงก์บนเว็บ"]
    B["🚪 <b>1. Entry Point</b> (public/index.php)<br>ประตูทางเข้าแรกเดี่ยวของแอปพลิเคชัน"]
    C["⚙️ <b>2. Bootstrapping Core</b><br>โหลดไฟล์ตั้งค่า & รัน Service Providers"]
    D["📍 <b>3. Routing Matching</b> (routes/web.php)<br>ค้นหา URL เพื่อระบุเป้าหมายตัวทำงาน"]
    E["🛡️ <b>4. Middleware Pipeline</b><br>กรองความปลอดภัย (เช็คสิทธิ์ล็อกอิน / กันยิงสคริปต์)"]
    F["🧠 <b>5. Controller Logic</b> (Controllers)<br>สมองประมวลผลตรรกะและเงื่อนไขโปรแกรม"]
    G["🗄️ <b>6. Model & Database</b> (Eloquent)<br>ค้นหา ดึง หรือบันทึกข้อมูลเข้าตารางฐานข้อมูล"]
    H["🎨 <b>7. View Render</b> (React / Blade Views)<br>ประกอบข้อมูลประกอบโครงสร้างหน้ากากเว็บ"]
    I["✅ <b>HTTP Response</b><br>ส่งโค้ด HTML / JSON กลับสู่บราวเซอร์แสดงหน้าจอ"]

    %% Flow connections
    A -->|"1. ผู้ใช้ยิงคำขอ"| B
    B -->|"2. เริ่มเปิดระบบ"| C
    C -->|"3. โหลดเซอร์วิส"| D
    D -->|"4. จับคู่เส้นทาง"| E
    E -->|"5. ผ่านด่านคัดกรอง"| F
    F <-->|"6. จัดการข้อมูล (สองทาง)"| G
    F -->|"7. ส่งต่อเรนเดอร์"| H
    H -->|"8. แพ็คของตอบกลับ"| I

    %% Premium Custom Styling
    style A fill:#374151,stroke:#9ca3af,stroke-width:2px,color:#ffffff,font-weight:bold
    style B fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#ffffff,font-weight:bold
    style C fill:#d97706,stroke:#fbbf24,stroke-width:2px,color:#ffffff,font-weight:bold
    style D fill:#db2777,stroke:#f472b6,stroke-width:2px,color:#ffffff,font-weight:bold
    style E fill:#4f46e5,stroke:#818cf8,stroke-width:2px,color:#ffffff,font-weight:bold
    style F fill:#7c3aed,stroke:#a78bfa,stroke-width:2px,color:#ffffff,font-weight:bold
    style G fill:#0d9488,stroke:#2dd4bf,stroke-width:2px,color:#ffffff,font-weight:bold
    style H fill:#e11d48,stroke:#fb7185,stroke-width:2px,color:#ffffff,font-weight:bold
    style I fill:#059669,stroke:#34d399,stroke-width:2px,color:#ffffff,font-weight:bold
```

---

## 10. Controller — ผู้ควบคุมลอจิกและประสานงาน

```bash
# คำสั่งสร้าง Resource Controller พร้อมเมธอดมาตรฐาน 7 ตัวแบบอัตโนมัติ
php artisan make:controller PostController --resource
```

```php
namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    // 1. แสดงรายการทั้งหมด
    public function index()
    {
        $posts = Post::latest()->paginate(10);
        return view('posts.index', compact('posts'));
    }

    // 2. บันทึกข้อมูลใหม่
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|min:3|max:255',
            'body' => 'required',
        ]);

        Post::create($validated);

        return redirect()->route('posts.index')->with('success', 'สร้างบทความสำเร็จแล้ว');
    }

    // 3. ปรับปรุงข้อมูลที่แก้ไข
    public function update(Request $request, Post $post)
    {
        $validated = $request->validate([
            'title' => 'required|min:3|max:255',
            'body' => 'required',
        ]);

        $post->update($validated);

        return redirect()->route('posts.index')->with('success', 'แก้ไขข้อมูลสำเร็จแล้ว');
    }

    // 4. ลบข้อมูล
    public function destroy(Post $post)
    {
        $post->delete();
        return redirect()->route('posts.index')->with('success', 'ลบข้อมูลสำเร็จแล้ว');
    }
}
```

---

## 11. Middleware — ด่านตรวจกรอง Request

**Middleware** คือชั้นกรอง HTTP Request ก่อนที่จะเข้าถึงเมธอดลอจิกใน Controller

```mermaid
flowchart TD
    subgraph pipeline ["🛡️ Middleware Pipeline (กลไกตัวกรองความปลอดภัยเป็นลำดับชั้น)"]
        direction TB
        Req["💻 HTTP Request<br>(ผู้ใช้ยิงคำร้องขอเข้ามา)"]
        
        %% Middleware Layers
        M1["🔒 1. Maintenance Check<br><i>(ตรวจสอบว่าเว็บปิดปรับปรุงอยู่หรือไม่?)</i>"]
        M2["🍪 2. Cookie & Session Start<br><i>(เริ่มดึงค่าเซสชัน / ตรวจคุกกี้สิทธิ์ล็อกอิน)</i>"]
        M3["🛡️ 3. CSRF Verification<br><i>(ตรวจสอบความปลอดภัยป้องกันแฮกเกอร์ข้ามไซต์)</i>"]
        M4["👮 4. Auth Verification (Authentication)<br><i>(เช็คสิทธิ์ล็อกอิน: เข้าระบบแล้วหรือยัง?)</i>"]
        
        %% Pass or Fail
        Req --> M1
        M1 -- "ผ่าน ✅" --> M2
        M1 -- "ปิดเว็บ ❌" --> Err503["🚫 HTTP 503<br>(Service Unavailable)"]
        
        M2 -- "ผ่าน ✅" --> M3
        M2 -- "ผิดพลาด ❌" --> ErrSession["🚫 HTTP 400<br>(Bad Request)"]
        
        M3 -- "ผ่าน ✅" --> M4
        M3 -- "ตรวจโกง ❌" --> ErrCSRF["🚫 HTTP 419<br>(Page Expired)"]
        
        M4 -- "ผ่าน ✅" --> Ctrl["🧠 Controller Method<br><i>(ประมวลลอจิกและส่งผลลัพธ์)</i>"]
        M4 -- "ไม่ได้ล็อกอิน ❌" --> ErrAuth["🚫 Redirect to Login / 403 Forbidden"]
    end

    %% Styles
    style pipeline fill:#0f172a,stroke:#3b82f6,stroke-width:2px,color:#93c5fd
    
    style Req fill:#374151,stroke:#9ca3af,stroke-width:2px,color:#ffffff,font-weight:bold
    style Ctrl fill:#7c3aed,stroke:#a78bfa,stroke-width:2px,color:#ffffff,font-weight:bold
    
    style M1 fill:#1e2937,stroke:#6b7280,stroke-width:1px,color:#f3f4f6
    style M2 fill:#1e2937,stroke:#6b7280,stroke-width:1px,color:#f3f4f6
    style M3 fill:#1e2937,stroke:#6b7280,stroke-width:1px,color:#f3f4f6
    style M4 fill:#1e2937,stroke:#6b7280,stroke-width:1px,color:#f3f4f6
    
    style Err503 fill:#991b1b,stroke:#f43f5e,stroke-width:1px,color:#ffffff
    style ErrSession fill:#991b1b,stroke:#f43f5e,stroke-width:1px,color:#ffffff
    style ErrCSRF fill:#991b1b,stroke:#f43f5e,stroke-width:1px,color:#ffffff
    style ErrAuth fill:#991b1b,stroke:#f43f5e,stroke-width:1px,color:#ffffff
```

```php
// การตั้งค่าความปลอดภัยให้ครอบคลุมทั้งกลุ่ม Resource Routes (ต้อง Login ก่อนเท่านั้น)
Route::middleware(['auth'])->group(function () {
    Route::resource('posts', PostController::class);
});
```

---

## 12. HTTP Methods เปรียบเทียบกับโลกแห่งความเป็นจริง

| Method | หน้าที่เป้าหมาย | ตัวอย่างงาน | เปรียบเสมือน |
|---|---|---|---|
| **GET** | เรียกอ่านข้อมูล | ดึงรายการข้อมูลห้องประชุม | 📖 เปิดอ่านหน้าหนังสือ |
| **POST** | ส่งข้อมูลใหม่เพื่อบันทึก | ลงทะเบียนจองห้องประชุม | 📝 กรอกข้อมูลลงใบสมัครใหม่ |
| **PUT/PATCH** | แก้ไขข้อมูลที่มีอยู่แล้ว | อัปเดตเวลาจองห้อง | ✏️ ลบและแก้ไขข้อมูลในใบสมัครเดิม |
| **DELETE** | ลบข้อมูลที่เลือกออก | ยกเลิกรายการจองห้องประชุม | 🗑 โยนเอกสารสมัครใบเดิมทิ้งถังขยะ |

---

## 13. Eloquent ORM: การเชื่อมต่อและการจัดการข้อมูลในฐานข้อมูล

**Eloquent ORM** คือระบบ Object-Relational Mapping ของ Laravel ที่ช่วยให้เราติดต่อและสั่งการ Database ได้โดยเขียนเป็นคลาส PHP สั้นๆ แทนการพิมพ์โค้ด SQL ที่มีความยาวและยากแก่การบำรุงรักษา

```php
// ❌ รูปแบบเดิม (เขียน SQL Raw)
$users = DB::select('SELECT * FROM users WHERE status = "active" ORDER BY created_at DESC');

// ✅ รูปแบบ Eloquent ORM (สั้น กระชับ ปลอดภัยจาก SQL Injection โดยปริยาย)
$users = User::where('status', 'active')->latest()->get();
```

### การทำ CRUD พื้นฐานด้วย Eloquent
```php
// C - Create: บันทึกข้อมูลแถวใหม่
$post = Post::create([
    'title' => 'แนะนำ Laravel 13',
    'body'  => 'เนื้อหาที่เป็นประโยชน์ในการเริ่มต้นเขียนโค้ด...'
]);

// R - Read: ดึงข้อมูลขึ้นมาอ่าน
$allPosts  = Post::all();                     // ดึงข้อมูลทั้งหมดในตาราง
$singlePost = Post::findOrFail(1);            // ค้นหา ID: 1 หากไม่พบจะแสดง Error 404 อัตโนมัติ

// U - Update: บันทึกข้อมูลที่แก้ไข
$singlePost->update([
    'title' => 'การติดตั้ง Laravel 13 บน WSL 2'
]);

// D - Delete: ลบข้อมูลที่ต้องการ
$singlePost->delete();
```

---

## 14. ทำความเข้าใจและการแก้ไขปัญหา N+1 Query ด้วย Eager Loading

ปัญหา **N+1 Query** เป็นหนึ่งในปัญหาคลาสสิกที่เกิดขึ้นบ่อยที่สุดในระบบ ORM ซึ่งส่งผลเสียอย่างรุนแรงต่อความเร็วของระบบเนื่องจากมีการรันคิวรีในลูปเป็นร้อยๆ ครั้งโดยไม่จำเป็น

```mermaid
flowchart TD
    subgraph bad ["❌ แบบทั่วไป (N+1 Query Problem) - ส่งคิวรีถี่และช้า"]
        direction TB
        B1["1. ดึงโพสต์หลัก 10 รายการ"] -- "รัน 1 คิวรี" --> B2["SELECT * FROM posts LIMIT 10"]
        B2 --> B3["2. วนลูปหาผู้เขียน (ดึงทีละโพสต์ในลูป)"]
        B3 --> B4["• โพสต์ที่ 1: SELECT * FROM users WHERE id = 1<br>• โพสต์ที่ 2: SELECT * FROM users WHERE id = 2<br>• ...<br>• โพสต์ที่ N: SELECT * FROM users WHERE id = N"]
        B4 -- "รันคิวรีอีก N ครั้ง" --> B5["🚨 โหลดช้า / ฐานข้อมูลรับภาระหนัก! (คิวรีทั้งหมด = N + 1 ครั้ง)"]
    end

    subgraph good ["✅ แบบใช้ Eager Loading - รัน 2 คิวรีจบงาน"]
        direction TB
        G1["1. ดึงโพสต์หลักพร้อมบอกความสัมพันธ์"] -- "รัน 1 คิวรี" --> G2["SELECT * FROM posts LIMIT 10"]
        G2 --> G3["2. ดึงข้อมูลความสัมพันธ์ทั้งหมดในคิวรีเดียว"] -- "รัน 1 คิวรี" --> G4["SELECT * FROM users WHERE id IN (1, 2, 3, ..., 10)"]
        G4 --> G5["⚡ จับคู่ข้อมูลในเมมโมรีทันที! (คิวรีทั้งหมด = 2 ครั้ง เสมอ)"]
    end

    style bad fill:#1e1b1b,stroke:#f43f5e,stroke-width:2px,color:#fecdd3
    style good fill:#111c17,stroke:#10b981,stroke-width:2px,color:#a7f3d0
    
    style B1 fill:#372323,stroke:#fda4af,color:#ffffff
    style B5 fill:#991b1b,stroke:#f43f5e,color:#ffffff,font-weight:bold
    
    style G1 fill:#142d20,stroke:#6ee7b7,color:#ffffff
    style G5 fill:#065f46,stroke:#10b981,color:#ffffff,font-weight:bold
```

### โค้ดที่ก่อให้เกิดปัญหา (N+1 Query)
```php
// ดึงข้อมูลบทความ 10 บทความ (รันคิวรี 1 ครั้งเพื่อดึง Posts)
$posts = Post::limit(10)->get();

foreach ($posts as $post) {
    // ในทุกๆ บทความ จะมีการส่งคำสั่ง SQL ไปดึง User ที่เป็นผู้เขียนอีก 1 ครั้ง (รันคิวรีอีก N ครั้ง!)
    // รวมทำงานคิวรีทั้งหมดเป็น 1 + 10 = 11 ครั้ง
    echo $post->user->name;
}
```

### แนวทางแก้ไขด้วย Eager Loading (`with`)
การใช้ Eager Loading จะดึงข้อมูลความสัมพันธ์ทั้งหมดขึ้นมารอไว้ตั้งแต่แรก ทำให้ประหยัดการรันคิวรีเหลือเพียง 2 ครั้งเท่านั้นไม่ว่าจะมีจำนวนข้อมูลในตารางกี่ล้านแถวก็ตาม

```php
// ดึงข้อมูลบทความทั้งหมดพร้อมกับโหลดข้อมูลผู้เขียนขึ้นมารอไว้ทันทีด้วยเมธอด with()
$posts = Post::with('user')->limit(10)->get();

foreach ($posts as $post) {
    // ดึงค่าผู้เขียนจากเมมโมรีได้ทันทีโดยไม่มีการติดต่อฐานข้อมูลเพิ่มอีก
    echo $post->user->name;
}
```

### สรุปรูปแบบความสัมพันธ์ (Eloquent Relationships)

| ชื่อความสัมพันธ์ | เมธอดในความสัมพันธ์ | ตัวอย่างการประยุกต์ใช้งาน |
|---|---|---|
| **One-to-One (1:1)** | `hasOne()` / `belongsTo()` | ผู้ใช้งาน 1 คน (`User`) มีรูปภาพโปรไฟล์ได้ 1 รูป (`Avatar`) |
| **One-to-Many (1:N)** | `hasMany()` / `belongsTo()` | ลูกค้า 1 คน (`User`) สามารถกดสั่งซื้อสินค้าได้หลายรายการ (`Order`) |
| **Many-to-Many (N:M)** | `belongsToMany()` | บทความ 1 เรื่อง (`Post`) สามารถมีได้หลายป้ายกำกับ (`Tag`) และป้ายกำกับ 1 อันก็อยู่ในหลายบทความได้ |

---

## 15. Blade — ระบบ Template Engine & Components

**Blade** คือระบบจัดการหน้าตาเว็บไซต์ (Template Engine) ที่มีความสามารถสูง ช่วยแบ่งสัดส่วนการออกแบบให้เป็น Layouts และสร้าง Component ที่นำกลับมาใช้ซ้ำได้ง่าย

```html
{{-- 1. ไฟล์ Layout หลัก: resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html lang="th">
<head>
    <title>@yield('title', 'แอปพลิเคชันของเรา')</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gray-100">
    @include('partials.navbar') {{-- นำเข้า Navbar จากภายนอก --}}

    <main class="container mx-auto mt-6">
        @yield('content') {{-- จุดวางเนื้อหาของหน้าย่อย --}}
    </main>
</body>
</html>
```

```html
{{-- 2. ไฟล์หน้าย่อย: resources/views/posts/index.blade.php --}}
@extends('layouts.app')

@section('title', 'รายการบทความทั้งหมด')

@section('content')
    <h1 class="text-2xl font-bold mb-4">รายการบทความ</h1>

    @foreach($posts as $post)
        <article class="bg-white p-4 shadow rounded mb-4">
            <h2 class="text-xl font-semibold">{{ $post->title }}</h2>
            <p class="text-gray-600 mt-2">{{ $post->body }}</p>
        </article>
    @endforeach

    {{-- เรนเดอร์ปุ่มเปลี่ยนหน้า (Pagination) แบบสวยงามโดยอัตโนมัติ --}}
    <div class="mt-4">
        {{ $posts->links() }}
    </div>
@endsection
```

---

## 16. การตรวจสอบข้อมูลด้วย Form Request Validation

เพื่อป้องกันและรับประกันความปลอดภัยของข้อมูลในระบบ เราควรย้ายลอจิกการตรวจรูปแบบข้อมูลไปไว้ในไฟล์ **Form Request** เสมอ

```bash
# สั่งสร้างไฟล์ตรวจสอบความถูกต้องของข้อมูล (Form Request)
php artisan make:request StorePostRequest
```

```php
// app/Http/Requests/StorePostRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    // กำหนดสิทธิ์ในการทำรายการนี้ (True คืออนุญาตให้ทำได้ทุกคน)
    public function authorize(): bool
    {
        return true;
    }

    // กำหนดเงื่อนไขและกฎความถูกต้องของข้อมูล (Validation Rules)
    public function rules(): array
    {
        return [
            'title'    => ['required', 'min:3', 'max:255'],
            'email'    => ['required', 'email', 'unique:users,email'],
            'password' => ['required', 'min:8', 'confirmed'], // ตรวจสอบรหัสผ่านคู่กับ password_confirmation
            'age'      => ['required', 'integer', 'min:18'],
            'avatar'   => ['nullable', 'image', 'max:2048'],  // ตรวจไฟล์รูปภาพขนาดไม่เกิน 2MB
        ];
    }
}
```

> [!TIP]
> **Security Tip:** ใช้คำสั่ง `$request->validated()` แทน `$request->all()` เสมอใน Controller เพื่อนำไปบันทึกข้อมูล เพราะจะคืนค่าเฉพาะข้อมูลที่ผ่านการตรวจสอบในกฎแล้วเท่านั้น ป้องกันการทำ Mass Assignment Vulnerability

---

## 17. <img src="https://thesvg.org/icons/laravel/default.svg" width="20" height="20" valign="middle"> ระบบยืนยันตัวตนจาก Starter Kit (Laravel Breeze)

เมื่อเราเลือกติดตั้งผ่าน **Starter Kit (React)** พร้อมกับ **Laravel's built-in authentication** ตั้งแต่ขั้นตอนสร้างโปรเจกต์ (`laravel new`) ระบบจะทำการติดตั้งและเตรียมโครงสร้างไฟล์ของ **Laravel Breeze** มาให้เราใช้งานทันทีโดยไม่ต้องลงแพ็กเกจซ้ำ!

### 📂 โครงสร้างระบบยืนยันตัวตนที่สำคัญ
เมื่อ Starter Kit ทำงานเสร็จสิ้น จะเกิดการเปลี่ยนแปลงโครงสร้างโฟลเดอร์ของโปรเจกต์ที่เราควรรู้จักดังนี้:

1. **Authentication Controllers (`app/Http/Controllers/Auth/`)**
   - รวบรวม Controller ที่ใช้จัดการ Flow ทั้งหมด เช่นการสมัครสมาชิก (`RegisteredUserController`), การเข้าสู่ระบบ (`AuthenticatedSessionController`), และการเปลี่ยนรหัสผ่าน (`PasswordController`)
2. **Authentication Routes (`routes/auth.php`)**
   - ไฟล์เก็บเส้นทาง URL (Routes) ทั้งหมดของระบบ Auth เช่น `/login`, `/register`, `/forgot-password` โดยถูกดึงไปโหลดรวมไว้ใน `routes/web.php` เรียบร้อยแล้ว
3. **Frontend Views & SPA Pages (`resources/js/Pages/Auth/`)**
   - ไฟล์หน้าจออินเตอร์เฟสสำหรับการทำ Single Page Application (เช่น `Login.jsx`, `Register.jsx`, `ForgotPassword.jsx`) ที่พร้อมใช้งานและออกแบบมาอย่างสวยงามด้วย Tailwind CSS

> [!NOTE]
> **ทำไมระบบพร้อมใช้เลย?** เนื่องจากในขั้นตอนการติดตั้ง `laravel new` ตัวช่วยติดตั้งจะสั่งรัน `php artisan breeze:install react` ให้อัตโนมัติทางเบื้องหลัง เราจึงข้ามขั้นตอนการติดตั้ง Manual และพร้อมรันฐานข้อมูลด้วย `php artisan migrate` เพื่อเริ่มเขียนระบบต่อได้ทันที!
>
> [!CAUTION]
> **⚠️ ข้อควรระวังขั้นสูง — ห้ามติดตั้งซ้ำ!**
> เนื่องจาก Starter Kit ถูกเซ็ตอัปเรียบร้อยพร้อมใช้งานอยู่แล้ว **ผู้เรียนห้ามรันคำสั่ง `php artisan breeze:install react` ซ้ำในระหว่างเรียนเด็ดขาด** เพราะคำสั่งนี้จะไปทำการเขียนทับหน้าจออินเตอร์เฟสและลบโครงสร้างไฟล์อื่นๆ ที่ผู้เรียนเขียนขึ้นมาก่อนหน้าทั้งหมดจนพังได้! ให้เริ่มใช้ได้ทันทีโดยไม่ต้องรันคำสั่งนี้ซ้ำ


---

## 18. <img src="https://thesvg.org/icons/laravel/default.svg" width="20" height="20" valign="middle"> คัมภีร์คำสั่งด่วนยอดนิยมสำหรับนักพัฒนา (Artisan CLI Cheat Sheet)

**Artisan** เป็นคอมมานด์ไลน์อินเตอร์เฟสที่มาพร้อมกับ Laravel เพื่ออำนวยความสะดวกในการพัฒนาโปรเจกต์ และสร้างสแคฟโฟลด์ต่างๆ ได้อย่างรวดเร็ว

### 🏆 6 สุดยอดคำสั่งที่จำเป็นที่สุดในการพัฒนาโปรเจกต์

| หมวดหมู่ | คำสั่ง | อธิบายการทำงาน | ตัวอย่างการใช้งาน |
| :--- | :--- | :--- | :--- |
| **เซิร์ฟเวอร์** | `php artisan serve` | รันเซิร์ฟเวอร์จำลองเพื่อเข้าชมผ่านเบราว์เซอร์ | `http://127.0.0.1:8000` |
| **ฐานข้อมูล** | `php artisan migrate` | รันตารางฐานข้อมูลที่สร้างขึ้นใหม่ให้เข้าไปอยู่ใน Database | รันเพื่อสร้างตาราง `users` จาก Starter Kit |
| **การทำความสะอาด** | `php artisan migrate:fresh --seed` | ล้างตารางทั้งหมด สร้างใหม่ และรันชุดข้อมูลจำลอง (Seeder) | ใช้เพื่อรีเซ็ตโครงสร้างฐานข้อมูลเริ่มต้น |
| **การสร้างไฟล์** | `php artisan make:model <Name> -mc` | สร้าง Model พร้อมพ่วง Migration และ Controller ในคำสั่งเดียว | `php artisan make:model Room -mc` |
| **ความสัมพันธ์** | `php artisan route:list` | แสดงตารางเส้นทาง URL ทั้งหมดของโปรเจกต์พร้อม Middleware | ใช้เช็กว่า URL ถูกชี้ไปหา Controller ตัวไหน |
| **การทดสอบ** | `php artisan tinker` | เปิดหน้าต่าง REPL (Interactive Shell) เพื่อเขียนโค้ด PHP ทดลองกับโปรเจกต์ | ดึงข้อมูลลองเล่น: `App\Models\User::first()` |

---

# Part 2: AI-Assisted Development

> สั่งงาน AI Agent ผ่าน Terminal ให้ช่วยวางแผนและพัฒนาโค้ดในโปรเจกต์ของคุณ

---

## 19. เครื่องมือ AI Developer Agents ประจำปี 2026

**AI Developer Agents** ในปัจจุบันทำได้มากกว่าแค่ตอบคำถาม สามารถอ่าน Codebase วางแผน สร้างและแก้ไขไฟล์ รวมถึงรันคำสั่งใน Terminal ได้เองโดยอัตโนมัติ

| AI Agent Tool | จุดเด่นหลักในการทำงาน |
|---|---|
| **Claude Code** | โมเดลจาก Anthropic ออกแบบมาให้ขอยืนยันก่อนแก้ไขไฟล์หรือรันคำสั่งสำคัญ เน้นความปลอดภัยเป็นหลัก |
| **Antigravity CLI** | เขียนด้วย Go ทำให้รันเร็ว รองรับ Async Subagents ที่ทำงานหลายอย่างพร้อมกันได้ พัฒนาโดย Google |
| **OpenCode** | เลือกใช้โมเดลได้หลายตัว (GPT-4, Claude, DeepSeek) รวมถึง Local Model สำหรับองค์กรที่ไม่ต้องการส่งโค้ดขึ้น Cloud |

---

## 20. หลักการเบื้องต้นของ AI Agent ที่ทุกคนต้องตระหนักรู้

เพื่อให้ได้ผลลัพธ์ที่ดีและประหยัดงบการใช้งาน ควรเข้าใจค่ากำหนดหลักเหล่านี้:

```mermaid
graph TD
    Root["🧠 3 เสาหลักของการทำงาน AI Agent ที่ผู้ใช้ต้องตระหนัก"]
    
    %% Pillar 1
    Root --> P1["🪙 1. Tokens<br>(หน่วยประมวลผลคำและภาษา)"]
    P1 --> P1_1["• 1 Token ~ 0.75 คำอังกฤษ<br>• <b>ภาษาไทยกิน 2-3 Tokens ต่อคำ</b><br>• คิดค่าบริการและคำนวณตามโควตาจริง"]
    
    %% Pillar 2
    Root --> P2["🪟 2. Context Window<br>(พื้นที่ความจำส่องโค้ดของ AI)"]
    P2 --> P2_1["• ขนาดความจุสมอง (เช่น 128k ถึง 2M+)<br>• ส่งโค้ดเยอะเกินไปทำให้โมเดล <b>'หลงลืม'</b> ความสัมพันธ์เก่า<br>• ควรคัดเลือกเฉพาะไฟล์ที่เกี่ยวข้องส่งให้ AI"]
    
    %% Pillar 3
    Root --> P3["⏳ 3. Rate Limits<br>(ข้อจำกัดความถี่การส่งสั่งการ)"]
    P3 --> P3_1["• จำกัดจำนวนการเรียกครั้งต่อนาที (RPM/TPM)<br>• หากสั่งรันงานถี่และมีปริมาณมากเกินไปจะเจอ <b>Error 429</b><br>• ต้องเว้นระยะหรือลดขนาดสคริปต์ที่ส่ง"]

    %% Premium Style Definition
    style Root fill:#3b82f6,stroke:#93c5fd,stroke-width:2px,color:#ffffff,font-weight:bold
    
    style P1 fill:#f43f5e,stroke:#fecdd3,stroke-width:2px,color:#ffffff,font-weight:bold
    style P1_1 fill:#1f2937,stroke:#374151,stroke-width:1px,color:#e5e7eb
    
    style P2 fill:#f59e0b,stroke:#fde68a,stroke-width:2px,color:#ffffff,font-weight:bold
    style P2_1 fill:#1f2937,stroke:#374151,stroke-width:1px,color:#e5e7eb
    
    style P3 fill:#065f46,stroke:#047857,stroke-width:2px,color:#ffffff,font-weight:bold
    style P3_1 fill:#1f2937,stroke:#374151,stroke-width:1px,color:#e5e7eb
```


> [!WARNING]
> การใช้งาน AI Agent บนโปรเจกต์ขนาดใหญ่จะกินจำนวน Token สูงขึ้นอย่างรวดเร็ว ควรแบ่งสัดส่วนการส่งไฟล์ให้ AI โฟกัสเฉพาะจุดที่มีปัญหา เพื่อป้องกันไม่ให้เกิดภาวะ "Context ล้น" และช่วยให้ผลลัพธ์มีความถูกต้องสูงสุด

---

## 21. <img src="https://thesvg.org/icons/anthropic/default.svg" width="20" height="20" valign="middle"> Claude Code

**Claude Code** จาก Anthropic รันบน Terminal โดยตรง ถนัดในการวิเคราะห์ Logic ซับซ้อนและตรวจสอบคุณภาพโค้ด

```bash
# ติดตั้งระบบผ่าน Node global pack
npm install -g @anthropic-ai/claude-code

# ย้ายเข้าสู่โปรเจกต์ของคุณ
cd ~/projects/myApp

# เรียกใช้งานและเริ่มสื่อสาร
claude
```

**ตัวอย่างการสั่งการใน Claude prompt:**
- `> สร้างตารางจองห้องพัก bookings พร้อมเก็บประวัติการบันทึก`
- `> ช่วยเขียน Feature Test ตรวจสอบระบบ Login`
- `> สแกนดูไฟล์และช่วยรีวิวความปลอดภัยของระบบ`

---

## 22. <img src="https://thesvg.org/icons/google-antigravity/default.svg" width="20" height="20" valign="middle"> Antigravity CLI

**Antigravity CLI** พัฒนาโดย Google ใช้ภาษา Go ทำให้รันได้เร็ว ฟีเจอร์หลักคือ **Async Subagents** ที่รันงานหลายอย่างพร้อมกันใน Background ได้

```bash
# ติดตั้งบนระบบ macOS / Linux / WSL 2
curl -fsSL https://antigravity.google/cli/install.sh | bash

# ยืนยันการติดตั้งและเปิดใช้งานสำเร็จ
agy --version

# ตั้งค่า API Key ส่วนตัว (เข้าไปสร้างฟรีได้ที่ aistudio.google.com)
export GEMINI_API_KEY="AIzaSyYourKeyHere..."

# เข้าโฟลเดอร์งานและเปิดตัวเอเจนต์
cd ~/projects/myApp
agy
```

**ตัวอย่างการสั่งการยอดนิยม:**
- `> สร้างระบบจองและคืนรถยนต์ส่วนกลางภายในบริษัท`
- `> สั่งย่อย Subagent ช่วยเขียนโค้ดหลังบ้าน และอีกตัวเขียน UI ไปพร้อมๆ กัน`

---

## 23. <img src="https://thesvg.org/icons/opencode/default.svg" width="20" height="20" valign="middle"> OpenCode

**OpenCode** ให้ความยืดหยุ่นในการเลือกโมเดล สามารถสลับมาใช้ Local Model หรือ API ส่วนตัวได้ เหมาะกับองค์กรที่ต้องการควบคุมข้อมูล

```bash
# ติดตั้งใช้งาน
npm install -g opencode-ai

# สั่งใช้งาน
cd ~/projects/myApp
opencode
```

---

## 24. <img src="https://thesvg.org/icons/laravel/default.svg" width="24" height="24" valign="middle"> Laravel Boost AI: ให้ AI Agent เข้าใจโครงสร้างโปรเจกต์

ความท้าทายที่ใหญ่ที่สุดของการใช้ AI Agent ในโปรเจกต์ขนาดใหญ่คือ **"การขาดบริบท (Context Gap)"** โมเดลส่วนใหญ่มักจะไม่ทราบโครงสร้างตารางฐานข้อมูลที่แท้จริง ไม่รู้เส้นทาง URLs หรือมักจะแนะนำฟังก์ชันที่เก่าล้าสมัย (Hallucination) 

**Laravel Boost AI** เป็น Package ของ Laravel ที่ออกแบบมาเพื่อปิดช่องว่างนี้ โดยใช้ **2 กลไกหลัก** เพื่อช่วยให้ AI Agent (เช่น Antigravity CLI หรือ Claude Code) เข้าใจโปรเจกต์และทำงานได้แม่นยำขึ้น:

---

### 🏛️ 2 เสาหลักของ Laravel Boost AI

```mermaid
mindmap
  root((🚀 Laravel Boost))
    pillar1["เสาหลักที่ 1: คลังทักษะ (Skills)"]
      modular["ความรู้แบบแยกโมดูล (Modular)"]
      guidelines["แนวทางและไกด์ไลน์ระบบ"]
      inertia["รูปแบบการเขียน Inertia / Livewire"]
      pest["โครงสร้างเทสด้วย Pest"]
    pillar2["เสาหลักที่ 2: ท่อดึงข้อมูล (MCP Server)"]
      schema["สแกนข้อมูลและตาราง Schema"]
      routes["วิเคราะห์เส้นทาง URLs & Routes"]
      artisan["สั่งงาน Artisan & Tinker"]
      logs["ดักจับและอ่าน Error Logs"]
```

1. **🧩 Modular Skills (คลังทักษะตามสั่ง):**
   ระบบจะโหลดไกด์ไลน์ กฎระเบียบแนวทาง และสไตล์ไกด์เฉพาะของ Laravel 13 เข้าสู่สมองของ AI เฉพาะเรื่องที่จำเป็น (เช่น โหลดกฎของ Inertia.js หรือ Livewire เฉพาะตอนแก้ไขหน้านั้น ๆ) ช่วยประหยัด Token และป้องกัน AI เขียนโค้ดหลุดมาตรฐาน
   เปรียบเสมือนการมอบ **"คู่มือมาตรฐานองค์กร"** ให้ AI ก่อนเริ่มงาน ทำให้ AI ทำหน้าที่เหมือน Senior Developer ที่รู้ Convention ของโปรเจกต์นี้อยู่แล้ว — นี่คือเหตุผลที่ Workshop สามารถใช้ Prompt สั้นๆ แล้ว AI ยังทำงานได้ถูกต้อง
2. **🔌 Model Context Protocol - MCP (ท่อส่งผ่านข้อมูลจริง):**
   มาตรฐานความปลอดภัยเปิด (พัฒนาโดย Anthropic) ที่อนุญาตให้ AI Agent ส่งคำขอรันโปรแกรมระบบหลังบ้านเพื่อเรียกดูข้อมูล คิวรีฐานข้อมูล หรือสั่งงานเครื่องของคุณได้อย่างปลอดภัยผ่านโครงสร้างแบบขออนุมัติก่อนเสมอ

```mermaid
flowchart TD
    AI["🤖 <b>AI Agent</b><br>(Gemini / Claude)"]
    MCP["🔌 <b>MCP Server</b><br>(laravel/boost)"]
    
    subgraph tools ["🛠️ 15+ เครื่องมือตรวจเช็คระบบอัตโนมัติ (MCP Tools)"]
        direction TB
        DB["🗄️ Database Schema & Queries"]
        RT["🌐 Live Routes & Middlewares"]
        CLI["💻 Artisan CLI & Tinker REPL"]
        DOC["📖 Version-Aware Laravel Docs"]
        LOG["🚨 error-logs & browser-log"]
    end

    AI -- "1. สั่งวิเคราะห์ลอจิก" --> MCP
    MCP -- "2. ประมวลผลและดึงข้อมูล" --> tools
    tools -- "3. ส่งผลลัพธ์กลับแบบ Raw Data" --> MCP
    MCP -- "4. สรุปแนวทางแก้ไขบั๊ก" --> AI


    style AI fill:#7c3aed,stroke:#c084fc,stroke-width:2px,color:#ffffff,font-weight:bold
    style MCP fill:#d97706,stroke:#fbbf24,stroke-width:2px,color:#ffffff,font-weight:bold
    style tools fill:#111827,stroke:#374151,stroke-width:2px,stroke-dasharray: 5 5,color:#bac2de
    
    style DB fill:#1e2937,stroke:#3b82f6,stroke-width:1px,color:#e5e7eb
    style RT fill:#1e2937,stroke:#10b981,stroke-width:1px,color:#e5e7eb
    style CLI fill:#1e2937,stroke:#f43f5e,stroke-width:1px,color:#e5e7eb
    style DOC fill:#1e2937,stroke:#8b5cf6,stroke-width:1px,color:#e5e7eb
    style LOG fill:#1e2937,stroke:#ec4899,stroke-width:1px,color:#e5e7eb
```

---

### 🔌 เจาะลึก 15+ MCP Tools ในแต่ละกลุ่มความสามารถ

เมื่อติดตั้ง `laravel/boost` AI Agent จะสามารถเรียกใช้เครื่องมือเหล่านี้เมื่อต้องการข้อมูลโปรเจกต์ โดยแบ่งตามหน้างานดังนี้:

| หมวดหมู่เครื่องมือ | ชื่อเครื่องมือและฟังก์ชัน | บทบาทหน้าที่ในการช่วยพัฒนา | ประโยชน์ที่ผู้เรียนจะได้รับ |
| :--- | :--- | :--- | :--- |
| **🗄️ Database & Schema** | `inspect-schema`<br>`execute-query` | AI จะเข้าส่องฟิลด์ในตารางจริง ตรวจสอบคีย์ Foreign Key และช่วยเขียนคิวรีคัดกรองข้อมูล | ป้องกันการเขียนฟิลด์ฐานข้อมูลสะกดผิด และดึงความสัมพันธ์แบบซับซ้อนได้อย่างถูกต้องแม่นยำ |
| **🌐 Routes & Web Maps** | `list-routes`<br>`find-route` | กวาดสายตามอง URL Routes ทั้งหมดที่ลงทะเบียนในโปรเจกต์ รวมถึงตรวจสอบ Middleware ที่คุมอยู่ | ช่วยค้นหาและแก้ไขปัญหาการเปิดลิ้งก์แล้วติด `404` หรือปัญหาหน้าต่าง Auth บล็อกการเข้าถึง |
| **💻 Artisan & Running REPL** | `execute-artisan`<br>`tinker-eval` | บอตสามารถขอกดรันคำสั่ง Artisan เช่นการทำ Migrations, Seeds หรือรันชุดโค้ด PHP ทดสอบใน Sandbox | ช่วยลดภาระการพิมพ์คำสั่งยาวๆ ใน Terminal และตรวจสอบความถูกต้องของลอจิกก่อนเขียนบันทึกจริง |
| **📖 Official Documents** | `search-docs` | ทำการค้นหาเนื้อหาอ้างอิงตรงจาก Official Docs ของ Laravel เวอร์ชันที่คุณรันอยู่แบบเรียลไทม์ | มั่นใจได้ว่าโค้ดที่สร้างจะใช้ฟีเจอร์และไวยากรณ์ใหม่ล่าสุดที่ถูกต้องตาม Best Practice ของเฟรมเวิร์ก |
| **🚨 Auto Log Analyzer** | `error-logs`<br>`browser-log` | **คู่หูจับบั๊กอัตโนมัติ:** คอยดึง Logs จาก `laravel.log` (Backend) และ Browser Console (Frontend React SPA) มาวิเคราะห์คู่กัน | **ไม่ต้องเสียเวลา Copy Logs ไปวางใน Chat UI!** เมื่อระบบขึ้นรหัส `500` หรือหน้าขาว บอตจะดึง Log มารันวิเคราะห์และซ่อมแซมตัวเองได้ทันที |

> [!NOTE]
> **MCP เปลี่ยนวิธีการดีบักอย่างไร?**
> เดิมทีเมื่อเกิดข้อผิดพลาด คุณต้องคัดลอก Trace Log ไปวางใน Chat UI เอง แต่เมื่อใช้ **Model Context Protocol (MCP)** เอเจนต์สามารถสืบค้น คิวรี และอ่าน Log ได้โดยตรงจากโปรเจกต์ แล้วแก้ไขไฟล์ได้เองในรอบเดียวโดยไม่ต้องรอคำสั่งเพิ่ม

---

### 📦 ขั้นตอนการติดตั้งและเปิดทัศนวิสัยร่วมกับ AI Agent

> [!NOTE]
> **หากสร้างโปรเจกต์ด้วย `laravel new` และเลือก Yes ที่ขั้นตอน "Laravel Boost" แล้ว** — ข้ามขั้นตอนที่ 1 ได้เลย Laravel Boost ถูกติดตั้งในโปรเจกต์แล้ว รันแค่ `boost:install` เพื่อเชื่อมต่อกับ AI Agent ที่คุณใช้งาน
>
> หากเป็น **โปรเจกต์เก่าที่ยังไม่มี** ให้ทำตามขั้นตอนทั้งหมดด้านล่าง:

```bash
# 1. ติดตั้ง Laravel Boost ลงในโปรเจกต์เฉพาะสภาพแวดล้อมเพื่อการพัฒนา (Development mode)
composer require laravel/boost --dev

# 2. รันเวิร์กชอปคำสั่งติดตั้งเพื่อทำการเชื่อมต่อและสร้าง AI Guidelines
php artisan boost:install
```

> [!IMPORTANT]
> **💡 การทำงานเบื้องหลังของ `boost:install`**
> เมื่อรันคำสั่งติดตั้ง ระบบจะสแกนหาตัวช่วยเขียนโค้ดในคอมพิวเตอร์ของคุณ (เช่น Cursor, Claude Code, หรือ Antigravity) จากนั้นจะนำเอาไฟล์ตั้งค่า (Configuration) ไปผูกเชื่อมโยง MCP Server เอนจิ้นของ Laravel เข้ากับระบบประมวลผลคำสั่งของบอตเหล่านั้นโดยอัตโนมัติทันที

---

## 25. Prompt Patterns: สูตรสำเร็จในการคุยกับ AI ให้ได้งานสูงสุด

> [!TIP]
> **สูตรผสมที่ดีที่สุด:**  
> `[สวมบทบาทผู้เชี่ยวชาญ] + [มอบหมายภารกิจชัดเจน] + [แจ้งข้อมูล Context/ข้อจำกัดที่ต้องปฏิบัติ] + [ระบุผลลัพธ์ปลายทางที่คาดหวัง]`

### 🏗 รูปแบบการสั่งสร้าง CRUD
```text
ทำหน้าที่เป็น Senior Laravel Developer ช่วยสร้างระบบ [ระบุชื่อ เช่น ระบบเบิกถอนอุปกรณ์]
โดยใช้ Laravel 13, SQLite และ React Tailwind CSS
ขอให้สร้างส่วนต่างๆ ต่อไปนี้:
- ไฟล์ Migration พร้อมประกาศฟิลด์ [ระบุรายการฟิลด์] และข้อจำกัดความปลอดภัย
- คลาส Model พร้อมประกาศ fillable และความสัมพันธ์ Relationships ให้ครบถ้วน
- Controller ที่มีระบบตรวจสอบข้อมูล (Form Request Validation)
- เส้นทาง Route ใน web.php
```

### 🔍 รูปแบบการสั่งอธิบายโครงสร้างโค้ด
```text
ช่วยอธิบายโค้ดนี้ให้เข้าใจง่ายทีละขั้นตอน
บอกเหตุผลว่าทำไมถึงควรใช้วิธีนี้ และมีจุดที่ควรปรับปรุงเพื่อประหยัดทรัพยากร (เช่น N+1 Query) หรือไม่
[แนบส่วนโค้ดของคุณตรงนี้]
```

### 🐛 รูปแบบการช่วยสแกนแก้ไข Error
```text
ระบบพบข้อผิดพลาดแบบนี้: [ระบุข้อความ Error ใน Log/Terminal]
ช่วยอธิบายสาเหตุและวิธีแก้ไขปัญหาให้เรียบร้อยทีละส่วน
[แนบส่วนโค้ดหรือไฟล์ที่คาดว่าเกี่ยวข้อง]
```

### 🚨 Fallback Prompt: เมื่อ AI Agent เขียนแล้วระบบพังหรือมีบั๊ก ต้องรับมืออย่างไร?
ในบางกรณี AI Agent อาจวิเคราะห์ผิดพลาดหรือเขียนโค้ดทับซ้อนกันจนระบบเปิดใช้งานไม่ได้ (เช่น เกิด Syntax Error หรือ Route ไม่เชื่อมโยง) วิธีการรับมือที่ดีที่สุดคือ **"อย่าเพิ่งตกใจและอย่าไปนั่งแก้โค้ดเองด้วยความมึนงง"** แต่ให้ผู้เรียนทำตามขั้นตอนเหล่านี้:

1. **คัดลอก Error Message** จากเบราว์เซอร์หรือ Log ใน Terminal ไว้
2. **พิมพ์สั่งการแก้ตัว** สั้นๆ เพื่อให้ AI กวาดมองทั้งโปรเจกต์และทำการแก้ไข:
   ```text
   โค้ดหน้าจอล่าสุดพบข้อผิดพลาด [แนบข้อความ Error] เมื่อเปิดใช้งานหน้า [ระบุเมนู] 
   ช่วยสแกนไฟล์และแก้ไขระบบให้กลับมาทำงานได้อย่างถูกต้องตามโครงสร้างและสิทธิ์ผู้ใช้เดิม
   ```
3. **ใช้พลังของ Version Control (Git):** หากเกิดการทับซ้อนรุนแรงจนแก้ไม่ได้ สามารถให้ AI ทำการย้อนคืนโค้ด (Rollback) เพื่อเริ่มใหม่ได้:
   ```text
   ช่วยตรวจสอบ git status และสั่ง git checkout ย้อนคืนโค้ดที่เสียหายในหน้านี้กลับไปเป็นเวอร์ชัน Commit ล่าสุดที่ยังทำงานได้ปกติ
   ```


---

## บทสรุปของ Bootcamp

<p>
  <img src="https://thesvg.org/icons/laravel/default.svg" width="28" height="28" title="Laravel">
  <img src="https://thesvg.org/icons/php/default.svg" width="44" height="28" title="PHP" style="background:#4F5D95;border-radius:4px;padding:2px">
  <img src="https://thesvg.org/icons/composer/default.svg" width="28" height="28" title="Composer">
  <img src="https://thesvg.org/icons/react/default.svg" width="28" height="28" title="React">
  <img src="https://thesvg.org/icons/inertia/default.svg" width="28" height="28" title="Inertia.js">
  <img src="https://thesvg.org/icons/vite/default.svg" width="28" height="28" title="Vite">
  <img src="https://thesvg.org/icons/mysql/default.svg" width="28" height="28" title="MySQL" style="background:#00618A;border-radius:4px;padding:2px">
  <img src="https://thesvg.org/icons/redis/default.svg" width="28" height="28" title="Redis">
  <img src="https://thesvg.org/icons/git/default.svg" width="28" height="28" title="Git">
  <img src="https://thesvg.org/icons/ubuntu/default.svg" width="28" height="28" title="Ubuntu">
</p>

### 🛠 สิ่งที่คุณได้เรียนรู้ใน Part 1 — Laravel Foundation
- [x] **WSL 2 & Ubuntu**: สภาพแวดล้อมที่เหมาะสมที่สุดในการพัฒนาโค้ดแบบ Native Linux
- [x] **PHP 8.4 Stack**: การติดตั้ง PHP 8.4+, Composer และ Node.js อย่างรวดเร็ว
- [x] **Laravel 13 Architecture**: การขึ้นโครงสร้างด้วย React 19, Inertia.js และระบบ SQLite ของดีฟอลต์
- [x] **MVC Flow**: ลำดับการเดินทางของ Request จาก URL ผ่าน Route, Middleware จนถึงแสดงผล View
- [x] **Eloquent ORM & N+1 Problem**: วิธีเขียนดึงเชื่อมฐานข้อมูลที่สะอาดและเรียนรู้วิธีป้องกันปัญหาคอขวด N+1
- [x] **Starter Kit, Auth & Validation**: การทำความเข้าใจโครงสร้างไฟล์และเส้นทางระบบ Auth ของ Starter Kit พร้อมการทำ Validation

### 🤖 สิ่งที่คุณได้เรียนรู้ใน Part 2 — AI-Assisted Development
- [x] **AI Agent CLI**: รู้จักขอบข่ายการสั่งงานผ่าน Terminal กับ Claude Code, Antigravity CLI และ OpenCode
- [x] **Core Concepts**: ความสำคัญและข้อจำกัดของ Tokens, Context Window และ Rate Limits
- [x] **Skills & MCP**: วิธีการยกระดับความฉลาดให้ AI เข้าใจโครงสร้างของ Laravel และโปรเจกต์
- [x] **Prompt Patterns**: เทคนิคการพิมพ์เขียนความต้องการให้ AI ทำงานให้มีประสิทธิภาพสูงสุด

---

*Laravel + AI Agent · Bootcamp — Complete Notes · June 2026*
