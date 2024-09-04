"use client"

import { Button } from "@/components/ui/button";
import GradualSpacing from "@/components/magicui/gradual-spacing";
import { BorderBeam } from "@/components/magicui/border-beam";
import { useRef } from "react";
import { CirclePlay } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import TravelPackageCard from "../components/ui/travel-package-card";
import Image from "next/image";
import TestimonialCard from "../components/ui/testimonial-card";

export default function Home() {
  const introVideoRef = useRef<HTMLVideoElement | null>(null);

  const playPauseIntroVideo = () => {
    if (introVideoRef.current) {
      if (introVideoRef.current.paused) {
        introVideoRef.current.play();
      } else {
        introVideoRef.current.pause();
      }
    }
  }

  return (
    <main className="w-full min-h-screen space-y-20 ">
      <section id="intro" className="grid place-items-center w-full min-h-screen py-20 space-y-10">
        <div className="max-w-5xl text-center space-y-5">
          <Badge className="text-2xl px-10 py-1 bg-slate-400">Introducing Pama Expeditions</Badge>
          <GradualSpacing
            className="font-display text-center text-[80px] font-bold tracking-[-0.1em]  text-black dark:text-white md:leading-[5rem]"
            text="One Life, One world, Explore it."
          />
          <p className="text-slate-500 text-md">At Pama we believe that life is anchored on strong friendships. The people you meet through life who become family. Allow us to make yout friendships more spiccy with more memorable moments by providing the best packages for Boys weekend out, Girls trip, Squad trips, Choma Trips e.t.c</p>
          <ul>
            <li><Button className="rounded-full px-10 bg-[#FF8C00] text-white hover:bg-[#E67600] hover:text-white">Discover Our Tours</Button></li>
          </ul>
        </div>
        <div className="relative w-4/5 flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <video ref={introVideoRef} width="100%" height="100%" className="relative object-cover">
            <source src="/videos/r5jiWF-4WhbGf_ke.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
          <BorderBeam size={250} duration={12} delay={9} borderWidth={2.5} />
          <button onClick={() => playPauseIntroVideo()} type="button" title="Trigger Video" className="absolute top-2/4"><CirclePlay size={100} /></button>
        </div>
      </section>

      <section id="featured-destination" className="grid place-items-center w-full gap-10">
        <div className="space-y-2 text-center">
          <p className="text-slate-500 text-xl">Our Popular Travel Packages</p>
          <h1 className="font-bold sm:text-5xl">Featured Travel Packages</h1></div>
        <ul className="flex flex-wrap gap-5">{
          [{
            name: "Masai Mara Safari",
            description: "Witness the Great Migration and explore the vast savannahs."
          }, {
            name: "Diani Beach Retreat",
            description: "Relax on the pristine white sands of Kenya's coastline."
          }, {
            name: "Nairobi City Tour",
            description: "Experience the capital with its rich history and vibrancy."
          }].map((ele) => (
            <li key={ele.name}>
              <TravelPackageCard travelPackage={ele} />
            </li>
          ))
        }
        </ul>
      </section>

      <section id="new-featured-travel-activities" className="grid place-items-center w-full gap-10 py-10 bg-slate-50">
        <div className="space-y-2 text-center">
          <p className="text-slate-500 text-xl">Top Travel Activities</p>
          <h1 className="font-bold sm:text-5xl">New & Featured Travel Activities</h1></div>
        <ul className="flex flex-wrap items-center justify-center gap-10">{
          [{
            name: "Masai Mara Safari",
            description: "Witness the Great Migration and explore the vast savannahs."
          }, {
            name: "Diani Beach Retreat",
            description: "Relax on the pristine white sands of Kenya's coastline."
          }, {
            name: "Nairobi City Tour",
            description: "Experience the capital with its rich history and vibrancy."
          }].map((ele) => (
            <li key={ele.name}>
              <div className="relative size-[500px] rounded-xl">
                <Image src="https://pangolinphoto.com/wp-content/uploads/2023/08/Charl-Stols-Wildebeest-of-Our-Masai-Mara-Safari-in-the-Masai-Mara.webp" width={500} height={500} className="w-full h-full object-cover" unoptimized />
                <div className="absolute bg-black bg-opacity-40 inset-0" />
                <div className="z-10 absolute bottom-0 space-y-1 p-5">
                  <h2 className="bg-[#FF8C00] w-fit text-white py-2 px-6 rounded-full">Bed & Breakfast</h2>
                  <h1 className="text-white sm:text-2xl text-xl font-bold">Pyramids of Gaza</h1>
                  <p className="text-slate-200">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam, temporibus et.</p>
                </div>
                <div className="absolute top-0 right-0 m-5 p-1 border border-white rounded-full w-fit">
                  <p className="bg-white p-5 z-50 size-[50px] rounded-full flex items-center justify-center font-bold">-30%</p>
                </div>
              </div>
            </li>
          ))
        }
        </ul>
      </section>

      <section id="new-featured-travel-activities" className="">
        <div className="text-center space-y-1">
          <p className="text-slate-500 text-xl">Don't just take our word for it. Hear directly from travelers who have embarked on unforgettable Expeditions</p>
          <h1 className="font-bold sm:text-5xl" >Stories of Pama Expeditions</h1>
        </div>
        <div className="size-[500px]">
          <TestimonialCard />
        </div>
      </section>
    </main >
  );
}
