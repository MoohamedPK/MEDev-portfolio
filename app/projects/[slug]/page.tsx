
import ClientProjectDetails from "@/components/ClientProjectDetails";
import { ProjectsData } from "@/constants";
import generateSlug from "@/lib";
import { Metadata } from "next";

interface ProjectProps {
    params: {
        slug: string
    }
}

export async function generateMetadata({ params }: ProjectProps): Promise<Metadata> {
    const { slug } = params;
    const project = ProjectsData.find((p) => generateSlug(p.title) === slug);

    if (!project) {
        return {
            title: "Project Not Found",
            description: "The requested project could not be found.",
        };
    }

    return {
        title: `${project.title} - Project Details`,
        description: project.overview,
        keywords: [
            ...project.techs,
            "web development",
            "frontend development",
            "portfolio project",
            "Mohamed Hassani",
            project.title.toLowerCase()
        ],
        openGraph: {
            title: `${project.title} - Mohamed Hassani Portfolio`,
            description: project.overview,
            url: `https://mohamedhassani.dev/projects/${slug}`,
            siteName: "Mohamed Hassani Portfolio",
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: `${project.title} - Project Screenshot`,
                },
            ],
            locale: "en_US",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${project.title} - Mohamed Hassani Portfolio`,
            description: project.overview,
            images: [project.image],
        },
        alternates: {
            canonical: `https://mohamedhassani.dev/projects/${slug}`,
        },
    };
}

const ProjectDetails = async ({params}: ProjectProps) => {

    const {slug} = params 
    const project =  ProjectsData.find( (p) => generateSlug(p.title) === slug)

    if (!project) return <p>Project Not Found</p>;

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "description": project.overview,
        "url": `https://mohamedhassani.dev/projects/${slug}`,
        "image": project.image,
        "author": {
            "@type": "Person",
            "name": "Mohamed Hassani",
            "url": "https://mohamedhassani.dev"
        },
        "creator": {
            "@type": "Person", 
            "name": "Mohamed Hassani"
        },
        "keywords": project.techs.join(", "),
        "programmingLanguage": project.techs,
        "dateCreated": "2024",
        "genre": "Web Application",
        "inLanguage": "en"
    };

return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    <div>
        <ClientProjectDetails project={project}/>
    </div>
    </>
)
}

export default ProjectDetails