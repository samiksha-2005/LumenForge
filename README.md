# Agency AI Website

A modern React + Vite marketing website for a digital agency.

The project includes:
- Animated hero, services, work, team, and contact sections.
- Light/dark theme toggle.
- Responsive navigation with mobile sidebar.
- Contact form integration using Web3Forms.
- Tailwind CSS v4 utility-first styling.

## Project Analysis

### Architecture
- Frontend framework: React 19 with Vite 7.
- Styling: Tailwind CSS v4 + a small custom theme variable.
- Animations: Motion library.
- Notifications: react-hot-toast.
- Data strategy: Small static datasets and image references stored in assets modules.

### Current Component Flow
1. Navbar
2. Hero
3. TrustedBy
4. Services
5. OurWork
6. Teams
7. ContactUs
8. Footer

### Strengths
- Clean component breakdown.
- Consistent spacing and typography.
- Good section-level animation and visual rhythm.
- Simple and maintainable structure for a landing page.

### Improvements Applied
- Fixed animation component usage by switching from lowercase motion tags to Motion components.
- Optimized cursor animation lifecycle in App to prevent stale animation frames.
- Added pointer-type guard so custom cursor logic runs only on fine pointers.
- Improved theme toggle accessibility with button semantics and ARIA label.
- Moved Web3Forms access key to environment variable for better security.
- Confirmed lint status is clean after updates.

## Tech Stack
- React 19
- Vite 7
- Tailwind CSS 4
- Motion
- react-hot-toast
- ESLint 9

## Getting Started

### 1) Install dependencies
```bash
npm install
```

### 2) Configure environment variables
Create a .env file in project root and set:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
```

You can copy from .env.example.

### 3) Start development server
```bash
npm run dev
```

### 4) Build for production
```bash
npm run build
```

### 5) Preview production build
```bash
npm run preview
```

### 6) Lint
```bash
npm run lint
```

## Scripts
- npm run dev: start Vite dev server
- npm run build: create production build
- npm run preview: preview production build
- npm run lint: run ESLint checks

## Folder Structure

```text
.
├── public/
├── src/
│   ├── assets/
│   │   └── assets.js
│   ├── components/
│   │   ├── ContactUs.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── OurWork.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── Services.jsx
│   │   ├── Teams.jsx
│   │   ├── ThemeBtn.jsx
│   │   ├── Title.jsx
│   │   └── TrustedBy.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Customization Guide

### Update branding
- Replace logo files in src/assets.
- Update title in index.html.
- Edit primary color in src/index.css under --color-primary.

### Edit section content
- Hero, Services, Work, Team, and footer text are directly editable in component files.
- Team and logo data are managed in src/assets/assets.js.

### Contact form
- Form submission endpoint is Web3Forms.
- Set VITE_WEB3FORMS_ACCESS_KEY in .env before using the form.

## Notes
- The project uses a custom cursor (hidden default cursor globally).
- If needed for accessibility, you can remove cursor: none from src/index.css.

## License
This project is for learning and portfolio/demo use. Add your preferred license before production distribution.
