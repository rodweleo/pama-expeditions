import Link from "next/link";

export default function MainHeader() {
    return <header className="bg-[#800020] shadow-md text-white flex items-center justify-between  py-5 px-20 sticky top-0 z-20">
        <Link href="/">
            Pama Expeditions
        </Link>
        <nav>
            <ul className="p-5 flex gap-10 w-full">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/destinations">Destinations</Link></li>
                <li><Link href="/safari-packages">Safari Packages</Link></li>
                <li><Link href="/Beach Holidays">Beach Holidays</Link></li>
                <li><Link href="/cultural-tours">Cultural Tours</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/contact-us">Contact Us</Link></li>
                <li><Link href="/booking">Booking</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/faqs">FAQs</Link></li>
            </ul>
        </nav>
    </header >
}