import { IoIosArrowRoundForward } from "react-icons/io";
function Card({width, start, para, hover}) {
  return (
    <div className={`bg-zinc-800 min-h-[60vh] ${hover && "hover:bg-violet-600"} justify-between flex flex-col p-5 rounded-xl ${width}`}>
        <div className="w-full" >
            <div className="w-full flex justify-between items-center">
                <h3>first heding</h3>
                <IoIosArrowRoundForward /> 
            </div>
            <h1 className="text-3xl font-medium mt-5">Whatever Heading</h1>
        </div>
        <div className="down w-full">
           {
            start && 
            <>
                <h1 className="text-6xl font-semibold tracking-tight leading-nonde">Start a Project</h1>
                <button className="rounded-full mt-5 py-2 px-3 border-[1px] border-zinc-50">Contact Us</button>
            </> 
           }
           {
                para && <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
           }  
           
        </div>
    </div>
  )
}

export default Card
