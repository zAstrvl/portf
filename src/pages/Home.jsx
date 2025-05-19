import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {HeroSection} from "@/components/HeroSection.jsx";
import {About} from "@/components/About.jsx";
import {SkillsSection} from "@/components/SkillsSection.jsx";
import {ProjectSection} from "@/components/ProjectSection.jsx";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Tema */}
        <ThemeToggle />
        {/* Arkaplan Efektleri */}
        <StarBackground />
        {/* NavBar */}
        <NavBar />
        {/* İçerik */}
        <main>
            <HeroSection />
            <About />
            <SkillsSection />
            <ProjectSection />
        </main>
        {/* Footer */}
    </div>

}