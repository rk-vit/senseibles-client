import Header from "../components/header"
import AboutUs from "../components/AboutUs"
import Departments from "../components/Departments"
import DepartmentLeads from "../components/DepartmentLeads"
import Events from "../components/Events"
import BlogSlider from "../components/BlogSlider"
import "./page-css/LandingPage.css"
import WelcomeText from "../components/WelcomeText"
const LandingPage = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <WelcomeText/>
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

