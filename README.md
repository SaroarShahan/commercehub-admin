# 🛒 CommerceHub Admin Dashboard

A modern, responsive e-commerce administration dashboard built with Next.js 14, TypeScript, and Tailwind CSS. This powerful admin panel provides comprehensive tools for managing your e-commerce operations.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 **Modern UI/UX**

- **Dark Theme Design**: Professional slate-based color scheme
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Elegant transitions and hover effects
- **Interactive Components**: Enhanced user experience with micro-interactions

### 📊 **Dashboard Components**

- **Header**: Search functionality, notifications, user profile, and settings
- **Sidebar**: Organized navigation with icons and product type categories
- **Footer**: Comprehensive links, social media, and system status

### 🛍️ **E-commerce Management**

- **Product Types**: Categorized product management with specific icons
  - Electronics 💻
  - Clothing 👕
  - Books 📚
  - Home & Garden 🏠
  - Sports & Outdoors ⚡
  - Beauty & Health ❤️
  - Food & Beverages 🍽️
  - Automotive 🚗
- **User Management**: Customer and admin user administration
- **Order Processing**: Order tracking and management
- **Analytics**: Business insights and reporting
- **Settings**: System configuration and preferences

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SaroarShahan/commercehub-admin.git
   cd commercehub-admin
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
commercehub-admin/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # Reusable components
│   ├── features/              # Feature-specific components
│   └── layouts/               # Layout components
│       ├── header/            # Header component
│       ├── sidebar/           # Sidebar navigation
│       └── footer/            # Footer component
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### Colors

- **Primary**: Blue (`#3b82f6`) for actions and highlights
- **Background**: Slate dark theme (`#0f172a`, `#1e293b`)
- **Text**: White and slate variants for contrast
- **Accents**: Purple gradients for special elements

### Typography

- **Font**: Geist font family (optimized by Next.js)
- **Hierarchy**: Clear heading and body text distinction
- **Responsive**: Scales appropriately across devices

## 🛠️ Technologies Used

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[React](https://reactjs.org/)** - UI library
- **[Heroicons](https://heroicons.com/)** - Beautiful SVG icons

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop**: Full-featured layout with sidebar navigation
- **Tablet**: Adapted layout with collapsible elements
- **Mobile**: Touch-friendly interface with optimized navigation

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. **Connect your repository** to [Vercel](https://vercel.com)
2. **Configure build settings** (auto-detected for Next.js)
3. **Deploy** with one click

### Other Deployment Options

- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **Docker**: Containerized deployment
- **Self-hosted**: Traditional server deployment

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Saroar Shahan**

- GitHub: [@SaroarShahan](https://github.com/SaroarShahan)
- LinkedIn: [Connect with me](https://linkedin.com/in/saroarshahan)

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Heroicons](https://heroicons.com/) for the beautiful icon set
- [Vercel](https://vercel.com/) for hosting and deployment platform

---

⭐ **Star this repository if you found it helpful!**
