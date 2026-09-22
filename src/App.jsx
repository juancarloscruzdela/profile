import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Mail, MapPin, Menu, X } from 'lucide-react'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

const projects = [
  { name: 'RAKwireless', type: 'Corporate website', year: '2019', url: 'https://rakwireless.com/', image: asset('rak-logo.png'), tags: ['Laravel', 'Web'] },
  { name: 'RAKwireless Store', type: 'Commerce platform', year: '2019', url: 'https://store.rakwireless.com/', image: asset('shopify-logo.webp'), tags: ['Shopify', 'Commerce'] },
  { name: 'RAK Docs Center', type: 'Developer documentation', year: '2020', url: 'https://docs.rakwireless.com/', image: asset('docusaurus.svg'), tags: ['Docusaurus', 'Docs'] },
  { name: 'RAKwireless News', type: 'Editorial publishing platform', year: '2026', url: 'https://news.rakwireless.com/', image: asset('cms-logo.png'), tags: ['Ghost CMS', 'Content'] },
  { name: 'RAK Downloads', type: 'Product download portal', year: '2026', url: 'https://downloads.rakwireless.com/', image: asset('rak-logo.png'), tags: ['React', 'Frontend'] },
  { name: 'RAK Developer Portal', type: 'Developer platform & API portal', year: '2026', url: 'https://developer.rakwireless.com/', image: asset('rak-logo.png'), tags: ['React', 'Node.js'] },
  { name: 'RAKwireless Forum', type: 'Community support platform', year: '2026', url: 'https://forum.rakwireless.com/', image: asset('rak-logo.png'), tags: ['Discourse', 'Community'] },
  { name: 'Nature Packaged', type: 'Commerce platform', year: '2024', url: 'https://naturepackaged.com/', image: asset('nature-packaged.avif'), tags: ['Shopify', 'Commerce'] },
  { name: 'JitteryGit', type: 'Commerce platform', year: '2025', url: 'https://jitterygit.com/', image: asset('jitterygit.webp'), tags: ['Shopify', 'Commerce'] },
  { name: 'AwakenedKids', type: 'Commerce platform', year: '2025', url: 'https://awakenedkids.com/', image: asset('awakenedkids.svg'), tags: ['Shopify', 'Commerce'] },
  { name: 'Atalaya', type: 'Corporate website', year: '2025', url: 'https://atalaya.ph/', image: asset('atalaya.svg'), tags: ['Web', 'Brand'] },
  { name: 'Genix Digital', type: 'Corporate website', year: '2026', url: 'https://genixdigital.com/', image: asset('genix.png'), tags: ['Web', 'Brand'] },
  { name: 'NVMed Center', type: 'Healthcare website', year: '2026', url: 'https://nvmedcenter.com/', image: asset('nvmed.png'), tags: ['Web', 'UX'] },
  { name: 'Sedgemore Travel', type: 'Travel & hospitality website', year: '2026', url: 'https://www.sedgemoretravel.com/', image: asset('stonehill.png'), tags: ['WordPress', 'Travel'] },
]

const skills = ['React', 'Laravel', 'Shopify', 'WordPress', 'Vue', 'Node.js', 'Tailwind CSS', 'AWS', 'MySQL', 'Git', 'Docker', 'GitHub Actions', 'CI/CD', 'Cloudflare', 'cPanel', 'DNS']

