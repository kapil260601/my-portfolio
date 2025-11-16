# Portfolio Website Deployment Guide

## Overview
This is a modern, fully responsive portfolio website for Kapil Patel, built with React, TypeScript, Tailwind CSS, and Vite.

## Features
- Beautiful hero section with animated text
- Smooth scroll navigation
- Responsive design for all devices
- Interactive skills section with progress bars
- Timeline-based experience section
- Featured projects showcase
- Contact form with mailto integration
- Modern animations and transitions
- Professional color scheme (blue gradient theme)

## Local Development

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

## Deployment to Vercel (FREE)

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Your Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Click "Add New Project" in Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project
   - Click "Deploy"
   - Your site will be live in ~2 minutes!

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts:
   - Set up and deploy? Y
   - Which scope? (Select your account)
   - Link to existing project? N
   - Project name? (Press enter for default)
   - In which directory is your code located? ./
   - Want to override settings? N

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Deployment to Render (FREE Alternative)

1. **Create a Render Account**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub

2. **Create a New Static Site**
   - Click "New +" → "Static Site"
   - Connect your GitHub repository
   - Configure:
     - Name: kapil-patel-portfolio
     - Build Command: `npm run build`
     - Publish Directory: `dist`
   - Click "Create Static Site"

3. **Your site will be live at**
   - `https://kapil-patel-portfolio.onrender.com`

## Custom Domain (Optional)

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS settings at your domain registrar

### For Render:
1. Go to your static site settings
2. Click "Custom Domains"
3. Add your domain and update DNS

## Environment Variables
This portfolio doesn't require any environment variables. It's a static site ready to deploy!

## File Structure
```
project/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx    # Sticky navigation with smooth scroll
│   │   ├── Hero.tsx          # Hero section with animated typing
│   │   ├── About.tsx         # About section with highlights
│   │   ├── Skills.tsx        # Skills with animated progress bars
│   │   ├── Experience.tsx    # Work experience timeline
│   │   ├── Projects.tsx      # Featured projects showcase
│   │   └── Contact.tsx       # Contact form with social links
│   ├── App.tsx               # Main app component
│   ├── main.tsx              # Entry point
│   └── index.css             # Custom styles and animations
├── index.html                # HTML template
├── vercel.json               # Vercel configuration
└── package.json              # Dependencies
```

## Customization Tips

### Change Colors
The website uses a blue gradient theme. To change:
- Edit gradient colors in components (from-blue-X to-blue-X)
- Replace with your preferred color (e.g., from-green-X to-green-X)

### Update Content
- **Personal Info**: Edit `Hero.tsx` and `About.tsx`
- **Skills**: Update arrays in `Skills.tsx`
- **Experience**: Modify experience array in `Experience.tsx`
- **Projects**: Edit projects array in `Projects.tsx`
- **Contact**: Update contact info in `Contact.tsx` and `Hero.tsx`

### Add Animations
- Custom animations are defined in `src/index.css`
- Add new keyframes in the `@layer utilities` section

## Performance Optimization

The site is already optimized with:
- Lazy loading components
- Optimized images (uses icons only)
- Minified production build
- Tailwind CSS purging
- Fast Vite build tool

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
# Or use a different port
npm run dev -- --port 3000
```

## Support & Maintenance

### Update Dependencies
```bash
npm update
npm run build  # Test after updating
```

### Check for Vulnerabilities
```bash
npm audit
npm audit fix
```

## Contact
For questions or issues, contact:
- Email: kapil2601patel@gmail.com
- Phone: +91 9174570187

---

Built with React + TypeScript + Tailwind CSS + Vite
Deployed on Vercel/Render
