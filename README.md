# Utkarsh Kumar — Portfolio Website

A premium dark-themed personal portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**. Features glassmorphism UI, smooth animations, and a fully responsive design.

## 🚀 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — smooth animations & transitions
- **React Icons** — icon library
- **TypeScript** — type safety

## ✨ Features

- Dark modern UI with gradient mesh backgrounds
- Glassmorphism cards and components
- Typewriter effect for role titles
- Animated skill bars with category filter
- Timeline-based experience section
- Project cards with live links
- Contact form with success state
- Smooth scroll-triggered animations
- Fully responsive (mobile-first)
- SEO optimised metadata

## 📁 Project Structure

```
utkarsh-portfolio/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles + utilities
├── components/
│   ├── Navbar.tsx        # Responsive navbar with pill indicator
│   ├── Footer.tsx        # Footer with socials
│   └── sections/
│       ├── Hero.tsx      # Hero with typewriter animation
│       ├── About.tsx     # About + stats + education
│       ├── Skills.tsx    # Skill bars with category filter
│       ├── Experience.tsx # Timeline work history
│       ├── Projects.tsx  # Project cards with links
│       └── Contact.tsx   # Contact form + info
├── lib/
│   └── data.ts           # All portfolio content (edit this!)
├── public/
│   └── resume.pdf        # ⚠️ Add your resume PDF here
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## ⚙️ Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Steps

```bash
# 1. Clone / copy the project
cd utkarsh-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open in browser
# http://localhost:3000
```

## 📝 Customisation

All content is centralised in **`lib/data.ts`**. Edit it to update:
- Name, roles, tagline
- Contact details
- Skills and proficiency levels
- Work experience
- Projects (with links)
- Education & certifications

## 🚀 Deployment

### Option 1: Vercel (Recommended — Free)

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/utkarsh-portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in with GitHub

3. Click **"Add New Project"** → Import your repository

4. Leave all settings as default → Click **"Deploy"**

5. Your site goes live at `https://utkarsh-portfolio.vercel.app` 🎉

6. Add a custom domain in Vercel Dashboard → Settings → Domains

### Option 2: Netlify

1. Run build:
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually"

3. Drag and drop the `.next` folder (Note: for SSR, prefer Vercel)

### Option 3: Self-Hosted (VPS)

```bash
# Build the app
npm run build

# Start in production mode
npm start

# Or use PM2 for process management
npm install -g pm2
pm2 start "npm start" --name portfolio
pm2 startup
pm2 save
```

## 📄 Adding Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

The "Resume ↓" button in the Navbar links to this file.

## 🎨 Theme Customisation

Edit `tailwind.config.ts` to change accent colors:
```ts
colors: {
  accent: {
    cyan: "#00D9FF",    // ← Change these
    purple: "#8B5CF6",
    pink: "#EC4899",
  },
}
```

Then update `globals.css` CSS variables to match:
```css
:root {
  --accent-cyan: #00D9FF;
  --accent-purple: #8B5CF6;
  --accent-pink: #EC4899;
}
```

## 📞 Contact

Built by **Utkarsh Kumar**
- Email: utkarsh201994@gmail.com
- LinkedIn: [utkarshkumar](https://www.linkedin.com/in/utkarshkumar-94783212b)
