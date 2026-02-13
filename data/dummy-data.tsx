import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Project Management',
        desc: 'End-to-end coordination and oversight of projects from planning through construction and completion.',
        image: '/image1.jpg'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Quantity Surveying & Cost Consultancy',
        desc: 'Cost planning, budgeting, procurement support and financial monitoring throughout the project lifecycle.',
        image: '/image3.jpg'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Construction & Technical Support',
        desc: 'Site coordination, technical advisory and delivery support during construction phases.',
        image: '/image2.jpg'
    }
];

export const detailedServicesData = [
    {
        id: 'project-management',
        title: 'Project Management',
        description: 'End-to-end project management to help clients maintain control, clarity and accountability throughout delivery.',
        services: [
            'Project planning and coordination',
            'Programme scheduling',
            'Consultant coordination',
            'Progress monitoring',
            'Reporting and documentation',
            'Delivery oversight'
        ]
    },
    {
        id: 'quantity-surveying',
        title: 'Quantity Surveying & Cost Consultancy',
        description: 'Professional cost management to ensure projects remain financially controlled and transparent.',
        services: [
            'Cost planning and budgeting',
            'Procurement and tender support',
            'Cost monitoring and reporting',
            'Financial control and variation review',
            'Value management'
        ]
    },
    {
        id: 'construction-support',
        title: 'Construction & Technical Support',
        description: 'On-site coordination and technical advisory to maintain structure and accountability during construction.',
        services: [
            'Site coordination support',
            'Technical advisory',
            'Progress tracking',
            'Contractor liaison',
            'Documentation support',
            'Quality and cost awareness'
        ]
    },
    {
        id: 'infrastructure',
        title: 'Infrastructure & Institutional Projects',
        description: 'Support for education, healthcare, community and institutional developments with planning and delivery services.',
        services: [
            'Schools and education facilities',
            'Healthcare facilities and maternal care projects',
            'Community infrastructure',
            'Institutional developments',
            'Public-interest projects'
        ]
    },
    {
        id: 'client-representation',
        title: 'Client Representation',
        description: 'Acting on behalf of clients to coordinate teams, monitor progress and provide independent oversight.',
        services: [
            'Client-side coordination',
            'Independent project monitoring',
            'Stakeholder liaison',
            'Regular reporting and verification'
        ]
    },
    {
        id: 'diaspora-support',
        title: 'Diaspora Project Support',
        description: 'Structured support for clients outside Nigeria with planning, budgeting and delivery monitoring.',
        services: [
            'Project planning guidance',
            'Budget development',
            'Consultant coordination',
            'Regular reporting',
            'Delivery monitoring'
        ]
    },
    {
        id: 'property-acquisition',
        title: 'Property Acquisition and Documentation',
        description: 'Complete support for property acquisition with proper documentation and verification.',
        services: [
            'Property acquisition guidance',
            'Documentation preparation',
            'Legal compliance review',
            'Title verification',
            'Transaction oversight'
        ]
    },
    {
        id: 'survey-confirmation',
        title: 'Survey Confirmation with Local Authority',
        description: 'Professional survey services and confirmation with relevant local government authorities.',
        services: [
            'Land surveying coordination',
            'Local authority liaison',
            'Survey documentation',
            'Approval facilitation',
            'Certification support'
        ]
    },
    {
        id: 'property-confirmation',
        title: 'Property Confirmation for Purpose',
        description: 'Verification and confirmation of property purpose alignment with intended use.',
        services: [
            'Purpose verification',
            'Use case assessment',
            'Regulatory compliance check',
            'Authority confirmation',
            'Documentation support'
        ]
    }
];

export const clientTypesData = [
    'Private clients',
    'Developers',
    'Institutions & NGOs',
    'Public sector'
];

export const costPlanStepsData = [
    'Cost estimate',
    'Bill of Quantities (BOQ)',
    'Project advice'
];

export const plansData = [
    {
        id: 'advisory',
        name: 'Engineering Advisory',
        price: 'Custom',
        desc: 'Technical planning and construction advisory.',
        credits: 'Project-based',
        features: [
            'Pre-construction planning',
            'Technical reviews',
            'Construction methodology',
            'Risk assessment'
        ]
    },
    {
        id: 'surveying',
        name: 'Quantity Surveying',
        price: 'Custom',
        desc: 'Comprehensive cost management and control.',
        credits: 'Project-based',
        features: [
            'Cost planning & budgeting',
            'Bills of quantities',
            'Financial control',
            'Budget monitoring',
            'Value engineering'
        ],
        popular: true
    },
    {
        id: 'monitoring',
        name: 'Project Monitoring',
        price: 'Custom',
        desc: 'Independent oversight and verification.',
        credits: 'Project-based',
        features: [
            'Progress verification',
            'Independent monitoring',
            'Risk identification',
            'Compliance review',
            'Reporting & documentation'
        ]
    }
];

export const faqData = [
    {
        question: 'How does WillTech protect diaspora investors from fraud?',
        answer: 'We provide independent oversight through our on-ground teams in Nigeria. We conduct regular site inspections, verify all financial transactions, monitor contractor performance, and provide detailed reports and photo documentation. This ensures complete transparency and prevents scams.'
    },
    {
        question: 'Can you oversee my construction project in Nigeria while I\'m abroad?',
        answer: 'Yes, that\'s exactly what we do. Whether you\'re in the UK, US, or anywhere globally, our teams in Nigeria handle all aspects of project monitoring, quality control, and progress tracking. You receive regular updates and reports.'
    },
    {
        question: 'What if the contractor tries to inflate costs or cut corners?',
        answer: 'Our cost control services include invoice verification, budget monitoring, and independent quality inspections. We catch overcharges, prevent budget inflation, and ensure work meets agreed standards. We\'re your advocate protecting your investment.'
    },
    {
        question: 'How often will I receive updates on my project?',
        answer: 'We provide regular progress reports with site photos, financial summaries, and quality assessments. Communication frequency depends on your project needs, but you\'ll always have visibility into what\'s happening with your investment.'
    },
    {
        question: 'What types of projects do you oversee?',
        answer: 'We handle residential construction, commercial projects, community infrastructure, health facilities, educational institutions, and any other construction or infrastructure project in Nigeria. Size doesn\'t matter—we protect your investment.'
    }
];

export const footerLinks = [
    {
        title: "Company",
        links: [
            { name: "Home", url: "/" },
            { name: "About", url: "/about" },
            { name: "Services", url: "/services" },
            { name: "Contact", url: "/contact" }
        ]
    },
    {
        title: "Services",
        links: [
            { name: "Project Management", url: "/services" },
            { name: "Quantity Surveying", url: "/services" },
            { name: "Construction Support", url: "/services" },
            { name: "Infrastructure Support", url: "/services" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    }
];

export const contactInfo = {
    company: "WillTech Engineering Limited",
    email: "info@willtechs.org",
    phone: ["+234 (Nigeria)"],
    locations: ["Nigeria"],
    description: "Project Management • Cost Consultancy • Construction Support. Supporting reliable project delivery across Nigeria."
};

export const teamData = [
    {
        id: 'lead',
        name: 'Company Director',
        role: 'Director',
        description: 'Experienced in project management and cost consultancy with exposure to Nigeria and UK practice.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop'
    }
];