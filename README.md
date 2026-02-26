# Anthony.dev Portfolio

> Personal portfolio website for **Byamugisha Anthony** — Full Stack Developer & Data Enthusiast.

This repository contains a single-page application built with React and Vite. It showcases Anthony's skills, projects, resume, and provides a contact form powered by Formspree.

---

## 🚀 Features

- Responsive layout with Tailwind CSS
- Navigation using React Router (hash-based for static hosting)
- Dynamic project pages with React components
- Contact form integrated with [Formspree](https://formspree.io)
- Reusable UI components built with Radix UI and custom hooks
- Toast notifications for form feedback
- Image optimization utilities

---

## 🛠️ Tech Stack

- **Framework:** [React 18](https://reactjs.org)
- **Bundler:** [Vite](https://vitejs.dev)
- **Styling:** Tailwind CSS, [clsx](https://github.com/lukeed/clsx)
- **UI primitives:** [Radix UI](https://www.radix-ui.com)
- **Animation:** [Framer Motion](https://www.framer.com/motion)
- **Routing:** React Router DOM
- **Forms:** Formspree, EmailJS (optional)
- **Utilities:** class-variance-authority, tailwind-merge, lucide-react icons
- **Testing & Linting:** Vite Test, ESLint

---

## 📁 Project Structure

```
anthony.dev/
├─ public/                # Static assets
│  └─ ...
├─ src/
│  ├─ components/         # Shared UI components
│  │  ├─ ui/              # Radix-based primitives (Button, Toast, etc.)
│  │  └─ ...
│  ├─ hooks/              # Custom React hooks (useIsMobile, useToast)
│  ├─ lib/                # Utilities (utils.js)
│  ├─ pages/              # Top-level routes (About Me, Projects, Contact...)
│  ├─ App.jsx             # Router and layout
│  └─ main.jsx            # Application entrypoint
├─ index.html
├─ vite.config.js         # Vite configuration
└─ package.json
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ / 18+ (LTS recommended)
- npm or yarn

### Installation

```bash
# clone the repository
git clone https://github.com/anthonybyamugisha/anthony.dev.git
cd anthony.dev

# install dependencies
npm install
# or
# yarn
```

### Development

```bash
npm run dev
# opens http://localhost:3000 by default
```

### Linting & Testing

```bash
npm run lint
npm run test
```

### Building for Production

```bash
npm run build
```

The production files are generated in the `dist/` folder. You can preview them locally with:

```bash
npm run preview
```

---

## 📬 Contact Form Setup

The contact page uses Formspree for handling submissions. Follow the detailed instructions in [FORMSPREE_SETUP.md](FORMSPREE_SETUP.md).

In brief:

1. Create a Formspree account and a form.
2. Copy the endpoint URL and replace `YOUR_FORM_ID` in `src/pages/Contact.jsx`.
3. Configure email settings in the Formspree dashboard.
4. Test the form by submitting from the running app.

> **Tip:** Formspree's free tier allows 50 submissions per month.

---

## 📦 Deployment

This site can be hosted on any static file host (GitHub Pages, Netlify, Vercel, etc.).

### GitHub Pages (example)

Install `gh-pages` and add these scripts to `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

> Make sure `homepage` in `package.json` is set to `"."` or the URL of your site.

### Other Platforms

- **Netlify:** Drag `dist/` folder or connect the repo and set build command to `npm run build`.
- **Vercel:** Import repo, set framework to `Vite`, and use default settings.

---

## 📝 Notes & Tips

- The router uses `HashRouter` so the app works correctly on static hosts without server configuration.
- Toast notifications provide feedback for actions like form submission.
- Images in `public/images` can be referenced directly or processed with `ImageTest` component.

---

## ❤️ Contributing

This is a personal portfolio; contributions are welcome but not required. Feel free to open issues or submit PRs for improvements.


