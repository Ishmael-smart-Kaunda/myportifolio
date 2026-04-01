import { Link } from "react-router"

export default function ContactForm(){


       return(
                <form className="w-full md:w-[80%]  grid grid-cols-1 md:grid-cols-2 gap-4 pt-25 text-gray-500 font-semibold">
                
                <fieldset className="">
                <label >Name</label>
                <input 
                    type="text"
                    name="user_name" 
                    placeholder="Ishmael smart" 
                    className="w-full p-2 mt-3 text-gray-600/90 font-normal shadow-sm bg-zinc-50 rounded-md rounded-md placeholder: text-placeholder  focus:outline-none "
                    required
                />
                </fieldset>
 
                <fieldset>
                <label>Phone</label>
                <input 
                    type="tel"
                    name="phone" 
                    placeholder="0981457286" 
                    className="w-full p-2 mt-3 text-gray-600/90 font-normal shadow-sm bg-zinc-50 rounded-md focus:outline-none"
                />
                </fieldset>

                <fieldset className="md:col-span-2">
                <label>Email</label>
                <input 
                    type="email"
                    name="email" 
                    placeholder="isites0i@gmail.com" 
                    className="w-full p-3 mt-3 text-gray-600/90 font-normal shadow-sm bg-zinc-50 rounded-md focus:outline-none "
                />
                </fieldset>
               
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    className="md:col-span-2 mt-3 w-full p-2 text-gray-600/90 font-normal shadow-sm bg-zinc-50 rounded-md focus:outline-none"
                    
                >
                </textarea>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-3 w-full">
                   <Link to="/">
                    <button
                      className="w-full px-4 py-3 bg-stone-700 border-none text-white font-semibold rounded-md hover:bg-stone-700/95"
                    >
                    Back
                    </button>
                  </Link> 
                  <button
                    className="w-full px-4 py-3 bg-stone-700 border-none text-white font-semibold rounded-md hover:bg-stone-700/95">
                    Send
                  </button>
                </div>
        </form>
       )
}