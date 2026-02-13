'use client'
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Trust from "@/components/Trust";
import Clients from "@/components/Clients";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import CTA from "@/components/CTA";


export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Features />
            <Projects />
            <Trust />
            <Clients />
            <Team />
            <Faq />
            <CTA />
        </>
    );
}