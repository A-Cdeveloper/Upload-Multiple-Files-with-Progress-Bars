# Multi-File Upload App

A modern React application for uploading multiple files with progress tracking, built using Vite, TypeScript, and Tailwind CSS.

## Features

- **Multiple file selection**: Select and upload multiple files at once.
- **Progress tracking**: See real-time upload progress for each file.
- **File details**: View file name, size, and type with appropriate icons.
- **Remove files**: Remove individual files before uploading.
- **Clear all**: Remove all selected files with a single click.
- **Responsive UI**: Clean and modern interface styled with Tailwind CSS.
- **API integration**: Uploads files to a configurable endpoint (currently uses [httpbin.org](https://httpbin.org/post) for demo purposes).

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/) (for HTTP requests)
- [Lucide React](https://lucide.dev/) (for icons)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd 13-mulitifile-upload
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

### Lint the Code

```bash
npm run lint
# or
yarn lint
```

## Docker

You can run the app in a Docker container:

```bash
docker build -t multi-file-upload .
docker run -p 3000:3000 multi-file-upload
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/components/` – React components for file upload, file list, progress bar, etc.
- `src/lib/` – Utility functions (file size formatting, icon selection).
- `src/App.tsx` – Main app component.
- `src/main.tsx` – Entry point.
- `index.html` – HTML template.
- `tailwind.config.js` – Tailwind CSS configuration.

## Customization

- **Upload endpoint**: Change the upload URL in `src/components/FileUpload.tsx` (`axios.post(...)`) to your backend endpoint.
- **Styling**: Modify `tailwind.config.js` and component classes for custom themes.

## License

This project is open source and available under the [MIT License](LICENSE).
