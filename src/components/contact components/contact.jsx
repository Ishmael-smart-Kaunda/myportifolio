
import ContactForm from "./form"
import { FiMapPin, FiMail, FiInbox, FiPhone } from "react-icons/fi"


export default function ContactDetails(){
         return(
                 <section 
                
                      className="max-w-[1500px] mx-auto p-7 mt-16 "
                      >
                     
                     <div className="w-[95%] md:max-w-6xl mx-auto grid grid-cols-1 rounded-lg md:grid-cols-2 gap-5">
                    
                     <div className="w-full h-full justify-between py-10 px-5 rounded-lg bg-gradient-to-r from-indigo-900 to-yellow-800">
                      
                    </div>
                    <ContactForm/>
                    </div>
                </section>
         )
}