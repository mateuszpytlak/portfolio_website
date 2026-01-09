import arcRaidersScreenshot from '../assets/arc_raiders_screenshot.png'
import ecommerceScreenshot from '../assets/ecommerce_screenshot.png'
import f1WidgetScreenshot from '../assets/f1_widget_screenshot.jpg'

export const projects = [
  {
    title: 'Mini e-Commerce App',
    role: 'Frontend Developer',
    stack: [
      'React',
      'TypeScript',
      'Zustand',
      'Zod',
      'React Router',
      'Tailwind',
    ],
    summary:
      'E-commerce demo with product discovery, cart persistence, and a validated checkout flow powered by Fake Store API.',
    result: 'Focused on clean component structure, global state, and API integration.',
    live: 'https://react-store-demo-six.vercel.app/products',
    repo: 'https://github.com/mateuszpytlak/react-store-demo',
    image: ecommerceScreenshot,
  },
  {
    title: 'Interactive Item Management SPA',
    role: 'Frontend Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    summary:
      'Utility SPA for Arc Raiders loot planning with smart grouping, live search, collapsible sections, and persistent bench settings.',
    result: 'Showcases data-driven UI architecture and responsive UX.',
    live: 'https://arc-raiders-loot-table-steel.vercel.app',
    repo: 'https://github.com/mateuszpytlak/arc_raiders_loot_table/',
    image: arcRaidersScreenshot,
  },
  {
    title: 'F1 Weekend Schedule Widget',
    role: 'Android Developer',
    stack: ['Kotlin', 'Coroutines', 'Retrofit', 'Moshi', 'AppWidget'],
    summary:
      'Android widget that shows the next Formula 1 weekend schedule with caching, time zone controls, and multiple layouts.',
    result: 'Built with AI-assisted Kotlin while expanding into mobile development.',
    image: f1WidgetScreenshot,
  },
]
