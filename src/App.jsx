import { useEffect, useMemo, useState } from 'react'
import heroBg from './assets/portfolio-site/Cat 6.jfif'
import my_prof_pics_bw from './assets/portfolio-site/my_prof_pics_bw.png'
import about_Page_Img from './assets/portfolio-site/praize.jpeg'
import serviceImg from './assets/portfolio-site/praize_4.jpeg'
import personF5 from './assets/portfolio-site/person/person-f-5.webp'
import personF12 from './assets/portfolio-site/person/person-f-12.webp'
import personM9 from './assets/portfolio-site/person/person-m-9.webp'
import portfolio1 from './assets/portfolio-site/portfolio/Nextflow Web App.png'
import portfolio2 from './assets/portfolio-site/portfolio/portfolio-2.webp'
import portfolio3 from './assets/portfolio-site/portfolio/Quiz App img.png'
import portfolio4 from './assets/portfolio-site/portfolio/portfolio-4.webp'
import portfolio5 from './assets/portfolio-site/portfolio/portfolio-5.webp'
import portfolio6 from './assets/portfolio-site/portfolio/portfolio-6.webp'
import portfolio7 from './assets/portfolio-site/portfolio/portfolio-7.webp'
import portfolio8 from './assets/portfolio-site/portfolio/portfolio-8.webp'
import portfolio9 from './assets/portfolio-site/portfolio/portfolio-9.webp'
import portfolio10 from './assets/portfolio-site/portfolio/portfolio-10.webp'
import portfolio11 from './assets/portfolio-site/portfolio/portfolio-11.webp'
import portfolio12 from './assets/portfolio-site/portfolio/portfolio-12.webp'

const roles = ['Web Developer', 'React Developer', 'Tailwind CSS Expert', 'WordPress/CMS Expert', 'Full Stack Developer', 'Web App Developer', 'Performance Optimizer']

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Resume', '#resume'],
  ['Services', '#services'],
  ['Portfolio', '#portfolio'],
  ['Contact', '#contact'],
]

const stats = [
  ['232', 'Issues Resolved'],
  ['521', 'Commits Shipped'],
  ['1463', 'Build Hours'],
  ['15', 'Tech Stacks'],
]

const details = [
  ['Birthday', '24 August 2000'],
  ['Website', 'praize.dev'],
  ['Phone', '+234 911 347 9030'],
  ['City', 'Lagos, Nigeria'],
  ['Age', '26'],
  ['Email', 'clementpraize02@gmail.com'],
  ['Freelance', 'Available'],
]

const skills = [
  ['HTML', 100],
  ['Tailwind CSS', 90],
  ['Bootstrap', 90],
  ['React', 75],
  ['JavaScript', 80],
  ['Node.js', 50],
  ['Express.js', 50],
  ['WordPress/CMS', 90],
  ['Git & GitHub', 85],
]

const interests = [
  'Frontend Development',
  'Backend APIs',
  'E-commerce Builds',
  'Web Applications',
  'Performance Optimization',
  'React + Vite',
  'Database Integration',
  'Deployment & Hosting',
]

const services = [
  ['Frontend Engineering', 'Component-driven React interfaces built with clean state, reusable patterns, Tailwind CSS, and responsive behavior.'],
  ['Backend APIs', 'Practical Node.js and Express endpoints for forms, dashboards, authentication flows, and product workflows.'],
  ['WordPress & CMS Builds', 'Custom WordPress and CMS implementations structured for maintainability, editor workflows, and future changes.'],
  ['E-commerce Development', 'Storefronts with clear product data, fast pages, checkout-ready structure, and integration-friendly code.'],
  ['Performance Optimization', 'Bundle review, asset cleanup, responsive fixes, Core Web Vitals improvements, and frontend debugging.'],
  ['Deployment & Maintenance', 'Hosting setup, environment configuration, bug fixes, release support, and iterative improvements after launch.'],
]

