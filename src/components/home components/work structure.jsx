import { FaCheckCircle, FaSearch } from "react-icons/fa"
import { FiCode , FiTrendingUp, FiLifeBuoy, FiCompass} from "react-icons/fi"
const WorkStructure = ()=>{
                 return(
                        <section className="w-full md:max-w-6xl m-auto pt-9 text-center text-gray-700">
                            <h1 className="text-center font-bold text-xl my-4">HOW I WORK</h1>
                            <div className=" grid grid-cols-1 md:grid-cols-3 gap-3 p-3">
                                <div className="w-full h-full border border-gray-500/10 text-gray-500 text-center font-bold rounded-lg p-2">
                                    <FiCompass className=" size-6 mx-auto"/>
                                    <h2 className="">Understand & Plan</h2>
                                    <p className="font-semibold"> We discuss your goals, your aduience, and your expectations to define a clear direction before development begins.</p>
                                </div>

                                <div className="w-full h-full border border-gray-500/10 text-gray-500 text-center font-bold rounded-lg p-2">
                                    <FiCode className="size-6 mx-auto text-indigo-900"/>
                                    <h2>Build & Refine</h2>
                                    <p className="font-semibold"> I develop the website with performance and clarity in mind, and then refine it based on your feedback</p>
                                </div>

                                <div className="w-full h-full border border-gray-500/10 text-gray-500 text-center font-bold rounded-lg p-2">
                                    <FiLifeBuoy className="size-6 mx-auto"/>
                                    <h2>Launch & Support</h2>
                                    <p className="font-semibold">After the final approval, the site is deployed and optimized to ensure a smooth and reliable launch.</p>
                                </div>
                            </div>
                            
                        </section>
                 )
}
export default WorkStructure