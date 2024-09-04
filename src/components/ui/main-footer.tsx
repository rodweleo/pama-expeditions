import { Mail, Phone, MapPin } from "lucide-react";
import SocialMediaLinks from "./social-media-links";

export default function Page() {
    return (
        <footer className="bg-gray-800 text-white py-20">
            <section className="flex flex-wrap gap-10 justify-between px-20">
                <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Pama Expeditions</h3>
                    <p className="text-slate-300 text-lg">Discover the world with us. Unforgettable adventures await!</p>
                    <SocialMediaLinks />
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-5">
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-2" /> pama.expedition@outlook.com</li>
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +254-0113994242</li>
                        <li className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> 123 Adventure St, Exploreville, EX 12345</li>
                    </ul>
                </div>
            </section>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
                <p>&copy; {new Date().getFullYear()} Pama Expeditions. All rights reserved.</p>
            </div>
        </footer>
    )
}