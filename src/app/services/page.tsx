export default function Page() {

    const SERVICES = ["Staycation Bookings", "Hotel Bookings", "Transport & Transfers", "In-house Chef Services", "Excursions", "Vacation Packages", "Corporate Trips & Team Building", "Safaris", "Themed Tours"]
    return (
        <main>
            Our Services

            {
                SERVICES.map((service) => (
                    <div key={service}>
                        <h1 className="font-bold sm:text-4xl text-2xl">{service}</h1>
                    </div>
                ))
            }
        </main>
    )
}