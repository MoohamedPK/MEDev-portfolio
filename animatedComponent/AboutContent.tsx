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
        <section id="about" ref={aboutContainerRef} className=" h-[110dvh] bg-black text-text font-nevanta-Medium italic">
            <div className="text-container text-center text-[2em] overflow-hidden">
                <h1 className="title-text m-0 leading-8 pt-7">
                    Discover More About Me!
                </h1>
            </div>

            <div className="flex mt-18 justify-center">
                <div className="btn-container flex space-x-5 border border-text w-fit px-12 py-4 rounded-full">
                    {aboutMe.map((q, i) => (
                        <div key={i} className="">
                            <button onClick={() => setSelectedQuestion(i)} className="my-btn bg-text text-black p-2 rounded-full cursor-pointer btn-hover">{q.button}</button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="answer flex justify-center items-center mt-32">
                {selectedQuestion === null ? (
                    <div className="font-nevanta-Light">What Do You Want To Know About Me? 😶‍🌫️</div>
                ) : (
                    <div className="flex justify-around items-center space-x-8">

                        <div className="w-1/2 relative ">
                            <Image ref={answerImgRef} className="about-img size-100 object-cover sepia-50" width={200} height={200} src={aboutMe[selectedQuestion].img ?? ""} alt="about picture"/>
                        </div>

                        <div  className="w-[60rem] text-[2.5em] flex justify-center overflow-hidden uppercase ">
                            <p ref={answerRef} className="w-[80rem] text-center">
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