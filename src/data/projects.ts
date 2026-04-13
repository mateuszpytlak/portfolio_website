import arcRaidersThumb1 from '../assets/arc_raiders_thumb_1.png?format=webp'
import arcRaidersThumb2 from '../assets/arc_raiders_thumb_2.png?format=webp'
import arcRaidersScreen1 from '../assets/arc_raiders_screen_1.png?format=webp'
import arcRaidersScreen2 from '../assets/arc_raiders_screen_2.png?format=webp'
import ecommerceScreen1 from '../assets/ecommerce_screen_1.png?format=webp'
import ecommerceScreen2 from '../assets/ecommerce_screen_2.png?format=webp'
import ecommerceScreen3 from '../assets/ecommerce_screen_3.png?format=webp'
import ecommerceScreen4 from '../assets/ecommerce_screen_4.png?format=webp'
import ecommerceThumb1 from '../assets/ecommerce_thumb_1.png?format=webp'
import ecommerceThumb2 from '../assets/ecommerce_thumb_2.png?format=webp'
import ecommerceThumb3 from '../assets/ecommerce_thumb_3.png?format=webp'
import ecommerceThumb4 from '../assets/ecommerce_thumb_4.png?format=webp'
import f1WidgetScreen1 from '../assets/f1_widget_screen_1.jpg?format=webp'
import f1WidgetScreen2 from '../assets/f1_widget_screen_2.jpg?format=webp'

export type Project = {
  slug: string
  title: string
  role: string
  stack: string[]
  stackDetailed: string[]
  summary: string
  result: string
  live?: string
  repo?: string
  storeUrl?: string
  thumbGallery: string[]
  gallery: string[]
  description: string[]
  challenges: string[]
}

export const projects: Project[] = [
  {
    slug: 'mini-ecommerce-app',
    title: 'Mini e-Commerce App',
    role: 'Frontend Developer',
    stack: ['React + TS', 'Tailwind', 'Zustand'],
    stackDetailed: [
      'React',
      'TypeScript',
      'Zustand',
      'Zod',
      'React Router',
      'Tailwind',
      'Fake Store API',
    ],
    summary:
      'E-commerce demo with product discovery, cart persistence, and a validated checkout flow powered by Fake Store API.',
    result: 'Covers API integration, persistent cart state, auth, and basic test coverage.',
    live: 'https://react-store-demo-six.vercel.app/products',
    repo: 'https://github.com/mateuszpytlak/react-store-demo',
    thumbGallery: [ecommerceThumb1, ecommerceThumb2, ecommerceThumb3, ecommerceThumb4],
    gallery: [ecommerceScreen1, ecommerceScreen2, ecommerceScreen3, ecommerceScreen4],
    description: [
      'React Store Demo is an e-commerce storefront built with React 19 + TypeScript, bundled with Vite. It pulls from the public Fake Store API and covers category filtering, debounced search, and sorting. The layout uses cards and responsive grids that scale from mobile to desktop.',
      'Product discovery loads all products once and caches them in a persisted Zustand store to minimize repeat fetches. Users can filter by category, search by title, and sort by price or title with consistent state across views. Individual product pages fetch by id, display metadata and ratings, and enable add-to-cart actions.',
      'The cart is persistent with quantity controls, totals, item removal, and a summary panel; totals are computed in-store. Checkout uses React Hook Form + Zod validation, simulates a processing delay, and clears the cart on submit. Firebase Authentication powers login and registration, while the My Orders view reads history from Firestore for authenticated users.',
      'API, store, and page layers are kept separate. Zustand stores are split by domain (cart, products, auth) and persist to localStorage. Routing is handled by React Router v7. Loading and error states are covered in all data-driven views. Tests cover utilities, API logic, product cards, cart interactions, and store math.',
    ],
    challenges: [
      'Normalizing API data and keeping UI state consistent across views.',
      'Keeping cart state persistent without adding heavy client-side complexity.',
      'Balancing a clean checkout UX with validation and error handling.',
    ],
  },
  {
    slug: 'arc-raiders-loot-table',
    title: 'Interactive Item Management SPA',
    role: 'Frontend Developer',
    stack: ['React + TS', 'Vite', 'Tailwind'],
    stackDetailed: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind',
      'Local storage',
      'Search + filter UI',
    ],
    summary:
      'Utility SPA for Arc Raiders loot planning with smart grouping, live search, collapsible sections, and persistent bench settings.',
    result: 'Built for personal use - search, grouping, and bench tracking all driven by real gameplay needs.',
    live: 'https://arc-raiders-loot-table-xi.vercel.app/',
    repo: 'https://github.com/mateuszpytlak/arc_raiders_loot_table/',
    thumbGallery: [arcRaidersThumb1, arcRaidersThumb2],
    gallery: [arcRaidersScreen1, arcRaidersScreen2],
    description: [
      'A data-heavy utility SPA to help players plan loot tables with fast search and grouping.',
      'The interface supports collapsible sections, persistent settings, and clear scanning of large lists.',
      'I optimized the layout to stay usable on smaller screens while keeping dense information readable.',
    ],
    challenges: [
      'Keeping filtering and grouping fast with a larger data set.',
      'Designing a layout that works for long lists without overwhelming the user.',
      'Persisting user preferences without complicating the state flow.',
    ],
  },
  {
    slug: 'gp-tracker',
    title: 'GP Tracker',
    role: 'Android Developer',
    stack: ['Kotlin', 'Android', 'AppWidget'],
    stackDetailed: [
      'Kotlin',
      'Coroutines',
      'Retrofit',
      'Moshi',
      'AppWidget',
      'Android OS',
    ],
    summary:
      'GP Tracker is a compact Android widget published on Google Play for tracking the next Formula 1 race weekend.',
    result:
      'Officially published on Google Play as a production Android app.',
    storeUrl:
      'https://play.google.com/store/apps/details?id=com.matpyt.gptracker',
    thumbGallery: [f1WidgetScreen2, f1WidgetScreen1],
    gallery: [f1WidgetScreen2, f1WidgetScreen1],
    description: [
      'Officially available on Google Play, GP Tracker is a compact Android widget for checking the next Formula 1 race weekend at a glance.',
      'It supports multiple layouts, time zone adjustments, and cached data to avoid unnecessary fetches.',
      'This project helped me translate API data into a tight, readable mobile UI and ship it as a real store release.',
    ],
    challenges: [
      'Working within AppWidget update limits and background scheduling.',
      'Handling time zones consistently across locales.',
      'Designing multiple layouts that remain legible at small sizes.',
    ],
  },
]
