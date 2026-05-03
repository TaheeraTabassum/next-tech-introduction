import Link from 'next/link';

const tools = [
  {
    slug: 'tailwind-css',
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    desc: 'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90.',
    starCount: '150k'
  },
  {
    slug: 'lucide-react',
    name: 'Lucide React',
    category: 'Icon Library',
    desc: 'Beautiful & consistent icon toolkit made by the community, perfectly optimized for React apps.',
    starCount: '25k'
  },
  {
    slug: 'daisy-ui',
    name: 'DaisyUI',
    category: 'UI Component',
    desc: 'The most popular, free and open-source Tailwind CSS component library for building clean interfaces.',
    starCount: '30k'
  },
  {
    slug: 'framer-motion',
    name: 'Framer Motion',
    category: 'Animation',
    desc: 'A production-ready motion library for React that makes creating animations incredibly easy.',
    starCount: '45k'
  },
  {
    slug: 'next-js',
    name: 'Next.js',
    category: 'React Framework',
    desc: 'The React framework for the web. Used by some of the world\'s largest companies to build high-performance web apps.',
    starCount: '120k'
  },
  {
    slug: 'shadcn-ui',
    name: 'Shadcn UI',
    category: 'UI Component',
    desc: 'Beautifully designed components that you can copy and paste into your apps. Accessible, customizable, and open source.',
    starCount: '70k'
  }
];

export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto font-sans">
      <h1 className="text-3xl font-bold mb-2">DevTool Directory</h1>
      <p className="text-gray-500 mb-8">Learn Next.js Dynamic Routing easily</p>
      
      <div className="grid sm:grid-cols-2 gap-6">
        {tools.map((tool) => (
          <div key={tool.slug} className="p-6 border border-gray-200 rounded-2xl hover:shadow-lg transition bg-white">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{tool.name}</h2>
            <p className="text-gray-600 mb-4 text-sm">{tool.desc}</p>
           
            <Link 
              href={`/learn/tools/${tool.slug}`} 
              className="text-blue-600 hover:underline text-sm font-semibold"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}