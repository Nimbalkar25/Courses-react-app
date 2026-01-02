import { FcLike, FcLikePlaceholder } from "react-icons/fc"
import "./Card.css"
import { useState } from "react"
import { toast } from "react-toastify";


function Card(props) {
    const course = props.course
    const [liked, setLiked] = useState(false);
    const [readmore, setReadmore] = useState(false);

    const description = readmore
        ? course.description
        : `${course.description.substring(0, 100)}... `

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function clickhandler(){
        setLiked(!liked);
        if(!liked){
            toast.success("Liked Successfully")
        }else{
            toast.warning("Liked removed")
        }
        console.log(liked);

    }


    return (
        <div className="flex flex-col items-center bg-[#2b2b31] rounded-[0.3rem] w-[30%] [@media(max-width:800px)]:w-[48%] ">
            <div className="w-[100%] relative">
                <img className="w-[100%] h-[10rem] rounded-[0.3rem_0.3rem_0_0rem]" src={course.image.url} alt={course.image.alt} ></img>

                <div className="absolute bottom-[-0.3rem] right-[0.5rem]">
                    <button className="rounded-full bg-red-100 h-[2.1rem] w-[2.1rem]  flex justify-center items-center " onClick={() => clickhandler()}>
                        {liked ?( <FcLike className="liked"/>) : (<FcLikePlaceholder className="liked"/>)}
                    </button>
                </div>

            </div>

            <div className="p-[0.8rem] flex flex-col gap-[0.4rem] text-white">
                <p className=" font-semibold">{course.title}</p>
                <p className="text-[0.9rem]" onClick={readmoreHandler}>{description}</p>
            </div>


        </div>
    )
}

export default Card;