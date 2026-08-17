# ALU Robotics Club Website

The official website for the **African Leadership University Robotics Club** — Kigali, Rwanda.

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later (or [Bun](https://bun.sh/))
- A terminal

### Install dependencies

```bash
npm install
# or
bun install
```

### Run in development

```bash
npm run dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
# or
bun run build
```

---

## Adding your logo files

The navbar and footer load logos from the `public/` folder. Drop these two files in before running:

| File | What it is |
|------|-----------|
| `public/robotics-logo.png` | ALU Robotics Club logo (the gear/R mark) |
| `public/alu-logo.png` | African Leadership University logo |

If either file is missing the site still works — the image just won't display.

---

## Adding content

**All site content lives in one file: [`src/data/content.js`](src/data/content.js)**

### Add a hackathon / competition / project

1. Open `src/data/content.js`
2. Copy an existing entry object in the `entries` array
3. Fill in the fields (keep `slug` unique — it becomes the URL)
4. Add photos to `public/hackathon-2025/` (or create a new folder like `public/my-event/`)
5. Reference photos in the `images` array as `{ src: '/my-event/photo-01.jpg', caption: 'Description' }`

### Update club info

Edit the `CLUB` object at the bottom of `src/data/content.js`:

```js
export const CLUB = {
  name: 'ALU Robotics Club',
  tagline: '...',
  founded: '2022',
  email: 'aluroboticsclub@gmail.com',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/alu.robotics.club/' },
    { label: 'LinkedIn', href: '...' },
    { label: 'YouTube', href: 'https://www.youtube.com/@ALU.Robotics' },
  ],
}
```

---

## Project structure

```
alu-robotics-club/
├── public/
│   ├── favicon.png
│   ├── robotics-logo.png      ← add your club logo here
│   ├── alu-logo.png           ← add the ALU logo here
│   ├── photos/                ← general background photos
│   └── hackathon-2025/        ← ALU Hackathon 2025 photos (22 frames)
├── src/
│   ├── assets/                ← any imported assets (processed by Vite)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── SlideshowSection.jsx
│   │   ├── CategoryIndex.jsx
│   │   ├── EntryRow.jsx
│   │   ├── EntryDetail.jsx
│   │   └── PhotoGrid.jsx
│   ├── data/
│   │   └── content.js         ← ⭐ all site content lives here
│   ├── lib/
│   │   └── utils.js
│   ├── routes/                ← file-based routing (TanStack Router)
│   │   ├── __root.tsx
│   │   ├── index.tsx          ← Home
│   │   ├── about.tsx
│   │   ├── gallery.tsx
│   │   ├── hackathons.index.tsx
│   │   ├── hackathons.$slug.tsx
│   │   ├── competitions.index.tsx
│   │   ├── competitions.$slug.tsx
│   │   ├── projects.index.tsx
│   │   └── projects.$slug.tsx
│   ├── main.jsx               ← app entry point
│   ├── router.js
│   └── styles.css             ← global styles + Tailwind
├── index.html
├── vite.config.js
└── package.json
```

---

## Tech stack

| Tool | Purpose |
|------|---------|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vitejs.dev/) | Build tool & dev server |
| [TanStack Router](https://tanstack.com/router) | File-based client-side routing |
| [TanStack Query](https://tanstack.com/query) | Data fetching |
| [Tailwind CSS v4](https://tailwindcss.com/) | Styling |
| [Lucide React](https://lucide.dev/) | Icons |

---

## Social links

| Platform | Link |
|----------|------|
| Instagram | [@alu.robotics.club](https://www.instagram.com/alu.robotics.club/) |
| LinkedIn | [ALU Robotics Club](https://www.linkedin.com/company/alu-robotics-club/posts/?feedView=all) |
| YouTube | [@ALU.Robotics](https://www.youtube.com/@ALU.Robotics) |
| Email | [aluroboticsclub@gmail.com](mailto:aluroboticsclub@gmail.com) |

---

## License

© ALU Robotics Club, African Leadership University. All rights reserved.
