import { AiOutlineAlignRight } from "react-icons/ai"
import { FaWhatsapp } from "react-icons/fa6"
import { NavLink } from "react-router"
import { Link } from "react-router"
const NavBar = ()=>{
                 return(
                        <div className="
                                       nav-bar fixed
                                       w-full
                                       top-0 md:top-3
                                       left-1/2 
                                       translate-x-[-50%] 
                                       z-100 flex flex-row 
                                       justify-between 
                                       items-center md:rounded-md w-full md:w-[85%] 
                                       h-12 py-2 px-5 bg-stone-50
                                       shadow-sm"
                                       >
                            <div className="flex flex-col align-left mb-2">
                                <span className=" inline-flex font-semibold text-[20px] text-gray-600"> <i className="text-yellow-800 mr-0.5">Ishmael</i> smart {/*<AiOutlineArrowUp className="font-bold text-indigo-800 rotate-45 size-3 translate-y-1 -translate-x-0.2 "/>*/}</span>
                                <p className=" font-semibold text-[10px] text-gray-500 text-left">Clarity and precison in every step</p>
                            </div>
                            <button className="md:hidden">
                                <AiOutlineAlignRight className="text-gray-700 size-6"/>
                            </button>
                            <ul className="hidden md:inline-flex gap-15 text-gray-900 font-semibold">
                                <NavLink
                                to="#projects"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("projects")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}
                                
                                   >
                                    Projects
                                </NavLink>

                                <NavLink 
                                 to="/#profile"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("profile")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}
                               
                                >

                                Profile
                                </NavLink>
                                <NavLink 
                                 to="/contact"
                                  className={({isActive})=> 
                                      isActive? 
                                     'border-b-2 border-yellow-800 p-0.5' : 'p-0.5'
                                }
                                >
                                Contact
                                </NavLink>
                            </ul>
                        </div>
                 )
}
export default NavBar