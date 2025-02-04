import { useRef, useEffect } from "react"
import "./comp-css/DepartmentLeads.css"

const leads = [
  { name: "John Doe", department: "Robotics", image: "/placeholder.svg?height=150&width=150" },
  { name: "Jane Smith", department: "IoT", image: "/placeholder.svg?height=150&width=150" },
  { name: "Mike Johnson", department: "PCB Design", image: "/placeholder.svg?height=150&width=150" },
  { name: "Emily Brown", department: "Embedded Systems", image: "/placeholder.svg?height=150&width=150" },
]

const DepartmentLeads = () => {
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
    <section ref={sectionRef} className="department-leads">
      <h2>Department Leads</h2>
      <div className="leads-grid">
        {leads.map((lead, index) => (
          <div key={index} className="lead-box">
            <img src={lead.image || "/placeholder.svg"} alt={lead.name} />
            <h3>{lead.name}</h3>
            <p>{lead.department}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default DepartmentLeads

