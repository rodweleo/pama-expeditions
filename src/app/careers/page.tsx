import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from 'lucide-react';

export default function Page() {

    const OPENINGS = [
        {
            title: "Product Designer",
            sub_title: "We're looking for a mid-level product designer to join our team."
        },
        {
            title: "Reservations Sales Agents",
            sub_title: "We're looking for a mid-level product designer to join our team."
        }
    ]

    return (
        <main className="min-h-screen container py-20 px-5 space-y-10">
            <header className="space-y-2 max-w-2xl">
                <Badge>We're hiring</Badge>
                <h1 className="sm:text-6xl font-bold">Be part of our mission</h1>
                <p>We're looking for passionate people to join us on our mission. We value flat hierarchies, clear communication, and full ownership and responsibility</p>
            </header>

            <section className="w-full space-y-5">
                {
                    OPENINGS.map((opening) => (
                        <div key={opening.title} className="w-full flex justify-between items-start">
                            <div>
                                <h1 className="font-bold sm:text-4xl">{opening.title}</h1>
                                <p>{opening.sub_title}</p>
                            </div>
                            <Button variant="link" className="text-2xl font-semibold">Apply <ArrowUpRight /></Button>
                        </div>
                    ))
                }
            </section>
        </main>
    )
}