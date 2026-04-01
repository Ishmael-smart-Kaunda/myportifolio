import { AiOutlineAlignRight } from "react-icons/ai"
import { FaWhatsapp,FaPhone  } from "react-icons/fa6"
import { NavLink } from "react-router"
import { Link } from "react-router"
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
                                <span className=" inline-flex font-semibold text-[20px] text-gray-600"> <i className="text-yellow-800 mr-0.5">Ishmael</i> Smart {/*<AiOutlineArrowUp className="font-bold text-indigo-800 rotate-45 size-3 translate-y-1 -translate-x-0.2 "/>*/}</span>
                                <p className=" font-semibold text-[10px] text-gray-500 text-left">Clarity and precison in every step</p>
                            </div>
                            <div className=" inline-flex gap-5 items-center">
                                <a href="tel:265007914433" className=" rounded-full font-semibold ">
                                    <FaPhone className="size-8 text-zinc-50 hover:text-emerald-600 rounded-full bg-zinc-300 p-2"/>
                                </a>
                                <a href="https://wa.me/0887814433" className="hidden md:block rounded-full font-semibold ">
                                    <FaWhatsapp className="size-8 font-bold text-zinc-50 hover:text-emerald-600 rounded-full bg-zinc-300 p-2"/>
                                </a>
                                
                             </div>
                            
                        </div>
                 )
}
export default NavBar