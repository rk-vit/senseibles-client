import { useEffect } from "react"
import AboutUs from "../components/AboutUs"
import Departments from "../components/Departments"
import DepartmentLeads from "../components/DepartmentLeads"
import Events from "../components/Events"
import BlogSlider from "../components/BlogSlider"
import WelcomeText from "../components/WelcomeText"
import "./page-css/LandingPage.css"
import Header from "../components/header"

const LandingPage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section")

    const revealSection = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop < window.innerHeight - 100) {
          section.classList.add("visible")
        }
      })
    }

    window.addEventListener("scroll", revealSection)
    revealSection() // Initial check

    return () => window.removeEventListener("scroll", revealSection)
  }, [])

  return (
    <div className="app">
      <Header/>
      <main>
        <WelcomeText />
        <AboutUs />
        <Departments />
        <DepartmentLeads />
        <Events />
        <BlogSlider />
      </main>
    </div>
  )
}

export default LandingPage
