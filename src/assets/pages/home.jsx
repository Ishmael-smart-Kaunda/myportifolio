import NavBar from "../../components/NavBar"
import Hero from "../../components/home components/Hero"
import Projects from "../../components/home components/Projects"
import WorkStructure from "../../components/home components/work structure"
import CTA from "../../components/home components/CTA"
import Profile from "../../components/home components/Profile"
import Footer from "../../components/Footer"
const Home =()=>{
                return(
                        <>
                          <NavBar/>
                          <Hero/>
                          <Projects/>
                          <WorkStructure/>
                         { /*<CTA/> */}
                          <Profile/>
                          <Footer/>
                        </>
                )
}
export default Home