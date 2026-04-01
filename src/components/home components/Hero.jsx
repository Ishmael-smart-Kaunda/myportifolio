
import HeroImage from "../../assets/images/hero.jpg"
import corporate from "../../assets/images/corporate1.jpg"
import { FaWhatsapp, FaPhone } from "react-icons/fa6"
import { Link } from "react-router"
const Hero =()=>{
              return (
                      <section id="header" className="relative isolate overflow-hidden w-full md:max-w-7xl mx-auto h-[90vh] px-5 md:px-25 bg-gradient-to-b from-zinc-200 to-white rounde">
                         {/*<img src={corporate} className="absolute inset-0 object-fit w-full h-full mix-blend-overlay"/>*/}
                         <div className="relative top-[60%]  translate-y-[-50%] grid grid-cols-1 md:grid-cols-2 justify-between items-center w-full p-4">
                            
                            <div className="w-full md:w-[90%] mx-auto flex flex-col items-center bg-black/10 py-10 px-2 rounded-lg">
                              <h1 className="text-3xl md:text-4xl font-bold text-gray-50 mt-5 font-verdana text-center">MORDERN WEBSITES BUILT FOR BUSINESS <strong className="text-yellow-900">GROWTH</strong></h1>
                              <p className="my-3 text-gray-500 text-lg text-center"> Structured for clarity, performance, and impact.</p>
                              
                                <Link to="/contact" className="w-full md:w-[40%] m-auto p-2  rounded-sm text-white text-center font-semibold bg-stone-700">Contact</Link>
                                
                            </div>
                            {/*<div className=" w-[40%] px-3 py-2 h-30 border border-gray-500/40 rounded-[20px]">
                              <button className=" rounded-full font-semibold ">
                                <FaWhatsapp className="size-8 text-emerald-600 hover:text-indigo-800"/>
                            </button>
                            <h1 className="text-xl font-semibold text-gray-500 text-center mb-2">CONTACT</h1>
                             <form className="flex flex-col gap-4 ">
                                   <input
                                        type="text" 
                                        placeholder="Name"
                                       
                                         className="border border-zinc-300 bg-zinc-100 rounded-sm px-2 py-3"

                                   />

                                   <input 
                                        type="email" 
                                        placeholder="Email" 
                                      
                                        className="border border-zinc-300 bg-zinc-100 rounded-sm px-2 py-3"
                                   />
                                   <textarea
                                        type="text" 
                                        placeholder="Message"
                                        
                                        className="border border-zinc-300 bg-zinc-100 rounded-sm px-2 py-3"

                                   />
                                   <button className="w-full p-2  rounded-sm text-white font-semibold bg-indigo-800">Send</button>
                             </form>
                            </div>*/}
                        </div>
                        <div className="fixed bottom-20 right-5 md:right-28 flex flex-col justify-between p-2 h-25 border border-gray-500/40 rounded-[20px] bg-black/10">
                              <button className=" rounded-full font-semibold ">
                                <FaWhatsapp className="size-8 text-emerald-600 hover:text-indigo-800"/>
                            </button>
                            <button className=" rounded-full font-semibold ">
                                <FaPhone className="size-7 text-emerald-600 hover:text-indigo-800"/>
                            </button>
                         </div>
                        <p className="absolute bottom-5 left-1/2 translate-x-[-50%] text-gray-600 font-bold text-[10px]">Fast | Scalable | Responsive</p>
                      </section>
              )
}
export default Hero