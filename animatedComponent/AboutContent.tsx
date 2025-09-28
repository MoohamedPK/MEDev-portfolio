    "use client"

import Image from "next/image"
import gsap from "gsap";
import { useRef, useState } from "react";
import { aboutMe } from "@/constants";
import { SplitText, ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger)

const AboutContent = () => {

    const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
    const answerRef = useRef(null);
    const aboutContainerRef = useRef(null)
    
    useGSAP(() => {
        
            const split = SplitText.create(answerRef.current, {type: "words, lines"})
            
            const tl = gsap.timeline()

            if (selectedQuestion !== null) {
                
                tl.fromTo(".about-img", {
                    clipPath: "polygon(0 50%, 100% 49%, 100% 50%, 0 50%)",
                    scale: 0.5
                }, {
                    clipPath: "polygon(0 8%, 100% 8%, 100% 100%, 0% 100%)",
                    duration: 1,
                    scale: 1,
                    ease: "power3.inOut"
                })

                .fromTo(split.lines, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                    yPercent: 130,
                    scale: 0.9,
                }, {
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    yPercent: 1,
                    scale: 1,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: "power1.inOut"
                }, "-=0.5")
            }

    }, [selectedQuestion])

    useGSAP(() => {

        const titleSplit = SplitText.create(".title-text", {type: "words, letters"})

        const ctx = gsap.context(() => {
            const secondTl = gsap.timeline({
                defaults: {
                    duration: 0.9,
                    ease: "power3.inOut",
                    stagger:0.05,
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

    // SKILLS ANIAMTION
    useGSAP(() => {

        if (selectedQuestion === null) return ;
        
        const ctx = gsap.context(() => {

            const tl = gsap.timeline({
                defaults: {
                    duration: 0.9,
                    ease: "power3.inOut",
                    stagger: 0.1,
                }
            });
            const skillsTitle = gsap.utils.toArray(".skill-title");
            
            tl.fromTo(skillsTitle, {
                yPercent: 120,
            }, {
                yPercent: 0,
            })
            
            tl.to(".skill-underline",{
                scaleX: "100%",
            })

            tl.fromTo(".skill-item", {
                opacity: 0,
                y: 10
            }, {
                opacity: 1,
                y: 0,

            }, "<")

        }, aboutContainerRef)

        return () => {
            ctx.revert();
        }
    }, [selectedQuestion])


return (
    <section ref={aboutContainerRef} className="min-h-[100dvh] md:min-h-[120dvh] bg-text text-background font-nevanta-Medium italic">
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
                <div className="grid grid-cols-1 md:grid-cols-2 size-full items-center gap-y-12 md:gap-y-0 px-15 text-background font-nevanta-Light text-xl md:text-2xl lg:text-3xl">

                    <div className="">
                        <Image src={aboutMe[selectedQuestion].img} alt="about image" width={450} height={450} className="about-img"/>
                    </div>

                    {aboutMe[selectedQuestion].answer ? (
                        <div className="leading-8 md:leading-11">
                        <p ref={answerRef} className="leading-11">
                            {aboutMe[selectedQuestion].answer}
                        </p>
                    </div>
                    ) : (
                        <div className="skill leading-8 md:leading-11 w-full">
                        {aboutMe[selectedQuestion].skills &&
                            Object.entries(aboutMe[selectedQuestion].skills).map(([category, items]) => (
                            <div key={category} className=" space-y-5 mb-8">
                                {/* Category title */}
                                <div className="overflow-hidden">
                                    <p className="skill-title text-lg sm:text-xl md:text-2xl font-semibold capitalize leading-6 ">
                                        {category}
                                    </p>
                                    <div className="skill-underline h-[2px] bg-background origin-left scale-x-0"></div>
                                </div>
                                
                                {/* Skills list */}
                                <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                                {items.map((item) => (
                                    <p
                                    key={item}
                                    className="skill-item  bg-white text-black text-xs sm:text-sm md:text-base lg:text-lg px-3 py-1.5 rounded-full shadow-md"
                                    >
                                    {item}
                                    </p>
                                ))}
                                </div>
                            </div>
                            ))}
                        </div>
                    )}
                    
                </div>
            )}
        </div>
    </section>
)
}
export default AboutContent







