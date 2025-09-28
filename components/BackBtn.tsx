import { ArrowLeft } from "lucide-react"

const BackBtn = () => {

    const handleGoingBack = () => {
        window.history.back();
    }

    return (
        <div onClick={handleGoingBack} className="btn-hover back size-[3rem] bg-white mix-blend-difference fixed z-90 rounded-full text-black centerlized-items cursor-pointer"><ArrowLeft/></div>
    )
}

export default BackBtn