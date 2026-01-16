# IronForge Gym Website

A demo gym website built with **React**, **TypeScript**, and **Vite**. This project serves as a minimal starter and presentation site using modern frontend tooling and best practices for building fast, interactive web user interfaces.

## Overview

This repository contains the source code for a demo gym site application. It is implemented using:
- **React** (UI library)
- **TypeScript** (typed JavaScript)
- **Vite** (fast frontend tooling / bundler)
- **Tailwind CSS** (utility-first styling)

The application is designed to be responsive and extensible for typical gym site features — including navigation, hero sections, class listings, pricing, and other content relevant to a fitness company.

## Features

- Built with **React + TypeScript**
- Fast development experience powered by **Vite**
- Modern and responsive UI
- Tailwind CSS for styling
- Clear folder structure for components and assets

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React      | Component-based UI |
| TypeScript | Static typing |
| Vite       | Dev server & build tool |
| Tailwind CSS | Utility-first styling |
| Node.js    | Runtime / npm scripts |

## Getting Started

### Prerequisites

Ensure you have **Node.js (v16 or higher)** and **npm** installed:

```bash
node -v
npm -v
```

### Installation

1. Clone the repository:

```bash
git clone https://github.com/s3ldc/demo-gym-site.git
```

2. Navigate into the project directory:

```bash
cd demo-gym-site
```

3. Install dependencies:

```bash
npm install
```

### Running Locally

Start the development server:

```bash
npm run dev
```

This will start a local development server (usually at `http://localhost:5173`) with hot module reloading.

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized output will be in the `dist/` directory.

### Preview Production Build

To locally preview the production build:

```bash
npm run preview
```

## Project Structure

```
demo-gym-site/
├─ public/                     Static assets
├─ src/
│  ├─ assets/                 Images, fonts, etc.
│  ├─ components/             Reusable React components
│  ├─ App.tsx                 Root React component
│  └─ main.tsx                Vite entry point
├─ .gitignore                 Git ignore rules
├─ package.json               NPM scripts & dependencies
├─ postcss.config.js          PostCSS config
├─ tailwind.config.ts         Tailwind CSS config
├─ tsconfig.json              TypeScript config
└─ vite.config.ts             Vite config
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/foo`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/foo`)
5. Open a Pull Request

## License

This project does not specify a license in the repo. You may choose and add a suitable license (e.g., MIT License) if you plan to publish or share widely.

