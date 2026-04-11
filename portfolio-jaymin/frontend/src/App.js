import React, { useState } from 'react';

const API_BASE = process.env.REACT_APP_API_URL || '';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const getApiUrl = (endpoint) => {
    const base = API_BASE || (window.location.hostname === 'localhost' ? 'http://localhost:5000' : window.location.origin);
    return `${base}${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');
    
    try {
      const response = await fetch(getApiUrl('/api/contacts'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} submitStatus={submitStatus} />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">Jaymin Dattani</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 hero-content">
            <h1>Jaymin Dattani</h1>
            <h2>Computer Engineering | Web Technologies</h2>
            <p className="lead">
              B.Tech Computer Engineering Student at Marwadi University | Full-Stack Developer in Training
            </p>
            <div className="social-links">
              <a href="mailto:work.jdattani@gmail.com" title="Email"><i className="bi bi-envelope-fill"></i></a>
              <a href="https://linkedin.com/in/jaymin-dattani-ba6695294" target="_blank" rel="noreferrer" title="LinkedIn"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" title="GitHub"><i className="bi bi-github"></i></a>
              <a href="tel:+919104358811" title="Phone"><i className="bi bi-telephone-fill"></i></a>
            </div>
            <div className="mt-4">
              <a href="#contact" className="btn btn-light btn-lg me-3">Get in Touch</a>
              <a href="#projects" className="btn btn-outline-light btn-lg">View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2 className="text-center section-title">About Me</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <p className="text-center lead mb-4">
              Currently pursuing a <strong>Bachelor of Technology in Computer Engineering</strong> at Marwadi University, 
              after completing a <strong>Diploma in Computer Engineering (CPI: 9.84/10)</strong> from Marwadi University.
            </p>
            <p className="text-center">
              My academic journey has been centered around <strong>web development, database systems, and backend fundamentals</strong>, 
              complemented by certifications in Advanced Database Systems and API Fundamentals. 
              I have worked on multiple academic and personal projects, building responsive and user-focused web applications 
              using <strong>JavaScript, PHP, MySQL, and REST APIs</strong>.
            </p>
            <p className="text-center">
              I completed a <strong>Web Development Internship at 9Brainz (June 2024)</strong>, gaining practical experience 
              applying development concepts in real-world scenarios. I have experience deploying projects on platforms like 
              <strong> Vercel and Firebase</strong>, focusing on writing clean, maintainable code while exploring backend architecture 
              and cloud deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = {
    frontend: ['HTML5', 'CSS3', 'Bootstrap', 'Responsive Design', 'JavaScript (ES6+)', 'React Fundamentals', 'UI/UX Implementation'],
    backend: ['PHP', 'MySQL', 'Supabase', 'Database Design', 'API Integration', 'Database Normalization', 'Server-side Logic'],
    tools: ['Git & GitHub', 'Vercel', 'VS Code', 'Postman', 'Figma', 'Google Colab', 'phpMyAdmin', 'Firebase'],
    soft: ['Problem-solving', 'Technical Documentation', 'Cross-functional Collaboration', 'Self-directed Learning', 'Project Management']
  };

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <h2 className="text-center section-title">Skills</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-card">
              <h4><i className="bi bi-laptop me-2"></i>Frontend & UI</h4>
              {skills.frontend.map(skill => <span key={skill} className="badge bg-primary">{skill}</span>)}
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-card">
              <h4><i className="bi bi-server me-2"></i>Backend & Database</h4>
              {skills.backend.map(skill => <span key={skill} className="badge bg-success">{skill}</span>)}
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-card">
              <h4><i className="bi bi-tools me-2"></i>Tools & Platforms</h4>
              {skills.tools.map(skill => <span key={skill} className="badge bg-warning text-dark">{skill}</span>)}
            </div>
          </div>
          <div className="col-md-6 col-lg-3 mb-4">
            <div className="skill-card">
              <h4><i className="bi bi-people me-2"></i>Soft Skills</h4>
              {skills.soft.map(skill => <span key={skill} className="badge bg-info">{skill}</span>)}
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <span className="badge bg-secondary me-2">Languages: Hindi, English, Gujarati</span>
          <span className="badge bg-secondary">Interest: Backend Development</span>
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-center section-title">Education</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="education-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4>B.Tech in Computer Engineering</h4>
                  <p className="text-muted mb-1">Marwadi University, Rajkot, India</p>
                </div>
                <span className="badge bg-primary">Jul '25 - Present</span>
              </div>
            </div>
            <div className="education-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4>Diploma in Computer Engineering</h4>
                  <p className="text-muted mb-1">Marwadi University, Rajkot, India</p>
                  <span className="badge bg-success">GPA: 9.84</span>
                </div>
                <span className="badge bg-primary">Aug '22 - May '25</span>
              </div>
            </div>
            <div className="education-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap">
                <div>
                  <h4>Secondary & Higher Secondary Education</h4>
                  <p className="text-muted mb-1">Modi School (G.S.H.E.B), Gujarat, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-padding bg-light">
      <div className="container">
        <h2 className="text-center section-title">Experience</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="experience-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div>
                  <h4>Web Development Intern (On-site)</h4>
                  <p className="text-muted mb-0">9Brainz - Rajkot, India</p>
                </div>
                <span className="date">May '24 - Jun '24</span>
              </div>
              <ul>
                <li>Built full-stack web apps using HTML5, CSS3, JavaScript, and PHP</li>
                <li>Implemented responsive layouts across multiple pages, improving mobile compatibility</li>
                <li>Optimized MySQL schemas and queries, reducing average query time by ~40% through normalization</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div>
                  <h4>Campus Ambassador (Remote)</h4>
                  <p className="text-muted mb-0">Entrepreneurship Development Cell | IT Delhi - New Delhi, India</p>
                </div>
                <span className="date">Dec '25 - Feb '26</span>
              </div>
              <ul>
                <li>Promoting entrepreneurship and innovation-driven initiatives</li>
                <li>Actively involved in outreach and promotion of EDC programs and startup opportunities</li>
              </ul>
            </div>

            <div className="experience-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div>
                  <h4>Contributor (Remote)</h4>
                  <p className="text-muted mb-0">Elite Coders Winter of Code (ECWoC) 2026 - India</p>
                </div>
                <span className="date">Jan '26 - Present</span>
              </div>
              <ul>
                <li>Working on real-world software collaboration using Git and GitHub</li>
                <li>Applying JavaScript, Python, Java, PHP, SQL, Bootstrap, and React</li>
                <li>Following contribution guidelines and delivering clean, maintainable solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: 'Dog Health & Wellness Tracking Platform',
      problem: 'Dog owners needed a single place to track health records, vaccinations, and real-time activity',
      approach: 'Architected and deployed a full-stack application with real-time tracking, interactive dashboards, and JSON schema',
      outcome: 'Improved prototype user engagement by 65% with dynamic charts and alerts; zero data loss',
      link: '#'
    },
    {
      title: 'E-Commerce Platform - Voyageur Bags',
      problem: 'Small online retailer required a full e-commerce system to manage catalog and orders',
      approach: 'Built with product catalog, checkout, MySQL database (normalized tables), transaction logging, secure auth',
      outcome: 'Prevented SQL injection with prepared statements, complete order management system',
      link: '#'
    },
    {
      title: 'Tourism Package Booking Website',
      problem: 'Travelers needed an easy way to discover, filter, and book tourism packages',
      approach: 'Developed multi-page platform with efficient search and filter functionality',
      outcome: 'Responsive UI with intuitive booking flow',
      link: '#'
    },
    {
      title: 'Search4Career - Career Guidance System',
      problem: 'Students need informed academic and career decisions with intelligent recommendations',
      approach: 'Full-stack patent-published intelligent career guidance system with comprehensive UI',
      outcome: 'Patent published, Letter of Appreciation from Marwadi University',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="text-center section-title">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="project-card">
                <div className="card-body">
                  <h5>{project.title}</h5>
                  <p className="text-muted"><strong>Problem:</strong> {project.problem}</p>
                  <p className="text-muted"><strong>Approach:</strong> {project.approach}</p>
                  <p className="text-success"><strong>Outcome:</strong> {project.outcome}</p>
                  <a href={project.link} className="btn btn-primary btn-sm">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { title: 'Postman API Fundamentals', org: 'Postman', date: 'Nov \'24' },
    { title: 'Advanced Diploma in Database Systems', org: 'Alison', date: 'Aug \'24' },
    { title: 'Oracle APEX Cloud Developer Certified Professional', org: 'Oracle', date: 'Oct \'25' }
  ];

  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="text-center section-title">Certifications</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {certs.map((cert, index) => (
              <div className="cert-card" key={index}>
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div>
                    <h5 className="mb-1">{cert.title}</h5>
                    <span className="text-muted">{cert.org}</span>
                  </div>
                  <span className="badge bg-primary">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-center section-title">Achievements & Publications</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="experience-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div>
                  <h4>Letter of Appreciation - Search4Career Patent Project</h4>
                  <p className="text-muted mb-0">Marwadi University, Department of Computer Engineering</p>
                </div>
                <span className="date">May '25</span>
              </div>
              <p>Honored with an official Letter of Appreciation from Marwadi University for innovation and contribution to the patent-published Search4Career career guidance platform.</p>
            </div>

            <div className="experience-card">
              <div className="d-flex justify-content-between align-items-start flex-wrap mb-3">
                <div>
                  <h4>Search4Career - Career Guidance System Patent</h4>
                  <p className="text-muted mb-0">Government of India, Intellectual Property India</p>
                </div>
                <span className="date">May '25</span>
              </div>
              <p>Patent-published intelligent career recommendation system built as a Diploma final-year project. Recognized with an official Letter of Appreciation from Marwadi University for innovative contribution to academic and career decision-making.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact({ formData, handleChange, handleSubmit, submitStatus }) {
  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <h2 className="text-center section-title">Get In Touch</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input 
                      type="text" 
                      name="name" 
                      className="form-control" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input 
                      type="email" 
                      name="email" 
                      className="form-control" 
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <input 
                    type="text" 
                    name="subject" 
                    className="form-control" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="mb-3">
                  <textarea 
                    name="message" 
                    className="form-control" 
                    rows="5" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary" disabled={submitStatus === 'sending'}>
                    {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3 text-center">
                    <i className="bi bi-check-circle me-2"></i>Message sent successfully!
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3 text-center">
                    <i className="bi bi-x-circle me-2"></i>Failed to send message. Please try again.
                  </div>
                )}
              </form>
            </div>
            <div className="text-center mt-4">
              <p className="text-muted">
                <i className="bi bi-envelope me-2"></i>work.jdattani@gmail.com
              </p>
              <p className="text-muted">
                <i className="bi bi-telephone me-2"></i>+91 9104358811
              </p>
              <p className="text-muted">
                <i className="bi bi-geo-alt me-2"></i>Rajkot, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">Designed & Built by Jaymin Dattani</p>
        <div className="social-links">
          <a href="mailto:work.jdattani@gmail.com"><i className="bi bi-envelope-fill"></i></a>
          <a href="https://linkedin.com/in/jaymin-dattani-ba6695294" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a>
        </div>
        <p className="text-muted mt-3 small">Open to Remote Opportunities</p>
      </div>
    </footer>
  );
}

export default App;
