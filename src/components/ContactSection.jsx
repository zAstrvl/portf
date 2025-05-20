import {Mail, Phone, MapPin, Instagram, Github, Twitter, Send} from 'lucide-react';
import {cn} from "@/lib/utils"
import {useToast} from "@/hooks/use-toast.js";
import {useState} from "react";

export const ContactSection = () => {
    const {toast} = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()

        setIsSubmitting(true)

        setTimeout(() => {
            toast({
                title: "Mesaj gönderildi!",
                description: "Mesajınız için teşekkürler. Size en kısa sürede geri dönüş yapılacaktır."
            })
        }, 1500)

        setIsSubmitting(false)
    }
    return <section
        id="contact"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2
                className="text-3xl md:text-4xl font-bold mb-4 text-center">
                İletişime<span className="text-primary"> Geçin</span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> İletişim Bilgileri</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> E-Mail</h4>
                                <a href="mailto:xrean.aep@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"> xrean.aep@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Adres</h4>
                                <a href="tel:+905387030390" className="text-muted-foreground hover:text-primary transition-colors"> +90 (538) 703 03 90</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Konum</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors"> Balıkesir, Türkiye</a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Benimle Bağlantı Kurun</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://github.com/zAstrvl" target="_blank">
                                <Github />
                            </a>
                            <a href="https://www.instagram.com/_.erenarslan._/" target="_blank">
                                <Instagram />
                            </a>
                            <a href="#" target="_blank">
                                <Twitter />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-card p-8 rounded*lg shadow-xs" onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6"> Mesaj Gönderin</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2"> Ad</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Adınız..."
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Mailiniz..."
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Mesaj</label>
                            <textarea
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Mesajınız..."
                            />
                        </div>

                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                            {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönderin"}
                            <Send size={16}/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
}