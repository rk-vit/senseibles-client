import { useState, useEffect, useRef } from "react"
import "./comp-css/BlogSlider.css"

const blogs = [
  { title: "The Future of Robotics", content: "Exploring the latest trends and innovations in robotics..." },
  { title: "IoT Security Challenges", content: "Addressing the security concerns in the growing IoT landscape..." },
  { title: "PCB Design Best Practices", content: "Tips and tricks for creating efficient and reliable PCBs..." },
  {
    title: "Embedded Systems in Everyday Life",
    content: "Discovering the hidden embedded systems in our daily routines...",
  },
]

const BlogSlider = () => {
  const [currentBlog, setCurrentBlog] = useState(0)
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

  const nextBlog = () => {
    setCurrentBlog((prev) => (prev + 1) % blogs.length)
  }

  const prevBlog = () => {
    setCurrentBlog((prev) => (prev - 1 + blogs.length) % blogs.length)
  }

  return (
    <section ref={sectionRef} className="blog-slider" id="blog">
      <h2>Latest Blogs</h2>
      <div className="section-content">
        <div className="blog-container">
          {blogs.map((blog, index) => (
            <div key={index} className={`blog-slide ${index === currentBlog ? "active" : ""}`}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
          <button className="carousel-button prev" onClick={prevBlog}>
            &lt;
          </button>
          <button className="carousel-button next" onClick={nextBlog}>
            &gt;
          </button>
        </div>
        <div className="blog-indicators">
          {blogs.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentBlog ? "active" : ""}`}
              onClick={() => setCurrentBlog(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSlider

