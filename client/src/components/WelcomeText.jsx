import { useEffect, useState } from "react"
import "./comp-css/WelcomeText.css"

const WelcomeText = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section id="home" className="landing-page">
      <div className="landing-content">
        <h1 className={`welcome-text ${visible ? "visible" : ""}`}>
          Welcome to <span className="highlight">Senseibles</span>
        </h1>
        <p className={`subtitle ${visible ? "visible" : ""}`}>Exploring the World of Electronics</p>
        <a href="#about" className={`cta-button ${visible ? "visible" : ""}`}>
          Discover More
        </a>
      </div>
    </section>
  )
}

export default WelcomeText

