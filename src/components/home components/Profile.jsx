

import HeroImage from "../../assets/images/code.jpg"
const Profile =()=>{
            return(
                   <section className="w-full md:max-w-6xl mx-auto py-9 text-gray-700">
                     <h1 className="text-center font-bold text-[25px] text-center">PROFILE</h1>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500">
                        <div className=" flex flex-col gap-2 p-5 text-justify">
                            <p>I develop morden websites designed to support your business growth.
                               With a focus on clean architecture, performance, and visibility, I build platforms
                               that are both technically sound and commercially effective.
                            </p>
                            <h2 className=" font-semibold">Key Focus</h2>
                            <ul className="text-sm line-2 px-4 leading-relaxed text-left">
                                <li className="list-disc">Performance focused development</li>
                                <li className="list-disc">Clean, Scalable architecture</li>
                                <li className="list-disc">Clean, Scalable architecture</li>
                                <li className="list-disc">Responsive and mobile-first design</li>
                                <li className="list-disc">Business Oriented structure</li>
                            </ul>
                             <h2 className="font-semibold">Core Skills</h2>
                             <p className="text-[12px]">JavaScript | CSS | React.Js | Tailwindcss |</p>
                        </div>

                        <div className="w-full h-full rounded-sm p-6">
                          <img src={HeroImage} className="opacity-70 w-full h-full object-cover rounded-md"/>
                        </div>

                        

                     </div>

                   </section>
            )

}

export default Profile