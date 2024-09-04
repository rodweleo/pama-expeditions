import Image from 'next/image'
import { Users, Globe, Award } from 'lucide-react'

export default function About() {
    return (
        <div>
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-center mb-8">About Pama Expeditions</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg mb-6">
                                Pama Expeditions is a premier travel company dedicated to providing unforgettable adventures and
                                life-changing experiences. Founded in 2010 by a group of passionate travelers, we've been exploring
                                the world's most breathtaking destinations and sharing our love for travel with adventurers from all walks of life.
                            </p>
                            <p className="text-lg">
                                Our mission is to inspire and enable people to discover the beauty of our planet, immerse themselves
                                in diverse cultures, and create lasting memories. We believe that travel has the power to transform
                                lives, broaden perspectives, and foster global understanding.
                            </p>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="/placeholder.svg?height=600&width=800"
                                alt="Pama Expeditions team"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: Users, title: 'Customer-Centric', description: 'We put our travelers first, ensuring personalized and exceptional experiences.' },
                            {
                                icon: Globe, title: 'Sustainability', description: 'Were committed to responsible travel and minimizing our environmental impact.'
                            },
                            { icon: Award, title: 'Excellence', description: 'We strive for the highest standards in every aspect of our tours and services.' },
                        ].map((value) => (
                            <div key={value.title} className="text-center">
                                <div className="bg-blue-100 rounded-full p-4 inline-block mb-4">
                                    <value.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-gray-600">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-blue-600 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { number: '10+', label: 'Years of Experience' },
                            { number: '50+', label: 'Destinations' },
                            { number: '10,000+', label: 'Happy Travelers' },
                            { number: '4.9/5', label: 'Average Rating' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-bold mb-2">{stat.number}</p>
                                <p className="text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Jane Doe', role: 'Founder & CEO', image: '/placeholder.svg?height=400&width=400' },
                            { name: 'John Smith', role: 'Head of Operations', image: '/placeholder.svg?height=400&width=400' },
                            { name: 'Emily Brown', role: 'Lead Tour Guide', image: '/placeholder.svg?height=400&width=400' },
                        ].map((member) => (
                            <div key={member.name} className="text-center">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}