function App() {
  const [open, setOpen] = useState(false)
  const nav = ['About', 'Work', 'Expertise', 'Contact']
  return <div className="min-h-screen overflow-x-hidden bg-[#f5f5f0] text-[#121212]">
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-[#f5f5f0]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">JCD<span className="text-blue">.</span></a>
        <nav className="hidden items-center gap-8 md:flex">{nav.map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-black/65 transition hover:text-black">{item}</a>)}</nav>
        <a href="mailto:juan.carlos.cruzdela@gmail.com" className="hidden rounded-full bg-[#121212] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue md:block">Let’s talk <ArrowUpRight className="ml-1 inline size-3.5" /></a>
        <button onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="border-t border-black/5 bg-[#f5f5f0] px-5 py-5 md:hidden">{nav.map(item => <a onClick={() => setOpen(false)} key={item} href={`#${item.toLowerCase()}`} className="block py-3 text-lg font-medium">{item}</a>)}<a href="mailto:juan.carlos.cruzdela@gmail.com" className="mt-3 block text-blue">Let’s work together →</a></nav>}
    </header>

    <main id="top">
      <section className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-5 pb-16 pt-32 sm:px-8 lg:pb-24">
        <div className="relative z-10"><p className="mb-7 flex items-center gap-2 text-sm font-semibold uppercase tracking-[.16em] text-black/50"><span className="size-2 rounded-full bg-blue" /> Available for select projects</p>
          <h1 className="font-display max-w-4xl text-[clamp(3.6rem,9vw,8.5rem)] font-medium leading-[.88] tracking-[-.075em]">Full stack<br />engineer crafting<br />digital experiences.</h1>
          <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#work" className="rounded-full bg-[#121212] px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue">Explore my work <ArrowDownRight className="ml-2 inline size-4" /></a><a href="#contact" className="text-sm font-medium underline underline-offset-4">Get in touch</a></div>
        </div>
      </section>

      <section id="about" className="border-y border-black/10 bg-[#121212] text-[#f5f5f0]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[.7fr_1.3fr] md:py-28"><p className="section-label text-blue">01 / About</p><div><h2 className="font-display max-w-3xl text-4xl leading-tight tracking-[-.045em] sm:text-5xl">I turn ambitious ideas into dependable, considered web products.</h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">I’m Juan Carlos, a Philippines-based full stack engineer with a foundation in Information Technology and a constant curiosity for what the web can do. I partner with teams to build polished, practical experiences from commerce and content platforms to custom applications—including internal tools that teams rely on every day.</p><div className="mt-10 flex flex-wrap gap-x-12 gap-y-5 text-sm"><div><p className="text-3xl font-display text-blue">2019</p><p className="mt-1 text-white/50">IT degree completed</p></div><div><p className="text-3xl font-display text-blue">10+</p><p className="mt-1 text-white/50">Public active projects launched</p></div><div><p className="text-3xl font-display text-blue">10+</p><p className="mt-1 text-white/50">Active internal apps built</p></div></div></div></div></section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"><div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="section-label">02 / Selected work</p><h2 className="mt-5 font-display text-5xl tracking-[-.055em] sm:text-6xl">Recent projects</h2></div><p className="max-w-xs text-sm leading-relaxed text-black/55">A selection of public-facing products and platforms I’ve helped bring to life.</p></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map((project, i) => <a key={project.name} href={project.url} target="_blank" rel="noreferrer" className={`group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl ${i === 0 ? 'sm:col-span-2' : ''}`}><div className="flex items-start justify-between"><span className="text-xs font-semibold uppercase tracking-[.16em] text-black/40">{project.year} · {project.type}</span><span className="grid size-9 place-items-center rounded-full border border-black/10 transition group-hover:bg-orange group-hover:text-white"><ArrowUpRight className="size-4" /></span></div><div className="flex items-end justify-between gap-4"><div><h3 className="font-display text-3xl tracking-[-.04em]">{project.name}</h3><div className="mt-3 flex gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-black/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">{tag}</span>)}</div></div><img src={project.image} alt="" className="max-h-16 max-w-28 object-contain object-right transition duration-300 group-hover:scale-110" /></div></a>)}</div></section>

      <section id="expertise" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 md:pb-28"><div className="rounded-[2rem] bg-[#dedbd1] p-7 sm:p-12"><div className="grid gap-10 md:grid-cols-[.7fr_1.3fr]"><div><p className="section-label">03 / Expertise</p><h2 className="mt-5 font-display text-5xl tracking-[-.055em]">More than<br />the interface.</h2></div><div><p className="max-w-xl text-lg leading-relaxed text-black/60">I build the product and help make sure it runs reliably after launch from deployment pipelines and cloud services to hosting, DNS, security tools, and day-to-day server administration.</p><div className="mt-8 flex flex-wrap gap-2">{skills.map((skill, i) => <span key={skill} className={`rounded-full px-4 py-2 text-sm font-medium ${i < 3 ? 'bg-orange text-white' : 'bg-white'}`}>{skill}</span>)}</div><div className="mt-9 grid gap-3 sm:grid-cols-3"><div className="rounded-xl bg-white/70 p-4"><p className="font-semibold">Deploy & automate</p><p className="mt-1 text-sm text-black/55">GitHub Actions, Docker, CI/CD</p></div><div className="rounded-xl bg-white/70 p-4"><p className="font-semibold">Operate & host</p><p className="mt-1 text-sm text-black/55">AWS, shared hosting, cPanel</p></div><div className="rounded-xl bg-white/70 p-4"><p className="font-semibold">Secure & connect</p><p className="mt-1 text-sm text-black/55">DNS, Turnstile, hCaptcha</p></div></div></div></div></div></section>

      <section id="contact" className="bg-orange text-white"><div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"><p className="section-label text-white/65">04 / Contact</p><h2 className="mt-6 max-w-4xl font-display text-[clamp(3.5rem,8vw,7rem)] leading-[.9] tracking-[-.07em]">Have a project<br />in mind?</h2><a href="mailto:juan.carlos.cruzdela@gmail.com" className="mt-10 inline-block border-b-2 border-white pb-2 font-display text-2xl sm:text-4xl">juan.carlos.cruzdela@gmail.com <ArrowUpRight className="inline size-6" /></a><div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/30 pt-6 text-sm sm:flex-row sm:items-center"><div className="flex items-center gap-2"><MapPin className="size-4" /> Philippines</div><div className="flex gap-5"><a className="hover:underline" href="https://github.com/juancarloscruzdela" target="_blank" rel="noreferrer">GitHub</a><a className="hover:underline" href="https://www.linkedin.com/in/juancarloscruzdela/" target="_blank" rel="noreferrer">LinkedIn</a><a className="flex items-center gap-2 hover:underline" href="mailto:juan.carlos.cruzdela@gmail.com"><Mail className="size-4" /> Email</a></div></div></div></section>
    </main>
    <footer className="bg-[#121212] px-5 py-6 text-center text-xs text-white/45">© {new Date().getFullYear()} Juan Carlos Dela Cruz. Built with React & Tailwind CSS.</footer>
  </div>
}

export default App
