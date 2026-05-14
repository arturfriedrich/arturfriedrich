<script>
export default {
  name: 'Foot',
  props: ['initData'],
  data() {
    return {
      personalInfo: {
        firstName: 'Artúr',
        lastName: 'Friedrich',
      },
      socialLinks: [
        { label: 'Email', href: 'mailto:artur.friedrich.harka@gmail.com' },
        { label: 'GitHub', href: 'https://github.com/arturfriedrich' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/friedrichartur/' }
      ],
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
  <footer>
    <h2>Let's Talk</h2>
    <div class="footer-links">
      <a v-for="link in socialLinks" :key="link.label" :href="link.href" target="_blank">{{ link.label }}</a>
    </div>

    <div class="legal-links">
      <router-link to="/imprint">Imprint</router-link>
      <router-link to="/privacy-policy">Privacy Policy</router-link>
      <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>

    <p class="copyright">© {{ currentYear }} {{ personalInfo.firstName }} {{ personalInfo.lastName }}. Designed with form and function.</p>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  z-index: 3;
  padding: 5vh 10vw;
  background-color: var(--text-dark, #121212);
  color: var(--bg-cream, #F0E7D6);
  text-align: center;
}

h2 {
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: 3rem;
  display: inline-block;
  border-bottom: 8px solid var(--bauhaus-red, #EA2E00);
}

.footer-links {
  margin-top: 2rem;
}

.footer-links a {
  color: var(--bauhaus-blue, #9DBDB8);
  text-decoration: none;
  margin: 0 1rem;
}

.legal-links {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.legal-links a {
  color: var(--bauhaus-blue, #9DBDB8);
  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  margin: 0 0.5rem;
  transition: color 0.3s;
}

.legal-links a:hover,
.footer-links a:hover {
  color: var(--bauhaus-red, #EA2E00);
}

.copyright {
  margin-top: 3rem;
  font-size: 0.8rem;
  opacity: 0.7;
  margin-left: auto;
  margin-right: auto;
}
</style>