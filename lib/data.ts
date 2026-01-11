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
    isConfidential?: boolean;
    company?: string;
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
        timeline: "2025",
        links: {
            demo: "https://github.com/Xvfikri/fleek-project",
            github: "https://github.com/Xvfikri/fleek-project"
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
        image: "/projects/nic.png",
        tags: ["Laravel", "Jquery", "Bootstrap", "Flutter"],
        role: "Frontend & Mobile Developer",
        timeline: "2025",
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
        title: "Mini Ecommerce Portofolio",
        slug: "mini-ecommerce",
        description: "A full-stack mini e-commerce platform built for high performance and clean UI.",
        longDescription: "This mini e-commerce project demonstrates a full-featured online store system. It includes a responsive product catalog, a shopping cart managed with JQuery, and a secure checkout simulation. Built with Laravel 11 and styled with Tailwind CSS, it focuses on modern architecture and user-centric design.",
        image: "/projects/miniecommerce.png",
        tags: ["Laravel 11", "Tailwind CSS", "Jquery", "MySql", "Blade"],
        role: "Fullstack Developer",
        timeline: "2025",
        links: {
            demo: "https://github.com/Xvfikri/mini-ecommerce-portofolio",
            github: "https://github.com/Xvfikri/mini-ecommerce-portofolio"
        },
        techStack: ["Laravel 11", "MySQL", "Tailwind CSS", "JQuery"],
        features: [
            "Dynamic product catalog with filtering",
            "Interactive shopping cart system",
            "Secure user authentication and profiles",
            "Responsive administrative dashboard",
            "Checkout process simulation"
        ]
    },
    {
        id: "6",
        title: "Warehouse Management System",
        slug: "warehouse-management-system",
        description: "A robust system for tracking inventory, managing stock levels, and streamlining warehouse operations.",
        longDescription: "The Warehouse Management System (WMS) is designed to optimize inventory accuracy and operational efficiency. It features real-time stock tracking, inbound/outbound logging, and comprehensive reporting. The integration of Vite and JQuery ensures a snappy, interactive user interface for warehouse staff.",
        image: "/projects/warehouse.png",
        tags: ["Laravel 11", "Tailwind CSS", "Jquery", "MySql", "Vite"],
        role: "Fullstack Developer",
        timeline: "2025",
        links: {
            demo: "https://github.com/Xvfikri/warehouse-system-portofolio",
            github: "https://github.com/Xvfikri/warehouse-system-portofolio"
        },
        techStack: ["Laravel 11", "MySQL", "Tailwind CSS", "JQuery", "Vite"],
        features: [
            "Real-time stock monitoring and alerts",
            "Supplier and customer management",
            "Comprehensive inbound and outbound logging",
            "Detailed inventory analytics and reports",
            "Multi-user role-based access control"
        ]
    },
    {
        id: "7",
        title: "Academic Portal",
        slug: "academic-portal",
        description: "A digital platform for managing academic data, student enrollments, and institutional workflows.",
        longDescription: "The Academic Portal provides a centralized hub for students and faculty. It handles course registration, grade management, and student profiles. Engineered using Laravel 11's latest features, it offers a secure and scalable solution for educational institutions.",
        image: "/projects/AcademicPortal.png",
        tags: ["Laravel 11", "Tailwind CSS", "MySql", "Vite"],
        role: "Fullstack Developer",
        timeline: "2025",
        links: {
            demo: "https://github.com/Xvfikri/academic-portal.git",
            github: "https://github.com/Xvfikri/academic-portal.git"
        },
        techStack: ["Laravel 11", "MySQL", "Tailwind CSS", "Vite"],
        features: [
            "Student registration and enrollment",
            "Grade and performance tracking",
            "Faculty management dashboard",
            "Course schedule and resource management",
            "Automated academic reporting"
        ]
    },
    {
        id: "8",
        title: "CyberQuis",
        slug: "cyberquis",
        company: "CyberArmy Indonesia",
        isConfidential: true,
        description: "A comprehensive quiz and assessment platform developed for CyberArmy Indonesia to facilitate cybersecurity training and evaluation.",
        longDescription: "CyberQuis is a specialized assessment platform designed for cybersecurity professionals and students. Developed during my time at CyberArmy Indonesia, it features a variety of quiz formats, real-time scoring, and detailed performance analytics. To respect corporate confidentiality, the source code is private, but the project demonstrates advanced state management and responsive UI patterns using Vue.js and Vuetify.",
        image: "/projects/cyberquis.png",
        tags: ["Vue.js", "Vuetify", "JavaScript", "State Management"],
        role: "Frontend Developer",
        timeline: "2024",
        links: {
            demo: "https://cyberarmy.id",
            github: "#"
        },
        techStack: ["Vue.js 2/3", "Vuetify", "Vuex", "Axios", "REST API"],
        features: [
            "Advanced quiz engine with multiple question types",
            "Real-time scoring and feedback system",
            "Leaderboard and performance tracking",
            "Responsive administrative dashboard",
            "Secure authentication and authorization"
        ]
    },
    {
        id: "9",
        title: "Konsul Pintar",
        slug: "konsul-pintar",
        company: "Aku Pintar Indonesia",
        isConfidential: true,
        description: "An integrated consultation module for the Aku Pintar ecosystem, connecting students with educational consultants.",
        longDescription: "Konsul Pintar is a core module within the Aku Pintar ecosystem that facilitates direct interaction between students and educational experts. Built with Next.js and Tailwind CSS, it features real-time chat, appointment scheduling, and a seamless user experience integrated with the main platform. This project showcases large-scale application architecture and performance optimization in a high-traffic environment.",
        image: "/projects/konsulpintar.png",
        tags: ["Next.js", "Tailwind CSS", "TypeScript", "Real-time"],
        role: "Frontend Developer",
        timeline: "2025",
        links: {
            demo: "https://akupintar.id",
            github: "#"
        },
        techStack: ["Next.js 14", "Tailwind CSS", "TypeScript", "TanStack Query", "Socket.io"],
        features: [
            "Real-time chat functionality",
            "Consultant availability scheduling",
            "Integrated payment gateway for premium sessions",
            "User-friendly consultation history",
            "Optimized for high-concurrency usage"
        ]
    },
    {
        id: "10",
        title: "Aku Pintar Indonesia Website",
        slug: "aku-pintar-website",
        company: "Aku Pintar Indonesia",
        isConfidential: true,
        description: "The primary web platform for Aku Pintar, serving millions of students across Indonesia with educational resources and tools.",
        longDescription: "The official website of Aku Pintar Indonesia, a leading ed-tech platform. I contributed to the modernization of the portal using Next.js and Tailwind CSS, focusing on SEO optimization, mobile responsiveness, and scalable component architecture. The platform includes diagnostic tests, school databases, and extensive educational content tailored for Indonesian students.",
        image: "/projects/akupintar.png",
        tags: ["Next.js", "Tailwind CSS", "SEO", "Scalable UI"],
        role: "Frontend Developer",
        timeline: "2025",
        links: {
            demo: "https://akupintar.id",
            github: "#"
        },
        techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Contentful CMS", "AWS"],
        features: [
            "Highly optimized landing pages for SEO",
            "Large-scale school and university database search",
            "Interactive diagnostic and interest tests",
            "Comprehensive student and parent dashboards",
            "Multi-tenant content management system"
        ]
    },
];

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}
