🚀 Storry.tech — Deployment & CI/CD Documentation

This repository contains the frontend code and automated deployment pipeline for Storry.tech, built using React + Vite and deployed to cPanel shared hosting via GitHub Actions (FTP).

The setup ensures automatic production deployment on every push to the main branch.

📌 Project Overview

Framework: React + TypeScript

Build Tool: Vite

Styling: Tailwind CSS

Hosting: cPanel (Apache)

CI/CD: GitHub Actions

Deployment Method: FTP

Server Type: Static SPA (Single Page Application)

📂 Project Structure
storry-site/
├── public/
│   ├── images/
│   ├── logos/
│   ├── waves/
│   └── favicon.svg
├── src/
│   ├── pages/
│   ├── components/
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.ts
├── package.json
├── tsconfig.json
└── README.md

🛠️ Local Development
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev


Runs locally on: http://localhost:5173

Hot reload enabled

🏗️ Production Build
Build command
npm run build

Output

Vite generates optimized static files inside:

dist/
├── index.html
├── assets/
│   ├── *.js
│   └── *.css


⚠️ Only the contents of dist/ are deployed to the server.

🌐 Hosting & Deployment Strategy

Hosting provider: cPanel shared hosting

Web server: Apache

Deployment directory:

/public_html


Deployment method: FTP via GitHub Actions

🔁 SPA Routing Configuration (.htaccess)

Because this is a React SPA, Apache must redirect all routes to index.html.

Correct file location
public_html/.htaccess

⚠️ Important

Filename must be exactly .htaccess

❌ .htaccess.txt will NOT work

.htaccess Content
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  RewriteRule . /index.html [L]
</IfModule>

Options -Indexes

🔐 GitHub Secrets Configuration

Add secrets in:

GitHub → Repository → Settings → Secrets and variables → Actions

Required Secrets
Name	Description
FTP_SERVER	FTP host (e.g. ftp.storry.tech)
FTP_USERNAME	FTP username
FTP_PASSWORD	FTP password
🤖 CI/CD Pipeline (GitHub Actions)
Workflow file location
.github/workflows/deploy.yml

What the pipeline does

Runs on every push to main

Installs dependencies

Builds the Vite project

Uploads dist/ to public_html/

Cleans old files automatically

Final Workflow Configuration
name: Build & Deploy to cPanel (FTP)

on:
  push:
    branches:
      - main

jobs:
  build-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 9

      - name: Install dependencies
        run: pnpm install --frozen-lockfile

      - name: Build Vite project
        run: pnpm run build

      - name: Deploy to cPanel via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.5
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: dist/
          server-dir: public_html/
          dangerous-clean-slate: true

🔄 Daily Update Workflow (IMPORTANT)

Whenever you make changes:

git status
git add .
git commit -m "Describe your change"
git push origin main

What happens automatically

GitHub Actions builds the project

New files deploy to the server

Website updates live

🚫 Do NOT upload files manually after this setup

🧪 Deployment Verification Checklist

After each deploy:

✅ GitHub Actions workflow is green

✅ public_html/index.html updated

✅ public_html/assets/ contains new hashed files

✅ .htaccess exists (not .txt)

✅ Hard refresh shows changes

🛑 Common Issues & Fixes
❌ 404 error on page refresh

Cause: Missing or wrong .htaccess
Fix: Ensure .htaccess exists in public_html

❌ Changes not reflecting

Cause: Browser cache
Fix:

Ctrl + Shift + R

❌ Git says “nothing to commit”

Cause: Files not staged
Fix:

git add .
git commit -m "message"

❌ Nested public_html/public_html

Cause: Wrong FTP deployment path
Fix:

server-dir: public_html/

📌 Use Cases
✅ Ideal for

Company websites

Landing pages

React SPAs

Portfolios

SaaS marketing sites

❌ Not suitable for

Node.js backend APIs

SSR frameworks (without Node hosting)

🏁 Final Status

✔ Production-ready
✔ Auto-deploy enabled
✔ SPA routing configured
✔ Stable CI/CD pipeline
✔ Enterprise workflow on shared hosting

📬 Support

For deployment, CI/CD, or performance optimization issues, refer to this README or contact the project maintainer.
