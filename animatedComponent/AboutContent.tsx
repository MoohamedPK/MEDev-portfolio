    "use client"

import gsap from "gsap";
import { useRef, useState } from "react";
import { aboutMe } from "@/constants";
import Image from "next/image";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger)

    const AboutContent = () => {

        const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
        const answerRef = useRef(null);
        const answerImgRef = useRef(null);
        const aboutContainerRef = useRef(null)
        
        useGSAP(() => {
            
            const ctx = gsap.context(() => {

                const split = SplitText.create(answerRef.current, {type: "words, lines"})
                
                const tl = gsap.timeline()
    
                if (selectedQuestion !== null) {
                    
                    tl.fromTo(answerImgRef.current, {
                        clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
                        scale: 0.5
                        
                    }, {
                        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                        duration: 0.9,
                        scale: 1,
                        ease: "power3.inOut"
                    })
    
                    .fromTo(split.lines, {
                        opacity: 0, 
                        yPercent: 130,
                        scale: 0.9,
                    }, {
                        opacity: 1,
                        yPercent: 1,
                        scale: 1,
                        stagger: 0.08,
                        duration: 0.8,
                        ease: "power1.inOut"
                    }, "-=0.5")
                }

                return () => {
                    ctx.revert()
                }

            }, aboutContainerRef)

        }, [selectedQuestion])


        useGSAP(() => {

            const titleSplit = SplitText.create(".title-text", {type: "words, letters"})

            const ctx = gsap.context(() => {
                const secondTl = gsap.timeline({
                    defaults: {
                        duration: 0.9,
                        ease: "power3.inOut",
                        stagger:0.05 ,

                    },

                    scrollTrigger: {
                            trigger: aboutContainerRef.current,
                            start: "top 80%",
                            end: "bottom bottom"
                        }
                });

                secondTl.fromTo(titleSplit.words, {
                        yPercent: 130
                    }, {
                        yPercent: 0,
                    })

                    .fromTo(".btn-container", {
                        yPercent: 90,
                        opacity: 0,
                    }, {
                        opacity: 1,
                        yPercent: 0,
                        
                    }, "<")

                    .fromTo(".my-btn", {
                        opacity: 0,
                        xPercent: -20
                    }, {
                        opacity: 1,
                        xPercent: 0,
                    }, "<0.5")
            })

            return () => {
                ctx.revert()
            }
        }, [])

    return (
        <section ref={aboutContainerRef} className="min-h-[120dvh] bg-text text-background font-nevanta-Medium italic">
            <div className="text-container text-center text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2em] overflow-hidden pt-[8dvh] sm:pt-[10dvh]">
                <h1 className="title-text leading-6 sm:leading-7 md:leading-8">
                    Discover More About Me!
                </h1>
            </div>

            <div className="flex mt-8 sm:mt-12 md:mt-16 lg:mt-18 justify-center px-4">
                <div className="btn-container flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 border border-background w-fit px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 rounded-full">
                    {aboutMe.map((q, i) => (
                        <div key={i} className="">
                            <button onClick={() => setSelectedQuestion(i)} className="my-btn bg-background text-text p-1.5 sm:p-2 rounded-full cursor-pointer btn-hover text-xs sm:text-sm md:text-base">{q.button}</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="answer flex justify-center items-center mt-16 sm:mt-20 md:mt-24 lg:mt-32 px-4">
                {selectedQuestion === null ? (
                    <div className="font-nevanta-Light text-sm sm:text-base md:text-lg lg:text-xl text-center">What Do You Want To Know About Me? 😶‍🌫️</div>
                ) : (
                    <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-8 w-full max-w-7xl">

                        <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/2 relative flex justify-center">
                            <Image ref={answerImgRef} className="about-img w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover sepia-50 rounded-lg" width={320} height={320} src={aboutMe[selectedQuestion].img ?? ""} alt="about picture"/>
                        </div>

                        <div className="w-full lg:w-1/2 text-[1em] sm:text-[1.2em] md:text-[1.5em] lg:text-[1.8em] xl:text-[2.5em] flex justify-center overflow-hidden uppercase">
                            <p ref={answerRef} className="w-full text-center leading-relaxed">
                                {aboutMe[selectedQuestion].answer}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
    }

    export default AboutContent