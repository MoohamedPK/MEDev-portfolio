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
    const blobPaths = [
        "M443,305Q432,360,390,395Q348,430,299,444Q250,458,204,435Q158,412,120,365Q82,318,89,262Q96,206,126,159Q156,112,204,90Q252,68,304,80Q356,92,395,130Q434,168,447,209Q460,250,443,305Z",
        "M442,298Q436,346,394,378Q352,410,301,422Q250,434,204,408Q158,382,134,336Q110,290,116,238Q122,186,154,144Q186,102,238,84Q290,66,336,94Q382,122,420,161Q458,200,456,250Q454,300,442,298Z",
        "M430,290Q420,340,382,375Q344,410,297,430Q250,450,198,430Q146,410,118,364Q90,318,96,259Q102,200,134,155Q166,110,216,85Q266,60,314,78Q362,96,398,132Q434,168,442,209Q450,250,430,290Z",
    ]
    
    useGSAP(() => {

        const ctx = gsap.context(() => {

            const mm = gsap.matchMedia();
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
    
                tl.fromTo([mainTextSplit.lines, taglineSplit.lines],{
                    opacity: 0,
                    y: 100
                },
                    {
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.07,
                    ease: "power3.inOut"
                }, "<0.8");
    

                mm.add("(min-width:767px)", () => {

                    // animate blob 
                    const animateBlob = (id: string, rangeX: [number, number], rangeY: [number, number]) => {
        
                        gsap.to(`#${id}`, {
                            duration: 4,
                            ease: "power3.inOut",
                            repeat: -1,
                            // yoyo: true,
                            keyframes: blobPaths.map((d) => ({attr: {d}}))
                        })
        
                        const floatBlob = () => {
                            
                            gsap.to(`#${id}`, {
                                duration: gsap.utils.random(3,5),
                                x: gsap.utils.random(rangeX[0], rangeX[1]),  // 300 250 100 
                                y: gsap.utils.random(rangeY[0], rangeY[1]),
                                ease: "power3.inOut",
                                onComplete: floatBlob
                            })
                        } 
        
                        floatBlob()
                    }

                    // create blobs to animate
                    Array.from({length: 5}).forEach((_, i) => {
        
                        const offsetX = i * 500 - 600;
                        const rangeX: [number,number] = [offsetX - 200, offsetX + 300];
                        const rangeY: [number,number] = [-300, 300];
        
                        animateBlob(`blob${i}`, rangeX, rangeY)
                    })
                })
    
        }, containerRef)

        return () => {
            ctx.revert();
        }

            }, [])

    return (

    <section ref={containerRef} className="h-[90dvh] md:h-[110dvh] relative overflow-hidden">

        <div className="overlay h-screen z-90 flex w-screen fixed top-0">
            {Array.from({ length: 10 }).map((_, index) => (
                <div
                key={index}
                className="bar w-[10vw] h-[100dvh] bg-black"
                ></div>
            ))}
        </div>

        <div className="black-layer size-full bg-background relative text-text centerlized-items py-24">
            {/* SVG Blobs */}
            <svg
            className="absolute size-full opacity-40 blur-[80px]"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path id="blob1" fill="#000000" d={blobPaths[0]} />
            <path id="blob2" fill="#111111" d={blobPaths[1]} />
            <path id="blob3" fill="#222222" d={blobPaths[2]} />
            </svg>

            <div className="px-4 sm:px-6 lg:px-8 size-full flex flex-col justify-center">

                <div className="hero-text font-nevanta-bold uppercase text-[2rem] sm:text-[3rem] md:text-[5.5rem] text-center md:text-left italic">
                    <h1 ref={mainTextRef} className='leading-tight'>
                        mohamed hassani<br/>
                        website developer<br/>
                        expert
                    </h1>

                    <p ref={taglineTextRef} className='font-nevanta-Medium capitalize text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] pt-3 sm:pt-4 lg:pt-5 leading-relaxed'>From concept to code — bringing visions to life.</p>
                </div>
            </div>
        </div>


    </section>
)
}

export default HeroContent
