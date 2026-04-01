import { AiOutlineArrowUp, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FiFacebook } from "react-icons/fi"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter} from "react-icons/io"
import { Link } from "react-router"
const Footer =()=>{
                   return(
                          <footer className="relative footer w-full  bg-stone-950 p-2">
                                <div className="w-full md:w-6xl m-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-500">
                                  
                                  <article className=" bg-z0 p-2">
                                    <div className="flex flex-col align-left mb-2">
                                        <span className=" inline-flex font-semibold text-lg text-gray-700"> <i className="text-yellow-800 ">I</i>smart <AiOutlineArrowUp className="font-bold text-yellow-800 rotate-45 size-3 translate-y-1 -translate-x-0.2 "/></span>
                                        <p className=" font-semibold text-[12px] text-left">Clarity and precison in every step</p>
                                    </div>
                                    <address className="not-italic mt-4 text-gray-500 ">
                                        <h2 className="text-left text-[13px] font-semibold">CONTACT</h2>
                                    <div className="flex flex-col align-left text-[14px]">
                                       <span className="text-left "> Phone : <a href='tel:+265981457286' className="cursor-pointer hover:text-yellow-700/40">+265 981 45 72 86</a></span>
                                       <span className="text-left"> Email : <a href="mailto:ishmaelsmart005@gmail.com" className="cursor-pointer hover:text-yellow-700/40">ishamaelsmart@gmail.com</a></span>
                                    </div>
                                    </address>
                                  </article>
                                  
                                  <article className="h-full bg-zic-100 flex flex-col p-2">
                                    <h2  className="font-semibold text-left md:text-center">SOCIAL</h2>
                                    <div className="w-full md:w-[80%] md:m-auto flex flex-col md:flex-row justify-around">
                                        <a href="" >  <IoLogoLinkedin className="md:mx-auto size-10 rounded-sm hover:scale-105"/></a>
                                        <a href=""> <IoLogoInstagram className="md:mx-auto size-10 rounded-sm hover:scale-105" /></a>
                                        <a href=""> <IoLogoFacebook className="md:mx-auto size-10 rounded-sm hover:scale-105"/></a>
                                        <a href=""> <IoLogoTwitter className="md:mx-auto size-10 rounded-sm hover:scale-105"/></a>
                                    </div>
                                  </article>

                                  <article className="w-full p-2">
                                    <h2 className="font-semibold text-left md:text-center">LINK TO</h2>
                                    <ul className=" md:w-fit m-auto text-left mt-5 flex flex-col gap-3">
                                        <Link
                                             to="/#projects"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                document.getElementById("projects")
                                                  ?.scrollIntoView({ behavior: "smooth" });
                                              }}
                                              className="hover:text-yellow-700/50"
                                             >
                                         
                                           Projects
                                        </Link>

                                        <Link 
                                          to="/profile"
                                          onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("profile")
                                              ?.scrollIntoView({ behavior: "smooth" });
                                          }}
                                          className="hover:text-yellow-700/50"
                                         >
                                          Profile
                                        </Link>
                                        <Link to="/contact" className="hover:text-yellow-700/50">Contact</Link>
                                    </ul>
                                  </article>      
                                </div>
                                <p className="text-sm font-ligh text-gray-400 text-center p-4"> © <span>2026</span> iSites : All rights reserved.</p>
                          </footer>
                   )
}
export default Footer