import { useState, useEffect, useRef } from "react"
import "./comp-css/AboutUs.css"

const images = [
  { src: "/lab-image-1.jpg", alt: "Electronics Lab" },
  { src: "/workshop-image.jpg", alt: "Workshop Session" },
  { src: "/project-showcase.jpg", alt: "Project Showcase" },
]

const AboutUs = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current?.classList.add("visible")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section ref={sectionRef} className="about-us" id="about">
      <h2>About Us</h2>
      <div className="section-content">
        <div className="image-carousel">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              className={index === currentImage ? "active" : ""}
            />
          ))}
          <button className="carousel-button prev" onClick={prevImage}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={nextImage}>
            &gt;
          </button>
          <div className="carousel-indicators">
            {images.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentImage ? "active" : ""}`}
                onClick={() => setCurrentImage(index)}
              ></span>
            ))}
          </div>
        </div>
        <p>
          Senseibles is a vibrant electronics club dedicated to exploring and innovating in the world of electronics.
          Our members are passionate about creating, learning, and pushing the boundaries of technology. Join us in our
          journey to shape the future of electronics!
        </p>
      </div>
    </section>
  )
}

export default AboutUs

