# Portfolio – DonDevBenitos

Modern portfolio built with **HTML5**, **CSS3**, **Tailwind CSS**, **JavaScript (ES6+)**, and **React** (Vite).

## Tech stack

- **HTML5** – Semantic markup
- **CSS3** – Custom properties (theme), animations
- **Tailwind CSS** – Utility-first styling
- **JavaScript (ES6+)** – Modules, hooks, async/await
- **React 18** – Components and context
- **Vite** – Build tool and dev server

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Copy your existing assets** (from your previous PHP portfolio) into `public/`:
   - `assets/` → `public/assets/` (e.g. `BenPhoto.JPG`, skill icons: `html.png`, `css.png`, etc.)
   - `images/awards/` → `public/images/awards/` (award images)

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open the URL shown (e.g. http://localhost:5173).

4. **Build for production**
   ```bash
   npm run build
   ```
   Output is in `dist/`. Preview with `npm run preview`.

## Contact form

The contact form is client-side only by default. To send emails you can:

- Use [Formspree](https://formspree.io): set your form endpoint in `src/components/Contact.jsx` and send the form via `fetch`.
- Or connect your own backend API and call it from the submit handler.

## Project structure

- `index.html` – Entry HTML
- `src/main.jsx` – React entry
- `src/App.jsx` – App shell and sections
- `src/components/` – Navbar, Hero, Skills, Experience, Projects, Contact, Footer, Cursor
- `src/context/ThemeContext.jsx` – Dark/light theme
- `src/hooks/useReveal.js` – Scroll reveal
- `src/data.js` – Skills, experience, projects data
- `public/` – Static assets (assets, images)

Place your images in `public/assets/` (e.g. profile photo, skill icons) so they load correctly.
