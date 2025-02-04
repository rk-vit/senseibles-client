import { useRef, useEffect } from "react"
import "./comp-css/Events.css"

const events = [
  {
    name: "Annual Robotics Competition",
    date: "July 15, 2023",
    description: "Showcase your robot-building skills and compete for prizes!",
  },
  {
    name: "IoT Workshop",
    date: "August 5, 2023",
    description: "Learn how to create your own IoT devices in this hands-on workshop.",
  },
  {
    name: "PCB Design Hackathon",
    date: "September 10, 2023",
    description: "Design innovative PCBs and win exciting prizes!",
  },
]

const Events = () => {
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
    <section ref={sectionRef} className="events" id="events">
      <h2>Ongoing Events</h2>
      <div className="event-grid">
        {events.map((event, index) => (
          <div key={index} className="event-box">
            <h3>{event.name}</h3>
            <p className="event-date">{event.date}</p>
            <div className="event-details">
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Events

