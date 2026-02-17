
import flex from "../../assets/images/flex.png"
import dArt from "../../assets/images/digitalArts.png"
const Projects = ()=>{
                 return(
                        <section className="w-full md:max-w-4xl m-auto pt-9 text-center text-gray-700">
                            <h1 className="font-bold text-[25px] ">SELECTED WORKS</h1>
                            <p className="my-4 text-[18px]">A selection of recent projects built with focus on perfomance, clarity, and business results.</p>
                            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 p-3">
                                <div className="w-full h-full border border-gray-500/10 text-gray-500 text-[15px] leading-relaxed text-justify rounded-lg  p-4">
                                    <h2 className="font-bold text-center">Flex Agency and Consultancy</h2>
                                    <img src={flex} className="h-auto w-full rounded-md"/>
                                    <h3 className="font-semibold">Problem</h3>
                                    <p>The client had no centralized online presence.
                                       Property listings were shared manually through WhatsApp, Facebook, etc, causing 
                                       inconsistent branding and missed inquiries.
                                    </p>
                                    <h3 className="font-semibold">Solution</h3>
                                    <p>Built a modern digital platform with React and Tailwind based 
                                       architecture. Structured listings into categorized sections with clear
                                       CTAs and inquiry forms to streamline communication.
                                    </p>
                                    <h3 className="font-semibold">Results</h3>
                                    <ul className="ml-5 text-[13px]">
                                        <li className="list-disc">Improved professional credibility</li>
                                        <li className="list-disc">Faster response time to inquires</li>
                                        <li className="list-disc">Centralized property information</li>
                                        <li className="list-disc">Icreased structured lead generation</li>
                                    </ul>

                                </div>

                                <div className="w-full h-full border border-gray-500/10 text-gray-500 text-justify rounded-lg  p-4">
                                    <h2 className="font-bold">Digital Arts Academy</h2>
                                     <img src={dArt} className="h-50 w-full rounded-md"/>
                                     <h3 className="font-semibold">Problem</h3>
                                    <p>The client had no centralized online presence.
                                       Property listings were shared manually through WhatsApp, Facebook, etc, causing 
                                       inconsistent branding and missed inquiries.
                                    </p>
                                    <h3 className="font-semibold">Solution</h3>
                                    <p>Built a modern digital platform with React and Tailwind based 
                                       architecture. Structured listings into categorized sections with clear
                                       CTAs and inquiry forms to streamline communication.
                                    </p>
                                    <h3 className="font-semibold">Results</h3>
                                    <ul className="ml-5 text-[13px]">
                                        <li className="list-disc">Improved professional credibility</li>
                                        <li className="list-disc">Faster response time to inquires</li>
                                        <li className="list-disc">Centralized property information</li>
                                        <li className="list-disc">Icreased structured lead generation</li>
                                    </ul>
                                </div>
                            </div>
                            
                        </section>
                 )
}
export default Projects