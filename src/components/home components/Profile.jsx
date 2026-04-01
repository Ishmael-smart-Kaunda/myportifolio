

import HeroImage from "../../assets/images/code.jpg"
const Profile =()=>{
            return(
                   <section id="profile" className="w-full mx-auto py-9 text-gray-700 bg-stone-100">
                    <div className="w-full md:max-w-6xl m-auto">
                     <h1 className="text-center font-bold text-[25px] text-center my-3">PROFILE</h1>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500 text-[20px]">
                        <div className=" flex flex-col gap-2 p-5 text-justify">
                            <p>I develop morden websites designed to support your business growth.
                               With a focus on clean architecture, performance, and visibility, I build platforms
                               that are both technically sound and commercially effective.
                            </p>
                            <h2 className=" font-semibold text-[16px]">KEY FOCUS</h2>
                            <ul className="text-[16px] line-2 px-5 leading-relaxed text-left">
                                <li className="list-disc marker:text-yellow-700/30">Performance focused development</li>
                                <li className="list-disc marker:text-yellow-700/30">Clean, Scalable architecture</li>
                                <li className="list-disc marker:text-yellow-700/30">Responsive and mobile-first design</li>
                                <li className="list-disc marker:text-yellow-700/30">Business Oriented structure</li>
                            </ul>
                             <h2 className="font-semibold text-[16px]">CORE SKILLS</h2>
                             <p className="text-[14px]">HTML | JavaScript | CSS | React.Js | Tailwindcss</p>
                        </div>

                        <div className="w-full h-full rounded-sm p-6 bg-gray-600">
                          {/*<img src={HeroImage} className="opacity-70 w-full h-full object-cover rounded-md"/>*/}
                        </div>

                        

                     </div>
                    </div>
                   </section>
            )

}

export default Profile