# 🚀 Portfolio Build & Deploy Guide

## Prerequisites
- Node.js 18+ installed
- pnpm package manager

## Local Development

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Run Development Server
```bash
pnpm dev
```
Your portfolio akan accessible di `http://localhost:5173`

### 3. Build for Production
```bash
pnpm build
```

## 📦 Build Output
Setelah build, semua file akan berada di folder `dist/`:
- `index.html` - Main HTML file
- `assets/` - Bundled CSS, JavaScript, dan images

## 🌐 Deploy to GitHub Pages

### Manual Deploy (Recommended for First Time)

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Push to gh-pages branch**
   ```bash
   git subtree push --prefix dist origin gh-pages
   ```

3. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Set source to `gh-pages` branch
   - Save

### Automatic Deploy with GitHub Actions

1. **Create workflow file** at `.github/workflows/deploy.yml`
2. **The workflow will:**
   - Run on every push to `index.html` branch
   - Install dependencies
   - Build the project
   - Deploy to `gh-pages` branch
   - GitHub Pages will auto-publish

## 📍 Portfolio URL
After deployment, access your portfolio at:
```
https://ismi21002.github.io/Portfolioismianjarfarida/
```

## 🔧 Environment Setup

### Required Environment Variables
None required for basic portfolio deployment.

### Optional Customization
Edit these files to customize your portfolio:
- `src/App.tsx` - Main app component
- `src/components/*/` - Individual sections
- `tailwind.config.ts` - Styling theme
- `vite.config.ts` - Build configuration

## 📝 Project Structure
```
src/
├── components/
│   ├── Navbar.tsx      # Navigation bar with dark mode
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills with proficiency bars
│   ├── Projects.tsx    # Project showcase cards
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles

public/
└── assets/             # Static assets

dist/                   # Built files (after pnpm build)
```

## 🎨 Features
✅ Responsive Design
✅ Dark Mode Support
✅ Smooth Scrolling
✅ Contact Form
✅ Project Showcase
✅ Skills Display
✅ Mobile-Friendly
✅ Fast Loading (Vite optimized)

## 🛠️ Tech Stack
- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.12
- **Build Tool**: Vite 6.3.5
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **UI Components**: Radix UI

## 📞 Support
For issues or questions:
1. Check GitHub Issues
2. Review the source code in `src/`
3. Verify all dependencies are installed

## 🎉 Done!
Your portfolio is ready to deploy and showcase your amazing work!
