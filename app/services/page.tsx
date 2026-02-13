'use client'
import ServicesHero from "@/components/ServicesHero";
import ServicesDetail from "@/components/ServicesDetail";
import CTA from "@/components/CTA";
import Faq from "@/components/Faq";

export default function ServicesPage() {
    return (
        <>
            <ServicesHero />
            <ServicesDetail />
            <Faq />
            <CTA />
        </>
    );
}
