# Solitary Star - Album Launch Website

A modern, immersive single-page website showcasing the "Solitary Star" album by The Messengers. Built with React, TypeScript, and Tailwind CSS, this website provides a premium listening experience and easy access to all major streaming platforms.

![Solitary Star Album Cover](/solitary-star.png)

## Features

- 🎵 Full-screen hero section with album artwork
- 🔗 Direct links to major streaming platforms
- 👤 Artist biography section
- 🌟 Modern, responsive design with smooth animations
- 🌙 Dark mode optimized
- ⚡ Fast loading and performance optimized

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Docker

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher
- Docker (optional)

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd solitary-star
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Using Docker

#### Development

```bash
docker compose up
```

#### Production

```bash
docker build -t solitary-star .
docker run -p 80:80 solitary-star
```

## Project Structure

```
solitary-star/
├── src/
│   ├── components/     # React components
│   ├── styles/        # Global styles
│   └── App.tsx        # Main application component
├── public/            # Static assets
├── Dockerfile         # Production Docker configuration
├── Dockerfile.dev     # Development Docker configuration
└── docker-compose.yml # Docker Compose configuration
```

## Customization

### Streaming Links

Update the `streamingPlatforms` array in `src/components/StreamingLinks.tsx` with your platform URLs:

```typescript
const streamingPlatforms = [
  {
    name: 'Spotify',
    url: 'your-spotify-url',
    // ...
  },
  // ...
];
```

### Artist Information

Modify the artist bio in `src/components/ArtistBio.tsx` and update social media links as needed.

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

© 2024 The Messengers. All rights reserved.