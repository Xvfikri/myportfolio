export type Project = {
    id: string;
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    image: string;
    tags: string[];
    role?: string;
    timeline?: string;
    links: {
        demo: string;
        github: string;
    };
    techStack?: string[];
    features?: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        title: "MyBioskopId",
        slug: "mybioskopid",
        description: "A movie streaming platform with a modern and user-friendly interface. Features real-time movie updates, user profiles, and a responsive design.",
        longDescription: "MyBioskopId is a comprehensive movie discovery and streaming web application designed to provide users with an immersive entertainment experience. Built with performance and usability in mind, it leverages public movie APIs to deliver real-time data on the latest releases, trending movies, and detailed production information. The platform features a sleek, dark-themed UI inspired by industry leaders, utilizing advanced caching strategies and responsive layouts to ensure seamless navigation across all devices.",
        image: "/projects/mybioskopid.png",
        tags: ["Vue.js", "TypeScript", "Tailwind CSS"],
        role: "Frontend Developer",
        timeline: "2024",
        links: {
            demo: "https://my-bioskop-id-b3z1.vercel.app/",
            github: "https://github.com/Xvfikri/MyBioskopId"
        },
        techStack: ["Vue.js 3", "TypeScript", "Tailwind CSS", "TMDB API", "Vite", "Pinia"],
        features: [
            "Real-time movie data integration using TMDB API",
            "Responsive design for mobile and desktop",
            "Advanced search and filtering capabilities",
            "Movie details page with trailers and cast info",
            "Optimized performance with lazy loading"
        ]
    },
    {
        id: "2",
        title: "TODO List",
        slug: "todo-list",
        description: "A simple todo list application with a modern and user-friendly interface. Features drag-and-drop, categories, and local storage persistence.",
        longDescription: "A robust task management application built to demonstrate modern frontend capabilities. This Todo List goes beyond the basics by implementing drag-and-drop reordering, task categorization, and priority levels. State persistence is handled via LocalStorage ensure users never lose their data.",
        image: "/projects/todolist.png",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React"],
        role: "Frontend Developer",
        timeline: "2024",
        links: {
            demo: "https://node-wave-front-end-assessment.vercel.app/",
            github: "https://github.com/Xvfikri/NodeWave-Front-End-Assessment?tab=readme-ov-file"
        },
        techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI Primitives", "Framer Motion"],
        features: [
            "Drag and drop task reordering",
            "Task categories and priority levels",
            "Dark/Light mode support",
            "Local storage persistence",
            "Smooth animations with Framer Motion"
        ]
    },
    {
        id: "3",
        title: "Fleek Creative",
        slug: "fleek-creative",
        description: "A productivity tool for agile teams. Kanban boards, sprint planning, and team collaboration features with dark mode support.",
        longDescription: "Fleek Creative is a project management tool tailored for agile development teams. It simplifies the complexity of sprint planning and task tracking through an intuitive Kanban board interface. The application supports real-time updates, allowing team members to collaborate instantly.",
        image: "/projects/fleek.png",
        tags: ["Next.js", "Prisma", "PostgreSQL", "Zustand"],
        role: "Fullstack Developer",
        timeline: "2024",
        links: {
            demo: "#",
            github: "#"
        },
        techStack: ["Next.js 14", "Prisma ORM", "PostgreSQL", "Zustand State Management", "NextAuth.js"],
        features: [
            "Interactive Kanban board",
            "Team member management and role assignment",
            "Sprint planning tools",
            "Real-time status updates",
            "Secure authentication system"
        ]
    },
    {
        id: "4",
        title: "Natural In Cosmetic",
        slug: "natural-in-cosmetic",
        description: "Web and Mobile application for e-commerce focusing on natural cosmetic products.",
        longDescription: "An e-commerce solution developed for a cosmetic brand, featuring a responsive web storefront and a companion mobile app. The system handles product catalogs, shopping carts, secure checkout flows, and order management.",
        image: "/projects/ecommerce.png",
        tags: ["Laravel", "Jquery", "Bootstrap"],
        role: "Fullstack Developer",
        timeline: "2023",
        links: {
            demo: "#",
            github: "#"
        },
        techStack: ["Laravel 9", "MySQL", "jQuery", "Bootstrap 5", "Stripe API"],
        features: [
            "Comprehensive product catalog",
            "Shopping cart and checkout integration",
            "User account management",
            "Admin dashboard for order processing",
            "Mobile-responsive layout"
        ]
    },
    {
        id: "5",
        title: "My Vote",
        slug: "my-vote",
        description: "Web application for voting",
        longDescription: "A secure and transparent voting platform designed for small to medium-scale elections.",
        image: "/projects/ecommerce.png",
        tags: ["Php Native", "Css"],
        role: "Backend Developer",
        timeline: "2023",
        links: {
            demo: "#",
            github: "#"
        },
        techStack: ["PHP", "MySQL", "CSS3", "JavaScript"],
        features: [
            "Secure voter authentication",
            "Real-time vote tallying",
            "Admin panel for candidate management",
            "Vote history tracking"
        ]
    },
    {
        id: "6",
        title: "TriCoffee",
        slug: "tricoffee",
        description: "Web and Mobile application for coffee shop ordering and loyalty rewards.",
        longDescription: "TriCoffee facilitates digital ordering for coffee shops, allowing customers to browse menus, customize orders, and earn loyalty points. It bridges the gap between online convenience and in-store experience.",
        image: "/projects/ecommerce.png",
        tags: ["Php Native", "Css"],
        role: "Fullstack Developer",
        timeline: "2023",
        links: {
            demo: "#",
            github: "#"
        },
        techStack: ["PHP", "MySQL", "CSS", "REST API"],
        features: [
            "Digital menu with customization options",
            "Loyalty points system",
            "Order tracking",
            "Admin dashboard for inventory"
        ]
    },
    {
        id: "7",
        title: "Product Management",
        slug: "product-management",
        description: "Internal tool for inventory and product lifecycle management.",
        longDescription: "A bespoke internal tool developed to streamline inventory tracking and product management workflows. It allows staff to create, update, and monitor stock levels efficiently.",
        image: "/projects/ecommerce.png",
        tags: ["Php Native", "Css"],
        role: "Backend Developer",
        timeline: "2022",
        links: {
            demo: "#",
            github: "#"
        },
        techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        features: [
            "CRUD operations for products",
            "Stock level alerts",
            "Sales reporting and analytics",
            "User access control"
        ]
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
