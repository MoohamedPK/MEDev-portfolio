"use client"; 

import { ProjectsData } from "@/constants";

//GSAP 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, SplitText)

const ProjectsContent = () => {

    const projectsContainerRef = useRef<HTMLElement>(null)
    
    useGSAP(() => {

        const ctx = gsap.context(() => {
            
            
            gsap.utils.toArray<HTMLElement>("section").forEach((section) => {

                const title = section.querySelector(".project-title")
                const splitTitle = new SplitText(title, {type: "words, chars"})

                const overview = section.querySelector(".overview");
                const overviewSplit = new SplitText(overview, {type: "lines, words"})

                const featureList = section.querySelectorAll(".feature-list");
                

                const sectionTitleSplit = new SplitText(".section-title", {type: "words, chars"});

                const projectImg = section.querySelector(".project-image");

                gsap.fromTo(sectionTitleSplit.chars, {
                    yPercent: 130,
                }, {
                    yPercent: 0,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: projectsContainerRef.current,
                        start:"top 80%",
                    }
                })

                // section scale animation 
                 gsap.set(projectsContainerRef.current, { perspective: 1000 }); // set perspective on parent

                gsap.to(section, {
                    z: -200,              // push backward in 3D space
                    scale: 0.6,
                    transformOrigin: "center top",
                    scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    }
                })

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                    }
                }); 

                tl.fromTo(projectImg, {
                    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)"
                }, {
                    clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                    duration: 0.9,
                    ease: "power3.inOut",
                    
                })

                tl.fromTo([splitTitle.words, overviewSplit.lines, featureList], {
                    yPercent: 130,
                    opacity: 0,
                }, {
                    yPercent: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease:"power3.inOut",
                    stagger: 0.06,
                }, "<=0.3")

                
            })
            
        }, projectsContainerRef)

        return () => {
            ctx.revert();
        }
    }, [])

    return (
        <main ref={projectsContainerRef} className="grid justify-center items-center bg-background" style={{ height: `${ProjectsData.length * 110}vh` }}>

            <div className="text-center text-[1.2em] sm:text-[1.5em] md:text-[1.8em] lg:text-[2em] overflow-hidden text-text italic font-nevanta-Medium py-[1.5rem] sm:py-[2rem]">
                <h1 className="section-title m-0 leading-6 sm:leading-7 md:leading-8">
                    Work Showcase
                </h1>
            </div>

                {ProjectsData.map((project, i) => (
                <section key={i} style={{ top: `calc(10% + ${i * 60}px)`, backgroundColor: project.color }} className="min-h-[100dvh] w-[95dvw] sm:w-[92dvw] md:w-[90dvw] sticky flex justify-center items-center rounded-[50px] sm:rounded-[75px] md:rounded-[100px] text-black bg-white inset-shadow-sm inset-shadow-gray-400/60">
                    
                    <div className="contentContainer size-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 lg:gap-y-0 lg:gap-x-12 px-4 sm:px-5 py-8 lg:py-0">

                        <div className="right size-full order-1 lg:order-1">
                            <Image src={project.image} alt="project image" className="project-image size-full object-cover rounded-lg" width={800} height={800}/>
                        </div>

                        <div className="content space-y-4 sm:space-y-5 order-2 lg:order-2">    
                            <div className="contentHead space-y-4 sm:space-y-6 md:space-y-8">
                                <div className="leading-6 sm:leading-8 md:leading-10 overflow-hidden">
                                    <h1 className="project-title font-nevanta-bold text-[1.5rem] sm:text-[1.8rem] md:text-[2.2rem] lg:text-[2.5rem]">{project.title}</h1>
                                </div>
                                <div className="">
                                    <p className="overview w-full sm:w-4/5 md:w-3/4 font-nevanta-Light text-sm sm:text-base md:text-lg">{project.overview}</p>
                                </div>
                            </div>

                            <div className="features font-nevanta-Medium capitalize space-y-2 sm:space-y-3">
                                <p className="text-sm sm:text-base">Features: </p>
                                <ul className="space-y-1 sm:space-y-2">
                                    {project.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2 pl-3 sm:pl-5 leading-4 sm:leading-5 pt-1 overflow-hidden">
                                            <li className="feature-list text-xs sm:text-sm md:text-base">{feature}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>

                            <div className="buttons flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
                                <Link href={project.link} className="flex items-center bg-background border border-black w-full sm:w-fit text-black p-2 sm:p-3 btn-hover cursor-pointer text-sm sm:text-base justify-center sm:justify-start">
                                    Live Demo
                                    <ArrowUpRight size={16} className="sm:w-5 sm:h-5"/>
                                </Link>

                                <Link href={project.github} className="flex items-center bg-background border border-black w-full sm:w-fit text-black p-2 sm:p-3 btn-hover cursor-pointer space-x-2 text-sm sm:text-base justify-center sm:justify-start">
                                    <p>Github Repo</p>
                                    <Github size={16} className="sm:w-5 sm:h-5"/>
                                </Link>
                            </div>
                        </div>

                    </div>

                </section>
            ))}
        </main>
    )
}

export default ProjectsContent