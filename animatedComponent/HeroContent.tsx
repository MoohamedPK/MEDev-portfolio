"use client"
import Image from 'next/image'
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
    
            const tl = gsap.timeline()
    
                tl.to(".hero-img", {
                    xPercent: 170,
                    duration: 1.5,
                    ease: "power3.inOut"
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
                }, "-=0.03");

                return () => {
                    mainTextSplit.revert()
                    taglineSplit.revert()
                }

        }, containerRef) 


    }, [])

  return (

    <section className="h-screen">
        <div className="black-layer size-full bg-black text-text centerlized-items relative">
            <div ref={containerRef} className="container flex justify-around items-center">

                <div className="hero-text font-nevanta-Medium uppercase text-[4em] italic">
                    <div ref={mainTextRef}>
                        mohamed hassani<br/>
                        website developer<br/>
                        expert
                    </div>

                    <p ref={taglineTextRef} className='font-nevanta-Light capitalize text-[18px] pt-5'>From concept to code — bringing visions to life.</p>
                </div>

                <div className="hero-img -translate-x-[55em] relative">
                    <div className="neon-bg bg-white size-[20em] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[190px]"></div>
                    <Image src={"/imgs/portfolio-img.png"} alt="profile img" width={500} height={500} className="hero-image"/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default HeroContent
