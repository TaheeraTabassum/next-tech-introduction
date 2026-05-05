import Link from "next/link";

const tools = [
  {
    slug: "tailwind-css",
    name: "Tailwind CSS",
    category: "CSS Framework",
    desc: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90.",
    starCount: "150k",
  },
  {
    slug: "lucide-react",
    name: "Lucide React",
    category: "Icon Library",
    desc: "Beautiful & consistent icon toolkit made by the community, perfectly optimized for React apps.",
    starCount: "25k",
  },
  {
    slug: "daisy-ui",
    name: "DaisyUI",
    category: "UI Component",
    desc: "The most popular, free and open-source Tailwind CSS component library for building clean interfaces.",
    starCount: "30k",
  },
  {
    slug: "framer-motion",
    name: "Framer Motion",
    category: "Animation",
    desc: "A production-ready motion library for React that makes creating animations incredibly easy.",
    starCount: "45k",
  },
  {
    slug: "next-js",
    name: "Next.js",
    category: "React Framework",
    desc: "The React framework for the web. Used by some of the world's largest companies to build high-performance web apps.",
    starCount: "120k",
  },
  {
    slug: "shadcn-ui",
    name: "Shadcn UI",
    category: "UI Component",
    desc: "Beautifully designed components that you can copy and paste into your apps. Accessible, customizable, and open source.",
    starCount: "70k",
  },
];
// export async function generateMetadata({ params }) {
//   const slug = (await params).slug;

//   // fetch post information
//   const post = await tool
//   .then((res) =>
//     res.json(),
//   );

//   return {
//     title: post.name,
//     description: post.desc,
//   };
// }

export default async function page({ params }) {
  const { slug } = await params;
  const tool = tools.find((tool) => tool.slug === slug);
  if (!tool) {
    return <p>Tool not found</p>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{tool.name}</h1>
      <p className="text-gray-400 text-lg leading-relaxed">{tool.desc}</p>
      <p className="text-gray-200 text-lg leading-relaxed">
        category: {tool.category}
      </p>
      <p className="text-gray-300 text-lg leading-relaxed">
        {" "}
        Star Count:{tool.starCount}
      </p>

      <div className="mt-8">
        <Link href="/" className="text-sm text-gray-300 hover:underline">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
