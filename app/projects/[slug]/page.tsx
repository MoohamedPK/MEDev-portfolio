
import ClientProjectDetails from "@/components/ClientProjectDetails";
import { ProjectsData } from "@/constants";
import generateSlug from "@/lib";

interface ProjectProps {
    params: {
        slug: string
    }
}

const ProjectDetails = async ({params}: ProjectProps) => {

    const {slug} = params 
    const project =  ProjectsData.find( (p) => generateSlug(p.title) === slug)

    if (!project) return <p>Project Not Found</p>;

  return (
    <div>
      <ClientProjectDetails project={project}/>
    </div>
  )
}

export default ProjectDetails