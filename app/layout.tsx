import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LenisScroll from "@/components/lenis";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Metadata } from "next";

const outfit = Outfit({
    variable: "--font-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "WillTech Engineering Limited | Project Management & Cost Consultancy",
        template: "%s | WillTech Engineering",
    },
    description:
        "WillTech Engineering Limited provides project management, cost consultancy and construction support services across Nigeria. We support clients from early planning through delivery with structured, transparent and professional guidance.",
    keywords: [
        "WillTech Engineering",
        "project management",
        "cost consultancy",
        "quantity surveying",
        "construction support",
        "infrastructure",
    ],
    authors: [{ name: "WillTech Engineering Limited" }],
    creator: "WillTech Engineering Limited",
    publisher: "WillTech Engineering Limited",

    openGraph: {
        title: "WillTech Engineering Limited | Project Management & Cost Consultancy",
        description:
            "Professional project management and cost consultancy supporting reliable project delivery across Nigeria.",
        siteName: "WillTech Engineering",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "WillTech Engineering Limited",
        description:
            "Project management, cost consultancy and construction support across Nigeria.",
        creator: "@willtecheng",
    },

    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="min-h-screen">
                <LenisScroll />
                <Navbar />
                {children}
                <Footer />
                <WhatsAppButton />
            </body>
        </html>
    );
}
