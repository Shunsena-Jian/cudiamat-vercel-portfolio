# Jian Cudiamat - Portfolio Website

A modern, terminal-themed personal portfolio website built with **React**, **TypeScript**, and **Vite**. This project showcases my skills, experience, and projects in a unique, developer-centric interface featuring command-line aesthetics and smooth animations.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Email Service:** [EmailJS](https://www.emailjs.com/)

## ✨ Features

- **Terminal UI Theme:** A custom "hacker" aesthetic with window-like components and typewriter effects.
- **Interactive Sections:**
  - **Projects:** Showcase of works like the *Cadet Information System* and *IntelliDocs*, featuring tech stacks and performance metrics.
  - **Experience:** Professional history displayed as system logs.
  - **Skills:** Categorized technical proficiencies with visual indicators.
- **Contact Form:** Fully functional contact form integrated with EmailJS.
- **Responsive Design:** Optimized for various screen sizes.

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shunsena-Jian/cudiamat_main_portfolio.git
   cd cudiamat_main_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components (TerminalWindow, TypewriterText, etc.)
├── config/          # Portfolio data (Projects, Experience, Skills)
├── constants/       # Shared animation variants and constants
├── sections/        # Main page sections (Home, Projects, Experience, Contact)
├── types.ts         # TypeScript definitions
├── App.tsx          # Main application entry
└── index.css        # Global styles and Tailwind directives
```

## 📬 Contact

- **GitHub:** [Shunsena-Jian](https://github.com/Shunsena-Jian)
- **LinkedIn:** [Jian Raphael Cudiamat](https://www.linkedin.com/in/jian-raphael-cudiamat-70b1a5269/)
- **Email:** [jian.r.cudiamat@gmail.com](mailto:jian.r.cudiamat@gmail.com)