import { AiOutlineAlignRight } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa6"
const NavBar = ()=>{
                 return(
                        <div className="
                                       nav-bar fixed 
                                       top-0 md:top-5 
                                       left-1/2 
                                       translate-x-[-50%] 
                                       z-100 flex flex-row 
                                       justify-between 
                                       items-center md:rounded-md w-full md:w-[85%] 
                                       h-12 py-2 px-5 bg-stone-50
                                       shadow-sm"
                                       
                                       >
                            <div className="flex flex-col align-left mb-2">
                                <span className=" inline-flex font-semibold text-[20px] text-gray-950"> <i className="text-indigo-700 ">i</i>Sites {/*<AiOutlineArrowUp className="font-bold text-indigo-800 rotate-45 size-3 translate-y-1 -translate-x-0.2 "/>*/}</span>
                                <p className=" font-semibold text-[10px] text-gray-500 text-left">Clarity and precison in every step</p>
                            </div>
                            <button className="md:hidden">
                                <AiOutlineAlignRight className="text-gray-700 size-6"/>
                            </button>
                            <ul className="hidden md:inline-flex gap-4 text-gray-900 font-semibold">
                                <li>Projects</li>
                                <li>Profile</li>
                                <li>Contact</li>
                            </ul>
                           {/* <button className=" rounded-full font-semibold ">
                                <FaWhatsapp className="size-8 text-emerald-600 hover:text-indigo-800"/>
                            </button>*/}
                        </div>
                 )
}
export default NavBar