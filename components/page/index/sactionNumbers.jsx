"use client";
import CountUp from "react-countup";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function SactionNumbers() {
    const [counterOn, setCounterOn] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger only once when the element comes into view
        onChange: (inView) => setCounterOn(inView),
    });

    return (
        <div ref={ref} className=" py-10 px-4">
            <div className="py-8  container mx-auto font-primary bg-secondary shadow-2xl lg:rounded-full  ">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 text-center">
                    <div className="flex flex-col gap-6 items-center justify-center text-white">
                        <h2 className=" lg:text-3xl font-bold uppercase">Appartements</h2>
                        <p className="font-semibold  text-5xl">
                            {counterOn ? <CountUp duration={10} start={1} end={50}  /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center text-white">
                        <h2 className=" lg:text-3xl font-bold uppercase">Sécurité assurée</h2>
                        <p className="font-semibold  text-5xl">
                            24h/7j
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center text-white">
                        <h2 className=" lg:text-3xl font-bold uppercase">D’espaces verts</h2>
                        <p className="font-semibold  text-5xl">
                            {counterOn ? <CountUp duration={10} start={1} end={80} suffix="+" /> : 0}
                        </p>
                    </div>
                    <div className="flex flex-col gap-6 items-center justify-center text-white">
                        <h2 className=" lg:text-3xl font-bold uppercase">Du centre-ville</h2>
                        <p className="font-semibold  text-5xl">                            
                            {counterOn ? <CountUp duration={10} start={1} end={10} suffix="Min" /> : 0}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}