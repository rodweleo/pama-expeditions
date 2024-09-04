import Image from "next/image";
import { MapPin, Clock, Star, Heart } from 'lucide-react';
export default function TravelPackageCard({ travelPackage }) {
    return (<div className="relative h-auto rounded-xl bg-white shadow-lg hover:scale-[1.0075] transition-all">
        <Image src="https://pangolinphoto.com/wp-content/uploads/2023/08/Charl-Stols-Wildebeest-of-Our-Masai-Mara-Safari-in-the-Masai-Mara.webp" alt={travelPackage.name} width={500} height={500} unoptimized className="rounded-t-xl" />
        <div className="bg-white p-3 space-y-7 rounded-b-xl">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <div className="flex items-center gap-1 text-md"><MapPin className="text-slate-500" size={18} /> <p className="text-slate-500 text-lg">Watamu - Mombasa, Kenya</p></div>
                    <h1 className="font-semibold text-2xl">{travelPackage.name}</h1>
                    <div className="flex items-center gap-2">
                        <ul className="flex items-center gap-1">
                            <li><Star /></li>
                            <li><Star /></li>
                            <li><Star /></li>
                            <li><Star /></li>
                            <li><Star /></li>
                        </ul>
                        <p className="text-slate-500 text-xl mt-[2px]">42 Reviews</p>
                    </div>
                </div>
                <button className="border border-yellow-500 p-3 rounded-full"><Heart /></button>
            </div>
            <ul className="flex items-center justify-between">
                <li><p className="flex items-center gap-1">
                    <Clock size={18} className="text-slate-500 mb-[2px]" /> <span className="text-slate-500 text-lg">6 days</span></p></li>
                <li><span>From </span> <span className="font-bold text-xl">KSh 20,000</span></li>
            </ul>
        </div>
    </div>)
}