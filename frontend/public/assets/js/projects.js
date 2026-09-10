const portfolioProjects = [
    {
        id: "skillage-academy",
        title: "Skillage Academy",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/skillage-academy-mockup.png",
        description: "A professional skill training institute platform built to drive student enrollments and course discovery.",
        tags: ["Web Development", "UI/UX Design", "EdTech"],
        link: "#"
    },
    {
        id: "amber-woods",
        title: "Amber Woods Resort",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/amber-woods-mockup.png",
        description: "A quiet boutique villa experience nestled in nature, featuring a streamlined booking process.",
        tags: ["Web Development", "UI/UX Design", "Hospitality"],
        link: "#"
    },
    {
        id: "royal-spice",
        title: "Royal Spice Restaurant",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/royal-spice-mockup.png",
        description: "An immersive restaurant website that captures the brand's essence and increases direct reservations.",
        tags: ["Web Development", "UI/UX Design", "Restaurant"],
        link: "#"
    },
    {
        id: "partho-holidays",
        title: "Partho Holidays",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/partho-holidays-mockup.png",
        description: "A premium travel and booking experience designed to increase conversions and user engagement.",
        tags: ["Web Development", "UI/UX Design", "Travel & Tourism"],
        link: "#"
    },
    {
        id: "crycore",
        title: "Crycore Fitness",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/crycore-mockup.png",
        description: "A high-impact fitness platform built for a strength movement facility to increase memberships and bookings.",
        tags: ["Web Development", "UI/UX Design", "Fitness & Wellness"],
        link: "#"
    },
    {
        id: "waterford-solar",
        title: "Waterford Solar",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/waterford-solar-mockup.png",
        description: "A modern renewable energy platform engineered to educate users and generate high-quality leads.",
        tags: ["Web Development", "UI/UX Design", "Solar Service"],
        link: "#"
    },
    {
        id: "pencilhub",
        title: "PencilHub",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/pencilhub-mockup.png",
        description: "A modern, high-performance platform engineered for seamless user experiences and conversion rate optimization.",
        tags: ["Web Development", "UI/UX Design", "Agency"],
        link: "#"
    },
    {
        id: "silent-slopes",
        title: "Silent Slopes Resort",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/silent-slopes-mockup.png",
        description: "A luxurious resort booking experience featuring immersive storytelling and optimized reservation flows.",
        tags: ["Web Development", "UI/UX Design", "Hospitality"],
        link: "#"
    },
    {
        id: "brand-with-abdulla",
        title: "Brand With Abdulla",
        category: "web",
        categoryLabel: "WEB DEVELOPMENT",
        image: "assets/img/projects/brand-with-abdulla-mockup.png",
        description: "A dynamic personal portfolio designed to showcase digital marketing expertise and web development services.",
        tags: ["Web Development", "UI/UX Design", "Personal Branding"],
        link: "#"
    },
    {
        id: "allison-resort",
        title: "Allison Resort Wayanad",
        category: "performance",
        categoryLabel: "PERFORMANCE MARKETING",
        image: "assets/images/allison.webp",
        description: "<strong>Helping Allison Resort reach more guests through Meta Ads</strong><br><br>Every month, I work on Meta Ads campaigns for Allison Resort Wayanad, focusing on driving high-quality booking enquiries through better targeting, creative testing and campaign optimization.",
        growthVerdict: "With a budget of around ₹10K, the campaign brought steady guest enquiries and contributed to around ₹4.5L in booking value.",
        stats: [
            { label: "Conversations", value: "1,519+" },
            { label: "Cost / Result", value: "₹5.54" },
            { label: "Monthly Spending", value: "₹9.9K" }
        ],
        tags: ["Meta Ads", "Audience Targeting", "Hospitality"],
        link: "#"
    },
    {
        id: "pearl-serene",
        title: "The Pearl Serene",
        category: "performance",
        categoryLabel: "PERFORMANCE MARKETING",
        image: "assets/images/peralserence.webp",
        description: "<strong>Helping The Pearl Serene bring in more bookings through Meta Ads</strong><br><br>Providing monthly Meta Ads management for The Pearl Serene, helping generate a steady flow of qualified booking enquiries with continuous optimization and data-driven targeting.",
        growthVerdict: "With less than ₹1,000 spent on ads, the campaign generated steady booking enquiries and contributed to around ₹2–3L in booking value within a week.",
        stats: [
            { label: "Conversations", value: "238+" },
            { label: "Cost / Result", value: "₹3.91" },
            { label: "Monthly Spending", value: "₹1K" }
        ],
        tags: ["Meta Ads", "Data-driven Targeting", "Hospitality"],
        link: "#"
    },
    {
        id: "skillage-performance",
        title: "Skillage Academy",
        category: "performance",
        categoryLabel: "PERFORMANCE MARKETING",
        image: "assets/images/career-1.png",
        description: "<strong>Helping Skillage Academy generate more course enquiries through Meta Ads</strong><br><br>I run Meta Ads campaigns for Skillage Academy’s Digital Marketing Course, generating high-quality student enquiries through targeted audiences, strong creatives, and continuous campaign optimization.",
        growthVerdict: "With a focused Meta Ads strategy, the campaign generated a consistent flow of course enquiries while helping Skillage Academy reach students actively looking to learn digital marketing and develop career-ready skills.",
        stats: [
            { label: "Conversations", value: "499+" },
            { label: "Cost / Result", value: "₹97.67" },
            { label: "Monthly Spending", value: "₹98K" }
        ],
        tags: ["Performance Marketing", "Lead Generation", "EdTech"],
        link: "#"
    },
    {
        id: "content-production",
        title: "Viral Content Campaigns",
        category: "social",
        categoryLabel: "CONTENT & PRODUCTION",
        image: "",
        description: "<strong>Planned and executed 30+ <em>content campaigns</em> with end-to-end shoot and production.</strong><br><br>From strategy and ideation to content creation, shooting, and editing — delivering high-quality content that builds brand presence and drives real engagement.",
        growthVerdict: "Built stronger brand visibility and engagement across multiple industries through creative strategy, quality production, and consistent execution.",
        stats: [
            { label: "Organic Reach", value: "5M+" },
            { label: "Campaigns Executed", value: "30+" }
        ],
        tags: ["Content Production", "Video Marketing", "Social Media"],
        link: "#"
    },
    {
        id: "womens-day-reel",
        title: "Women's Day Campaign",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Shoot & Production",
        link: "https://www.instagram.com/p/DVlfa8Eks_V/"
    },
    {
        id: "concert-fast-cut",
        title: "Concert Fast Cut",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Shoot & Production, Event",
        link: "https://www.instagram.com/reel/DH0sBc2SqAF/"
    },
    {
        id: "gym-ad",
        title: "Gym Ad",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Concept, Shoot & Production",
        link: "https://www.instagram.com/reel/DIa71BixeTp/"
    },
    {
        id: "valliyoorkav-ulsavam",
        title: "Valliyoorkav Ulsavam Campaign",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Shoot, Concept & Production",
        link: "https://www.instagram.com/reel/DHLFYc0JOPB/"
    },
    {
        id: "concept-ad",
        title: "Ad",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Shoot & Production",
        link: "https://www.instagram.com/reel/DaKm7xWJu9O/"
    },
    {
        id: "ad-2",
        title: "Ad",
        category: "social",
        type: "reel",
        categoryLabel: "SHOOT & PRODUCTION",
        description: "Shoot & Production",
        link: "https://www.instagram.com/reel/DXl5lPqFKAI/"
    }
];
