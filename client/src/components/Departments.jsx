import { useRef, useEffect } from "react"
import "./comp-css/Departments.css"

const departments = [
  { name: "Robotics", description: "Building and programming robots for various applications." },
  { name: "IoT", description: "Exploring the Internet of Things and connected devices." },
  { name: "PCB Design", description: "Creating custom printed circuit boards for electronic projects." },
  { name: "Embedded Systems", description: "Developing specialized computer systems for specific tasks." },
]

const Departments = () => {
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

  return (
    <section ref={sectionRef} className="departments" id="departments">
      <h2>Our Departments</h2>
      <div className="department-grid">
        {departments.map((dept, index) => (
          <div key={index} className="department-box">
            <h3>{dept.name}</h3>
            <div className="department-details">
              <p>{dept.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Departments

