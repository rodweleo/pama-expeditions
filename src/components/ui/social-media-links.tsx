import { Facebook, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
export default function SocialMediaLinks() {
    return (
        <ul className="flex items-center gap-5">
            <li><a href="https://www.facebook.com/pama.Africa/" target="_blank" className="hover:text-[#FF8C00] transition-colors"><Facebook size={30} /></a></li>
            <li><a aria-label="Chat on WhatsApp" href="https://wa.me/+254712401022" target="_blank" className="hover:text-[#FF8C00] hover:mb-2 transition-colors"><FaWhatsapp size={30} /></a></li>
            <li><a href="https://www.instagram.com/pama.expeditions/" target="_blank" className="hover:text-[#FF8C00] transition-colors"><Instagram size={30} /></a></li>
            <li><a href="https://x.com/pamaexpeditions" target="_blank" className="hover:text-[#FF8C00] transition-colors"><FaXTwitter size={30} /></a></li>
            <li><a href="https://www.tiktok.com/@pama_expeditions" target="_blank" className="hover:text-[#FF8C00] transition-colors"><FaTiktok size={30} /></a></li>
            <li><a href="https://www.linkedin.com/in/pama-expeditions-26941b28b" target="_blank" className="hover:text-[#FF8C00] transition-colors"><FaLinkedin size={30} /></a></li>
        </ul >
    )
}