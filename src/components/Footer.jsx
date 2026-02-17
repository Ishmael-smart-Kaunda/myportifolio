import { AiOutlineArrowUp, AiFillLinkedin, AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FiFacebook } from "react-icons/fi"
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook, IoLogoTwitter} from "react-icons/io"

const Footer =()=>{
                   return(
                          <footer className="relative footer w-full bg-emerald-900/10 p-2">
                                <div className="w-full md:w-6xl m-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-gray-500">
                                  
                                  <article className=" bg-z0 p-2">
                                    <div className="flex flex-col align-left mb-2">
                                        <span className=" inline-flex font-semibold text-lg text-gray-700"> <i className="text-indigo-800 ">i</i>Sites <AiOutlineArrowUp className="font-bold text-indigo-800 rotate-45 size-3 translate-y-1 -translate-x-0.2 "/></span>
                                        <p className=" font-semibold text-[12px] text-left">Clarity and precison in every step</p>
                                    </div>
                                    <address className="not-italic mt-4 text-gray-500 ">
                                        <h2 className="text-left text-[13px] font-semibold">CONTACT</h2>
                                    <span className="flex flex-col align-left text-[13px]">
                                       <p className="text-left"> Phone : +265 981 45 72 86</p>
                                       <p className="text-left"> Email : +ishamaelsmart@gmail.com</p>
                                    </span>
                                    </address>
                                  </article>
                                  
                                  <article className="h-full bg-zic-100 flex flex-col p-2">
                                    <h2  className="font-semibold text-left md:text-center">SOCIAL</h2>
                                    <div className="w-full md:w-[80%] md:m-auto flex flex-col md:flex-row justify-around">
                                        <a >  <IoLogoLinkedin className="md:mx-auto size-10 rounded-sm"/></a>
                                        <a > <IoLogoInstagram className="md:mx-auto size-10 rounded-sm" /></a>
                                        <a > <IoLogoFacebook className="md:mx-auto size-10 rounded-sm "/></a>
                                        <a > <IoLogoTwitter className="md:mx-auto size-10 rounded-sm "/></a>
                                    </div>
                                  </article>

                                  <article className="w-full p-2">
                                    <h2 className="font-semibold text-left md:text-center">LINK TO</h2>
                                    <ul className=" md:w-fit m-auto text-left mt-5">
                                        <li>Projects</li>
                                        <li>Profile</li>
                                        <li>Contact</li>
                                    </ul>
                                  </article>      
                                </div>
                                <p className="text-sm font-ligh text-gray-400 text-center p-4"> © <span>2026</span> iSites : All rights reserved.</p>
                          </footer>
                   )
}
export default Footer