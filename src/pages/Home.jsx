import {ThemeToggle} from "@/components/ThemeToggle.jsx";
import {StarBackground} from "@/components/StarBackground.jsx";
import {NavBar} from "@/components/NavBar.jsx";
import {HeroSection} from "@/components/HeroSection.jsx";

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
        </main>
        {/* Footer */}
    </div>

}