const resume = [
  {
    title: 'Summary',
    items: [
      {
        role: 'Nsikak Praize Clement',
        period: '',
        place: 'Web Developer',
        copy: 'Detail-focused web developer building responsive websites, React applications, WordPress projects, and practical backend features for real business needs.',
        bullets: ['Lagos, Nigeria', '+234 911 347 9030', 'clementpraize02@gmail.com'],
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        role: 'Full Stack Web Development',
        period: '2023 - Present',
        place: 'Project-based learning and client work',
        copy: 'Focused on React, JavaScript, Node.js, Express, WordPress, responsive development, and production deployment workflows.',
      },
      {
        role: 'Frontend Development Foundations',
        period: '2021 - 2023',
        place: 'Self-directed technical training',
        copy: 'Built a strong foundation in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, version control, and responsive web standards.',
      },
    ],
  },
  {
    title: 'Professional Experience',
    items: [
      {
        role: 'Web Developer',
        period: '2024 - Present',
        place: 'Freelance and personal projects',
        bullets: [
          'Build responsive websites and web applications with React, Tailwind CSS, JavaScript, and WordPress.',
          'Create reusable components, clean page structures, and mobile-friendly interfaces for client and portfolio projects.',
          'Connect frontend experiences to practical backend workflows using Node.js, Express, and form handling.',
          'Improve page speed, accessibility, hosting setup, and cross-device reliability before launch.',
        ],
      },
      {
        role: 'Frontend Developer',
        period: '2022 - 2024',
        place: 'Training projects and website builds',
        bullets: [
          'Converted static layouts into responsive HTML, CSS, Bootstrap, and Tailwind CSS pages.',
          'Built interactive JavaScript features including navigation, filtering, forms, and dynamic content sections.',
          'Practiced Git-based workflows for tracking changes and organizing project iterations.',
          'Maintained clear, readable code that is easier to update and hand off.',
        ],
      },
    ],
  },
]

const filters = ['All', 'Web App', 'Website', 'E-commerce', 'CMS']

const portfolio = [
  ['Task Manager App', 'Web App', portfolio1],
  ['Business Landing Page', 'Website', portfolio10],
  ['Quiz App', 'Web App', portfolio3, 'https://quiz-app-66ww.vercel.app/'],
  ['WordPress Blog', 'CMS', portfolio4],
  ['Analytics Dashboard', 'Web App', portfolio2],
  ['Service Website', 'Website', portfolio11],
  ['Checkout Flow', 'E-commerce', portfolio8],
  ['CMS Portfolio Site', 'CMS', portfolio5],
  ['Booking Platform', 'Web App', portfolio7],
  ['SaaS Website', 'Website', portfolio12],
  ['Product Catalog', 'E-commerce', portfolio9],
  ['Custom CMS Pages', 'CMS', portfolio6],
]

const testimonials = [
  ['Saul Goodman', 'CEO & Founder', personM9, 'Praize shipped a fast, responsive site with clean implementation details and a smoother customer flow.'],
  ['Sara Wilsson', 'Product Manager', personF5, 'He translated requirements into reusable React components and kept the codebase organized from start to finish.'],
  ['Jena Karlis', 'Store Owner', personF12, 'Our online store became faster, easier to maintain, and simpler to extend after the rebuild.'],
]

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {copy ? <p className="mt-4 text-base leading-7 text-zinc-300">{copy}</p> : null}
    </div>
  )
}

