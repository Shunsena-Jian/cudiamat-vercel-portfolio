# cudiamat-vercel-portfolio

## Project Overview
This is a modern, terminal-themed personal portfolio website built with **React 19**, **TypeScript**, and **Vite**. The application features a unique, developer-centric interface with command-line aesthetics, interactive sections, smooth animations via Framer Motion, and a functional contact form integrated with EmailJS. The application also supports dynamic dark/light mode toggling.

### Key Technologies
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS

## Project Structure
- `src/App.tsx`: Main application entry point handling navigation state (`activeSection`) and theme (dark/light) management.
- `src/components/`: Reusable UI components (e.g., `NavBar`, `TerminalWindow`, `TypewriterText`).
- `src/sections/`: Main page sections representing different views (`Home`, `Projects`, `Experience`, `Contact`, `KasaloKusinaDetails`).
- `src/data/`: Static data for Projects, Experience, and Skills.
- `src/types.ts`: TypeScript type definitions.
- `src/index.css`: Global styles and Tailwind directives.

## Building and Running

### Prerequisites
1. Ensure Node.js is installed.
2. Create a `.env` file in the root directory and configure the required environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   # Note: vite.config.ts also references GEMINI_API_KEY
   GEMINI_API_KEY=your_gemini_api_key
   ```

### Commands
- **Install dependencies**: 
  ```bash
  npm install
  ```
- **Start the development server** (runs on port 3000):
  ```bash
  npm run dev
  ```
- **Build for production**:
  ```bash
  npm run build
  ```
- **Preview production build**:
  ```bash
  npm run preview
  ```
- **Run linting**:
  ```bash
  npm run lint
  ```

## Development Conventions
- **Component Architecture**: The app uses a single-page architecture where "pages" are managed as stateful sections within `App.tsx` (e.g., `home`, `projects`, `experience`, `contact`).
- **Styling**: Tailwind CSS is used heavily for styling, with custom configuration supporting dark mode (`class` strategy on the HTML element). 
- **Absolute Imports**: Path aliases are configured in Vite/TypeScript, allowing the use of `@/` to import from the `src` directory.
