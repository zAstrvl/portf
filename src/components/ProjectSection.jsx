import {Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Stok Takip",
        description: "PyQt ile tasarlanmış stok takip programı.",
        image: "/projects/proje1.png",
        tags: ["Python", "PyQt5", "SQLite"],
        demoUrl: "#",
        githubUrl: "https://github.com/zAstrvl/basit-stok-takip"
    },
    {
        id: 2,
        title: "Not Defteri",
        description: "Not defterine alternatif bir uygulama.",
        image: "/projects/proje2.png",
        tags: ["Python", "PyQt5"],
        demoUrl: "#",
        githubUrl: "https://github.com/zAstrvl/not-defteri"
    },
    {
        id: 3,
        title: "Kişisel Portfolyo Sitesi",
        description: "Kendi kişisel portfolyo sitem.",
        image: "/projects/proje3.png",
        tags: ["HTML", "CSS", "JavaScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/zAstrvl/portf"
    }
]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Öne Çıkan<span className="text-primary"> Projeler</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Bazı geliştirdiğim projeler
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover"/>
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                ))}
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex space-x-3">
                                <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}