function App() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('All')
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length)
    }, 1800)

    return () => window.clearInterval(timer)
  }, [])

  const visiblePortfolio = useMemo(() => {
    if (filter === 'All') return portfolio
    return portfolio.filter((item) => item[1] === filter)
  }, [filter])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-xl font-bold text-white" onClick={() => setMenuOpen(false)}>
            Praize.dev
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-medium text-zinc-300 transition hover:text-emerald-300">
                {label}
              </a>
            ))}
          </nav>

          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded border border-white/15 text-white md:hidden"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="text-xl">{menuOpen ? 'x' : '='}</span>
          </button>
        </div>

        {menuOpen ? (
          <nav className="border-t border-white/10 bg-zinc-950 px-5 py-4 md:hidden">
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded border border-white/10 px-4 py-3 text-sm font-medium text-zinc-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden px-5 pt-24 sm:px-8">
          <img src={heroBg} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-zinc-950/70" />

          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-emerald-300">Portfolio</p>
              <h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">Nsikak Praize Clement</h1>
              <p className="mt-6 max-w-2xl text-2xl font-light text-zinc-100 sm:text-3xl">
                I'm a <span className="font-semibold text-emerald-300">{roles[roleIndex]}</span>
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                A focused web developer building responsive React apps, practical backend workflows, CMS projects, and production-ready websites.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#portfolio" className="rounded bg-emerald-400 px-5 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300">
                  View Work
                </a>
                <a href="#contact" className="rounded border border-white/20 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300 hover:text-emerald-200">
                  Contact Me
                </a>
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="w-full max-w-sm border border-white/10 bg-white/5 p-4 shadow-2xl shadow-emerald-950/30 backdrop-blur">
                <img src={my_prof_pics_bw} alt="Nsikak Praize Clement profile" className="aspect-[4/5] w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="About"
              title="Full Stack Web Developer"
              copy="I build clean, responsive web products with React, JavaScript, Node.js, WordPress, and deployment-ready workflows."
            />

            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <img src={about_Page_Img} alt="Nsikak Praize Clement" className="aspect-[4/5] w-full max-w-sm justify-self-center object-cover lg:max-w-md" />

              <div className="flex flex-col justify-center">
                <p className="text-lg leading-8 text-zinc-300">
                  I develop websites and web applications with attention to maintainable code, responsive behavior, API workflows,
                  performance, and reliable handoff. The work is practical, production-minded, and built to keep improving after launch.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {details.map(([label, value]) => (
                    <div key={label} className="border-l-2 border-emerald-400 bg-white/[0.03] px-4 py-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</p>
                      <p className="mt-1 font-medium text-zinc-100">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map(([number, label]) => (
                <div key={label} className="border border-white/10 bg-zinc-900 p-6 text-center">
                  <p className="text-4xl font-black text-emerald-300">{number}</p>
                  <p className="mt-2 text-sm text-zinc-400">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeading eyebrow="Skills" title="My Skills" />
                <div className="grid gap-5">
                  {skills.map(([skill, value]) => (
                    <div key={skill}>
                      <div className="mb-2 flex justify-between text-sm font-semibold">
                        <span>{skill}</span>
                        <span className="text-emerald-300">{value}%</span>
                      </div>
                      <div className="h-2 bg-zinc-800">
                        <div className="h-full bg-emerald-400" style={{ width: `${value}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeading eyebrow="Focus" title="Developer Focus Areas" />
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div key={interest} className="border border-white/10 bg-white/[0.03] px-4 py-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300">{String(index + 1).padStart(2, '0')}</p>
                      <p className="mt-2 font-semibold text-white">{interest}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="bg-zinc-900 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Resume" title="Experience & Education" copy="A developer-focused snapshot of the technologies, project work, and delivery experience behind the portfolio." />
            <div className="grid gap-8 lg:grid-cols-3">
              {resume.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-5 text-xl font-bold text-white">{group.title}</h3>
                  <div className="grid gap-5">
                    {group.items.map((item) => (
                      <article key={`${group.title}-${item.role}`} className="border-l-2 border-emerald-400 bg-zinc-950 p-5">
                        <h4 className="text-lg font-bold text-white">{item.role}</h4>
                        {item.period ? <p className="mt-2 inline-block bg-white/10 px-3 py-1 text-sm text-zinc-200">{item.period}</p> : null}
                        <p className="mt-3 text-sm italic text-zinc-400">{item.place}</p>
                        {item.copy ? <p className="mt-4 text-sm leading-6 text-zinc-300">{item.copy}</p> : null}
                        {item.bullets ? (
                          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-300">
                            {item.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Services" title="What I Build" copy="From frontend interfaces to backend workflows, each service is structured around shipping maintainable web products." />
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <img src={serviceImg} alt="Developer workspace" className="h-full min-h-96 w-full object-cover" />
              <div className="grid gap-4 sm:grid-cols-2">
                {services.map(([title, copy], index) => (
                  <article key={title} className="border border-white/10 bg-zinc-900 p-6 transition hover:-translate-y-1 hover:border-emerald-400/60">
                    <p className="text-sm font-black text-rose-300">{String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-zinc-400">{copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="bg-zinc-900 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Portfolio" title="Selected Builds" copy="A sample of web applications, CMS builds, storefronts, dashboards, and production website work." />
            <div className="mb-8 flex flex-wrap justify-center gap-2">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded px-4 py-2 text-sm font-bold transition ${
                    filter === item ? 'bg-emerald-400 text-zinc-950' : 'border border-white/10 text-zinc-300 hover:border-emerald-300 hover:text-white'
                  }`}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visiblePortfolio.map(([title, category, image, link]) => {
                const Card = link ? 'a' : 'article'

                return (
                <Card key={title} href={link} target={link ? '_blank' : undefined} rel={link ? 'noreferrer' : undefined} className="group block overflow-hidden bg-zinc-950">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-zinc-950/90 via-zinc-950/10 to-transparent p-5 opacity-100">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">{category}</p>
                        <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
                        <p className="mt-1 text-sm text-zinc-300">Built with responsive structure, maintainable components, and launch-ready details.</p>
                      </div>
                    </div>
                  </div>
                </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Testimonials" title="Developer Feedback" />
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map(([name, title, image, quote]) => (
                <article key={name} className="border border-white/10 bg-zinc-900 p-6">
                  <p className="text-sm leading-6 text-zinc-300">"{quote}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <img src={image} alt={name} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <h3 className="font-bold text-white">{name}</h3>
                      <p className="text-sm text-zinc-500">{title}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-zinc-900 px-5 py-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Contact" title="Let's Build Something" copy="Have a web app, website, CMS, or backend workflow in mind? Send the project details and I will follow up." />
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="grid gap-4">
                {[
                  ['Location', 'Lagos, Nigeria'],
                  ['Call Me', '+234 911 347 9030'],
                  ['Email', 'clementpraize02@gmail.com'],
                  ['Profiles', 'GitHub / LinkedIn / Portfolio'],
                ].map(([label, value]) => (
                  <div key={label} className="border border-white/10 bg-zinc-950 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{label}</p>
                    <p className="mt-2 text-zinc-300">{value}</p>
                  </div>
                ))}
              </div>

              <form
                className="grid gap-4 border border-white/10 bg-zinc-950 p-5 sm:p-6"
                onSubmit={(event) => {
                  event.preventDefault()
                  setSent(true)
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300" placeholder="Your Name" required />
                  <input className="border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300" placeholder="Your Email" type="email" required />
                </div>
                <input className="border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300" placeholder="Subject" required />
                <textarea className="min-h-40 border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition placeholder:text-zinc-500 focus:border-emerald-300" placeholder="Message" required />
                <button className="justify-self-start rounded bg-emerald-400 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-emerald-300" type="submit">
                  Send Message
                </button>
                {sent ? <p className="text-sm font-medium text-emerald-300">Thanks. Your message has been captured in the React form state.</p> : null}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-zinc-500 sm:px-8">
        <p className="font-bold text-white">Praize.dev</p>
        <p className="mt-2">Developer portfolio built with React, Tailwind CSS, and production-ready frontend patterns.</p>
      </footer>
    </div>
  )
}

export default App
