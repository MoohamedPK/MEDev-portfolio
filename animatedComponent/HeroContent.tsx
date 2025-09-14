"use client"
import React, { useRef } from 'react'

//GSAP
import gsap from 'gsap'
import {SplitText} from "gsap/SplitText"
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(SplitText)

const HeroContent = () => {

    const mainTextRef = useRef(null)
    const taglineTextRef = useRef(null);
    const containerRef = useRef(null);
    
    useGSAP(() => {
        
        gsap.context(() => {

            const mainTextSplit = SplitText.create(mainTextRef.current, {type: "lines"});
            const taglineSplit = SplitText.create(taglineTextRef.current, {type: "lines"});

            const bars = gsap.utils.toArray(".bar");
    
            const tl = gsap.timeline()

                tl.fromTo(bars,{
                    height: "100vh",
                },{
                    height: "0px",
                    duration: 1,
                    ease: "power3.inOut",
                    stagger: 0.05,
                    onComplete: () => { gsap.set(".overlay", { display: "none" }); }
                })
    
                .fromTo([mainTextSplit.lines, taglineSplit.lines],{
                    opacity: 0,
                    y: 50
                },
                    {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power3.inOut"
                }, "<0.8");

                return () => {
                    mainTextSplit.revert()
                    taglineSplit.revert()
                }

        }, containerRef) 

    }, [])

    return (

    <section ref={containerRef} className="h-screen relative">

        <div className="overlay h-screen z-90 flex w-screen fixed top-0">
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                key={index}
                className="bar w-[10vw] h-[100dvh] bg-black"
                ></div>
            ))}
        </div>

        <div className="black-layer size-full bg-background text-black centerlized-items relative">
            <div className="container flex flex-col lg:flex-row justify-center lg:justify-around items-center px-4 sm:px-6 lg:px-8">

                <div className="hero-text font-nevanta-bold uppercase text-[1.2em] sm:text-[1.8em] md:text-[2.5em] lg:text-[3.5em] xl:text-[4.5em] italic text-center lg:text-left order-2 lg:order-1">
                    <div ref={mainTextRef} className='text-text leading-tight'>
                        mohamed hassani<br/>
                        website developer<br/>
                        expert
                    </div>

                    <p ref={taglineTextRef} className='font-nevanta-Medium capitalize text-text text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] pt-3 sm:pt-4 lg:pt-5 leading-relaxed'>From concept to code — bringing visions to life.</p>
                </div>

                
            </div>
        </div>


    </section>
  )
}

export default HeroContent
