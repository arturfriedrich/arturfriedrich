<script>
export default {
  name: 'TermsAndConditions',
  data() {
    return {
      hasScrolled: false,
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
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <div class="logo">TERMS.</div>
      <div class="nav-links open">
        <router-link to="/">Back to Home</router-link>
      </div>
    </nav>

    <section class="policy-header">
      <span class="subtitle">Legal</span>
      <h1>Terms &<br>Conditions</h1>
      <p class="date">Last Updated: May {{ currentYear }}</p>
    </section>

    <section class="policy-content">
      <div class="policy-block">
        <h2>01. General Use</h2>
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. This website is provided as a personal portfolio to showcase my professional background and projects.</p>
      </div>

      <div class="policy-block">
        <h2>02. Intellectual Property</h2>
        <p>The design, code, and content of this website are my personal property unless otherwise stated. Projects and case studies mentioned may belong to their respective owners or clients. You may not reproduce, distribute, or modify my work without explicit permission.</p>
      </div>

      <div class="policy-block">
        <h2>03. Disclaimer</h2>
        <p>The information provided on this website is for general informational purposes only. While I strive to keep the information up to date and correct, I make no representations or warranties of any kind about the completeness, accuracy, or reliability of the website's contents.</p>
      </div>
    </section>

    <footer>
      <router-link to="/" class="footer-link">← Return to Home</router-link>
      <p class="copyright">© {{ currentYear }} Artúr Friedrich. Designed with form and function.</p>
    </footer>

    <transition name="go-top">
      <button
          v-show="hasScrolled"
          class="go-top-btn"
          @click="scrollToTop"
          aria-label="Scroll to top"
      >
        <i class="fa-solid fa-chevron-up" aria-hidden="true"></i>
      </button>
    </transition>
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
  display: flex;
  flex-direction: column;
}

h1, h2 {
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
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  display: inline-block;
  border-bottom: 6px solid var(--bauhaus-red);
}

p {
  font-size: 1.1rem;
  font-weight: 300;
  max-width: 600px;
  margin-bottom: 1.5rem;
}

section {
  padding: 5vh 10vw;
  position: relative;
  z-index: 1;
}

nav {
  position: relative;
  width: 100%;
  padding: 2rem 10vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 20;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  letter-spacing: 2px;
}

.nav-links a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  transition: color 0.3s;
  border-bottom: 2px solid transparent;
}

.nav-links a:hover {
  color: var(--bauhaus-red);
  border-color: var(--bauhaus-red);
}

.policy-header {
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeInDown 0.8s ease-out forwards;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--bauhaus-blue);
  text-transform: uppercase;
  letter-spacing: 4px;
}

.date {
  font-weight: 700;
  color: var(--bauhaus-red);
}

.policy-content {
  flex: 1;
  max-width: 800px;
  animation: fadeInUp 0.8s ease-out forwards;
}

.policy-block {
  margin-bottom: 4rem;
  padding-left: 2rem;
  border-left: 4px solid var(--text-dark);
  position: relative;
}

.policy-block::before {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  background-color: var(--bauhaus-yellow);
  left: -10px;
  top: 0;
}

.policy-block:nth-child(2)::before { background-color: var(--bauhaus-blue); border-radius: 50%; }
.policy-block:nth-child(3)::before { background-color: var(--bauhaus-red); }

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

footer {
  position: relative;
  z-index: 3;
  padding: 5vh 10vw;
  background-color: var(--text-dark);
  color: var(--bg-cream);
  text-align: center;
  margin-top: auto;
}

.footer-link {
  color: var(--bg-cream);
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.3s;
  display: inline-block;
  margin-bottom: 2rem;
}

.footer-link:hover {
  color: var(--bauhaus-blue);
}

.copyright {
  font-size: 0.8rem;
  opacity: 0.7;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
}

/* Go Top Button */
.go-top-btn {
  position: fixed;
  bottom: 2.5rem;
  right: 2.5rem;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bauhaus-red);
  color: var(--bg-cream);
  box-shadow: 0 10px 30px rgba(0,0,0,0.18);
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.18s ease, opacity 0.2s ease;
}

.go-top-btn:hover { transform: translateY(-4px); }
.go-top-enter-active, .go-top-leave-active { transition: opacity 0.2s ease, transform 0.2s ease; }
.go-top-enter-from, .go-top-leave-to { opacity: 0; transform: translateY(12px) scale(0.9); }
.go-top-enter-to, .go-top-leave-from { opacity: 1; transform: translateY(0) scale(1); }
</style>