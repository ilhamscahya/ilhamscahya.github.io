/**
 * CONFIGURASI KARTU NAMA ONLINE
 * Anda dapat mengedit isi data pribadi Anda langsung di file ini.
 */
const PROFILE_CONFIG = {
    // Informasi Utama
    name: "ALEXANDER N. UTOMO",
    initials: "ANU",
    title: "SENIOR FRONTEND ENGINEER",
    location: "Jakarta, Indonesia",
    bio: "Passionate Frontend Architect with 7+ years of experience building high-scale web platforms, terminal UIs, and developer tools. Focused on performance, accessibility, and modern web tech.",
    status: "AVAILABLE_FOR_HIRE", // AVAILABLE_FOR_HIRE, BUSY, OPEN_TO_CONNECT
    
    // Informasi vCard (Untuk fitur Simpan ke Kontak Smartphone)
    vcard: {
        firstName: "Alexander",
        lastName: "Utomo",
        organization: "Digital Product Labs",
        jobTitle: "Senior Frontend Engineer",
        phone: "+6281234567890",
        email: "alexander.dev@example.com",
        website: "https://username.github.io",
        address: "Jakarta, Indonesia"
    },

    // Link Kontak & Sosial Media
    contacts: [
        {
            id: "email",
            label: "EMAIL",
            value: "alexander.dev@example.com",
            href: "mailto:alexander.dev@example.com",
            icon: "✉️",
            badge: "PRIMARY"
        },
        {
            id: "phone",
            label: "WHATSAPP / PHONE",
            value: "+62 812-3456-7890",
            href: "https://wa.me/6281234567890",
            icon: "💬",
            badge: "DIRECT"
        },
        {
            id: "linkedin",
            label: "LINKEDIN",
            value: "linkedin.com/in/alexander-dev",
            href: "https://linkedin.com/in/",
            icon: "🔗",
            badge: "PRO"
        },
        {
            id: "github",
            label: "GITHUB",
            value: "github.com/username",
            href: "https://github.com",
            icon: "💻",
            badge: "CODE"
        },
        {
            id: "telegram",
            label: "TELEGRAM",
            value: "@alexander_dev",
            href: "https://t.me/telegram",
            icon: "✈️",
            badge: "CHAT"
        }
    ],

    // Matriks Skill / Resource Monitor
    skills: [
        { name: "React / Next.js / Vue", level: 95, tag: "EXPERT" },
        { name: "TypeScript / JavaScript (ESNext)", level: 90, tag: "EXPERT" },
        { name: "Tailwind CSS / UI Systems", level: 92, tag: "ADVANCED" },
        { name: "State Management & Architecture", level: 88, tag: "ADVANCED" },
        { name: "Web Performance & PWA", level: 85, tag: "STRONG" }
    ],

    // Proyek Utama / Active Processes
    projects: [
        { pid: "1024", name: "Terminal_UI_Card", role: "Creator", status: "RUNNING", url: "#" },
        { pid: "2048", name: "Design_System_Core", role: "Lead Arch", status: "STABLE", url: "#" },
        { pid: "4096", name: "SaaS_Analytics_Dash", role: "Sr Frontend", status: "DEPLOYED", url: "#" },
        { pid: "8192", name: "ECommerce_PWA", role: "Consultant", status: "COMPLETED", url: "#" }
    ],

    // Kernel Logs / Experience History
    logs: [
        { timestamp: "2023-PRESENT", tag: "INFO", message: "Senior Frontend Engineer at Tech Corp - Leading UI Architecture & Web Performance." },
        { timestamp: "2021-2023", tag: "OKAY", message: "Frontend Lead at Studio Digital - Delivered 12+ enterprise Web Apps." },
        { timestamp: "2018-2021", tag: "OKAY", message: "Fullstack Web Developer - Specialized in Vue, Node.js, and REST APIs." },
        { timestamp: "2018", tag: "INIT", message: "Graduated B.Sc. Computer Science - Honors Degree." }
    ]
};
