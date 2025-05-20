import {Cpu, Code, Palette} from "lucide-react";


export const About = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Ben <span className="text-primary">Kimim?</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Yapay Zeka Araştırmacısı</h3>

                    <p className="text-muted-foreground">
                        Ben Eren Arslan. Balıkesir Üniversitesi'nde Bilgisayar Mühendisliği öğrencisiyim. Çocukluğumdan beri bilgisayarlara ilgiliydim. Bilgisayar oyunları, çok az insanın bildiği farklı mobil uygulamalar ve bilgisayar ortamında tasarımlara hep ilgi duydum.
                    </p>

                    <p className="text-muted-foreground">
                        Şu anda bölümümüzdeki Yapay Zeka Takımı'nda çalışıyorum. Burada takım arkadaşlarımla birlikte araştırmalar yapıyorum. Text-to-Speech alanında hazır modeller kullanarak veya kendi eğittiğimiz modellerle çalışmalarda bulunuyoruz.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            İletişime Geçin
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover bg-card">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Cpu className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Yapay Zeka</h4>
                                <p className="text-muted-foreground">
                                    Makine öğrenmesi ile yazıyı sese çevirmek veya sesi yazıya çevirmek.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> İnternet Programlama</h4>
                                    <p className="text-muted-foreground">
                                        HTML-CSS-JS ve bazı kütüphaneleri kullanarak web siteleri geliştirmek.
                                    </p>
                                </div>
                            </div>
                    </div>
                    <div className="gradient-border p-6 card-hover bg-card">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Palette className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Görsel Programlama</h4>
                                    <p className="text-muted-foreground">
                                        Günlük hayatta kullanılan programların arayüzünü son kullanıcıya uygun bir halde tasarlayıp sunmak.
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}