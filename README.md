# Get Hyped

A modern, interactive marketing website for Get Hyped - a creative agency specializing in social media content creation, strategy, and digital marketing.

## 🌐 Live Demo

[View Live Site](https://gethyped-roan.vercel.app/)

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion and GSAP for engaging user experiences
- **Scroll-based Interactions**: Dynamic scroll animations and transitions
- **Modern UI**: Clean, professional design with attention to detail
- **Performance Optimized**: Built with Vite for fast development and optimized builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion & GSAP
- **Language**: JavaScript (ES6+)
- **Linting**: ESLint

## 📁 Project Structure

```
src/
├── components/
│   ├── clients/           # Client testimonials and marquee
│   ├── ExpertiseSection/  # Expertise showcase with scroll animations
│   ├── hero/             # Hero section components
│   ├── IntroSection/     # Introduction section
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── SelectedWork/     # Portfolio/work showcase
│   └── UI/               # Reusable UI components
├── constants/            # Data constants
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
└── assets/               # Static assets
```

## 🏃 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Sh-Mustak/gethyped.git
   cd gethyped
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🎨 Component Architecture

The project follows a modular component architecture:

- **Atomic Design**: Components are broken down into small, reusable pieces
- **Separation of Concerns**: Data, logic, and presentation are separated
- **Responsive Components**: Each component handles its own responsive behavior
- **Custom Hooks**: Business logic extracted into reusable hooks

### Key Components

- **ExpertiseSection**: Interactive scroll-based expertise showcase
- **IntroSection**: Hero introduction with video and call-to-action
- **ClientsMarquee**: Animated client logo carousel
- **SelectedWork**: Portfolio showcase with hover effects

## 🚀 Deployment

The project is configured for static site deployment. Build the project and deploy the `dist` folder:

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

- Follow React best practices
- Use functional components with hooks
- Maintain consistent naming conventions
- Keep components small and focused
- Use Tailwind CSS utility classes for styling

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions or inquiries about this project, please contact the development team.

---

**Built with ❤️ using React & Vite**
