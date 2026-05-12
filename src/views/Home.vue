<script>
export default {
  name: 'Portfolio',
  props: ['initData'],
  data() {
    return {
      hasScrolled: false,
      personalInfo: {
        firstName: 'Artúr',
        lastName: 'Friedrich',
        role: 'Software Engineer',
        heroText: 'I build clean, scalable, and highly interactive web applications. Marrying the logic of solid engineering with the principles of minimalist design.',
        aboutParagraphs: [
          "Hi, I’m Artúr, a software engineer based in Budapest. I mostly work on backend systems and interactive frontend experiences. I like keeping things simple and making sure the code does what it needs to, without extra noise.",
          "When I’m not debugging or digging into database queries, I’m usually exploring new web tools or thinking about better ways to build clean, useful interfaces."
        ],
        footerText: "Available for freelance opportunities and open-source collaborations."
      },
      navLinks: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' }
      ],
      socialLinks: [
        { label: 'Email', href: 'mailto:artur.friedrich.harka@gmail.com' },
        { label: 'GitHub', href: 'https://github.com/arturfriedrich' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/friedrichartur/' }
      ],
      education: [
        {
          period: '2025 — 2027',
          degree: 'Master\'s degree in Business Informatics',
          institution: 'Széchenyi István University, Győr',
          description: 'I chose this program to bridge the gap between computer science\n' +
              'and business, driven by a strong interest in finance and fintech. The\n' +
              'coursework has given me a great understanding of how technical\n' +
              'solutions can solve real-world business problems. I am really enjoying\n' +
              'learning how to combine my engineering background with business\n' +
              'strategies to build smarter, more useful products.',
          type: 'blue'
        },
        {
          period: '2020 — 2025',
          degree: 'Bachelor\'s degree in Computer Engineering',
          institution: 'Széchenyi István University, Győr',
          description: 'During my studies, I gained a broad foundation in computer science\n' +
              'by collaborating on diverse student projects. While my primary focus\n' +
              'was web development, I also gained hands-on experience with\n' +
              'machine learning, system design, and embedded systems. My\n' +
              'strong interest in low-level systems, robotics, and Linux helped me\n' +
              'develop a versatile technical mindset and a deep understanding of\n' +
              'how software works from the ground up.',
          type: 'yellow'
        }
      ],
      experience: [
        {
          period: '2022 — Present',
          role: 'Full Stack Developer',
          company: 'EcoSim Kft.',
          description: 'I started as an intern and quickly progressed to Fullstack Developer,\n' +
              'taking sole ownership of our main app, EcoSim EDU. By cleaning up\n' +
              'the codebase, I reduced system bugs from weekly to just a couple per\n' +
              'semester. Working in a two-person team, I also helped build a unified\n' +
              'account system and admin dashboard from scratch to automate\n' +
              'manual work. Operating in a fast-paced environment taught me to\n' +
              'write reliable code under pressure, lead client trainings, and develop\n' +
              'key products including EcoSim EDU, Account, Competitions, Scorify,\n' +
              'and various custom storygames.',
          type: 'red'
        },
      ],
      projects: [
        {
          title: 'Zume.hu',
          description: 'Zume.hu is an easy to use, free and fast Resume builder application. Built with a serverless architecture for lightning-fast performance and seamless scalability.',
          tags: 'VUE / UI DESIGN',
          shadowColor: 'blue',
          link: 'https://zume.hu'
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.hasScrolled = window.scrollY > 0;
    }
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<template>
  <div class="portfolio-container">
    <nav>
      <div class="logo">{{ personalInfo.firstName.toUpperCase() }}.</div>
      <div class="nav-links">
        <a v-for="link in navLinks" :key="link.label" :href="link.href">{{ link.label }}</a>
      </div>
    </nav>

    <section class="hero">
      <div class="shape shape-circle" :class="{ 'scrolled': hasScrolled }"></div>
      <div class="shape shape-square" :class="{ 'scrolled': hasScrolled }"></div>
      <div class="shape shape-arc" :class="{ 'scrolled': hasScrolled }"></div>

      <span class="subtitle">{{ personalInfo.role }}</span>
      <h1>{{ personalInfo.firstName }}<br>{{ personalInfo.lastName }}</h1>
      <p>{{ personalInfo.heroText }}</p>
    </section>

    <section id="about" class="grid-2 flex-center">
      <div>
        <h2>About Me</h2>
        <p v-for="(paragraph, index) in personalInfo.aboutParagraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
      <div class="image-wrapper">
        <img src="@/assets/images/1.jpg" alt="Artúr Friedrich" class="about-image">
      </div>
    </section>

    <section id="experience" class="grid-2">
      <div>
        <h2>Experience</h2>
        <div
            v-for="job in experience"
            :key="job.company"
            :class="['resume-item', `${job.type}-dot`]"
        >
          <span class="date">{{ job.period }}</span>
          <h3>{{ job.role }}</h3>
          <p><strong>{{ job.company }}</strong></p>
          <p>{{ job.description }}</p>
        </div>
      </div>

      <div>
        <h2>Education</h2>
        <div
            v-for="edu in education"
            :key="edu.degree"
            :class="['resume-item', `${edu.type}-dot`]"
        >
          <span class="date">{{ edu.period }}</span>
          <h3>{{ edu.degree }}</h3>
          <p><strong>{{ edu.institution }}</strong></p>
          <p>{{ edu.description }}</p>
        </div>
      </div>
    </section>

    <section id="projects">
      <h2>Selected Works</h2>
      <div class="projects-grid">
        <div
            v-for="project in projects"
            :key="project.title"
            :class="['project-card', `${project.shadowColor}-shadow`]"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <div class="project-footer">
            <span class="project-tags">{{ project.tags }}</span>
            <a v-if="project.link" :href="project.link" target="_blank" class="project-btn">
              Visit Site <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <h2>Let's Talk</h2>
      <p>{{ personalInfo.footerText }}</p>
      <div class="footer-links">
        <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank">{{ link.label }}</a>
      </div>
      <p class="copyright">© {{ currentYear }} {{ personalInfo.firstName }} {{ personalInfo.lastName }}. Designed with form and function.</p>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-container {
  --bg-cream: #F0E7D6;
  --bauhaus-red: #EA2E00;
  --bauhaus-blue: #9DBDB8;
  --bauhaus-yellow: #ECA400;
  --text-dark: #121212;

  background-color: var(--bg-cream);

  background-image: radial-gradient(var(--text-dark) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 0 0;
  box-shadow: inset 0 0 0 100vw rgba(240, 231, 214, 0.85);

  color: var(--text-dark);
  font-family: 'Space Grotesk', sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  min-height: 100vh;
}

h1, h2, h3 {
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
}

h1 {
  font-size: clamp(3rem, 8vw, 6rem);
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 3rem;
  display: inline-block;
  border-bottom: 8px solid var(--bauhaus-red);
}

p {
  font-size: 1.1rem;
  font-weight: 300;
  max-width: 600px;
  margin-bottom: 1.5rem;
}

section {
  padding: 15vh 10vw;
  position: relative;
}

nav {
  padding: 2rem 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.nav-links a {
  color: var(--text-dark);
  text-decoration: none;
  margin-left: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--bauhaus-red);
}

.hero {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--bauhaus-blue);
  text-transform: uppercase;
  letter-spacing: 4px;
}

.shape {
  position: fixed;
  z-index: 0;
  opacity: 1;
  transition: opacity 1s ease;
}

.shape.scrolled {
  opacity: 0.3;
}

.hero > *:not(.shape) {
  position: relative;
  z-index: 1;
}

.shape-circle {
  width: 300px;
  height: 300px;
  background-color: var(--bauhaus-red);
  border-radius: 50%;
  top: 10%;
  right: 15%;
}

.shape-square {
  width: 250px;
  height: 250px;
  background-color: var(--bauhaus-yellow);
  bottom: auto;    /* Changed from bottom: -5% */
  top: 60%;        /* Add explicit top position */
  right: 25%;
}

.shape-arc {
  width: 200px;
  height: 100px;
  background-color: var(--bauhaus-blue);
  border-radius: 100px 100px 0 0;
  bottom: auto;    /* Changed from bottom: 20% */
  top: 50%;        /* Add explicit top position */
  left: 5%;
  transform: rotate(-45deg);
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.flex-center {
  align-items: center;
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .shape {
    opacity: 0.3;
  }
}

.resume-item {
  margin-bottom: 3rem;
  border-left: 4px solid var(--text-dark);
  padding-left: 2rem;
  position: relative;
}

.resume-item::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--bauhaus-blue);
  border-radius: 50%;
  left: -10px;
  top: 0;
}

.resume-item.red-dot::before { background-color: var(--bauhaus-red); }
.resume-item.yellow-dot::before { background-color: var(--bauhaus-yellow); border-radius: 0; }
.resume-item.blue-dot::before { background-color: var(--bauhaus-blue); }

.date {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--bauhaus-red);
  margin-bottom: 0.5rem;
  display: block;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.project-card {
  background-color: #fff;
  padding: 3rem 2rem;
  border: 2px solid var(--text-dark);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  z-index: 1;
}

.project-card::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 10px;
  width: 100%;
  height: 100%;
  background-color: var(--text-dark);
  z-index: -1;
  transition: top 0.3s, left 0.3s;
}

.project-card.red-shadow::after { background-color: var(--bauhaus-red); }
.project-card.yellow-shadow::after { background-color: var(--bauhaus-yellow); }
.project-card.blue-shadow::after { background-color: var(--bauhaus-blue); }

.project-card:hover {
  transform: translate(-5px, -5px);
}

.project-card:hover::after {
  top: 15px;
  left: 15px;
}

.project-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-tags {
  font-weight: 700;
  font-size: 0.8rem;
  color: var(--bauhaus-red);
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
}

.project-btn {
  background-color: var(--text-dark);
  color: var(--bg-cream);
  padding: 0.5rem 1.25rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  transition: background-color 0.3s, transform 0.2s;
  border: 2px solid var(--text-dark);
}

.project-btn:hover {
  background-color: var(--bauhaus-red);
  border-color: var(--bauhaus-red);
  transform: translateX(4px);
}

footer {
  position: relative;  /* Add this */
  z-index: 3;
  padding: 5vh 10vw;
  background-color: var(--text-dark);
  color: var(--bg-cream);
  text-align: center;
}

.footer-links {
  margin-top: 2rem;
}

footer a {
  color: var(--bauhaus-blue);
  text-decoration: none;
  margin: 0 1rem;
}

.copyright {
  margin-top: 3rem;
  font-size: 0.8rem;
  opacity: 0.7;
  margin-left: auto;
  margin-right: auto;
}

.image-wrapper {
  display: flex;
  justify-content: center;
}

.about-image {
  width: 100%;
  height: auto;
  max-width: 400px;
  object-fit: cover;
  border: 12px solid var(--bauhaus-red);
  border-radius: 50%;
  aspect-ratio: 1;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  display: block;
}

@media (max-width: 768px) {
  .about-image {
    margin-top: 2rem;
    max-width: 300px;
  }
}
</style>