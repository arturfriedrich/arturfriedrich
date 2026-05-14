<script>
export default {
  name: 'NotFound',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<template>
  <div class="portfolio-container error-page">
    <nav>
      <div class="logo">ERROR 404.</div>
      <div class="nav-links open">
        <router-link to="/">Back to Home</router-link>
      </div>
    </nav>

    <section class="policy-header error-content">
      <div class="shapes-container">
        <!-- Floating Bauhaus shapes for the 404 page -->
        <div class="shape shape-circle"></div>
        <div class="shape shape-square"></div>
        <div class="shape shape-arc"></div>
      </div>

      <span class="subtitle">Page Not Found</span>
      <h1>Are you<br>lost?</h1>
      <p class="error-msg">The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.</p>

      <router-link to="/" class="project-btn home-btn">
        Return Home <span>→</span>
      </router-link>
    </section>

    <footer>
      <p class="copyright">© {{ currentYear }} Artúr Friedrich. Designed with form and function.</p>
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
  display: flex;
  flex-direction: column;
}

.error-page {
  justify-content: space-between;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  font-size: clamp(4rem, 10vw, 8rem);
  letter-spacing: -2px;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

p {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 500px;
  margin-bottom: 3rem;
  position: relative;
  z-index: 2;
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

.error-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeInDown 0.8s ease-out forwards;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bauhaus-red);
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.home-btn {
  display: inline-flex;
  width: fit-content;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  font-size: 1rem;
  padding: 0.8rem 2rem;
}

.project-btn {
  background-color: var(--text-dark);
  color: var(--bg-cream);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s, transform 0.2s;
  border: 2px solid var(--text-dark);
}

.project-btn:hover {
  background-color: var(--bauhaus-red);
  border-color: var(--bauhaus-red);
  transform: translateX(4px);
}

/* Shapes Background */
.shapes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.shape {
  position: absolute;
  opacity: 0.8;
}

.shape-circle {
  width: 250px;
  height: 250px;
  background-color: var(--bauhaus-red);
  border-radius: 50%;
  bottom: 10%;
  right: 15%;
  animation: float-slow 12s ease-in-out infinite;
}

.shape-square {
  width: 150px;
  height: 150px;
  background-color: var(--bauhaus-yellow);
  top: 15%;
  right: 35%;
  animation: float-medium 14s ease-in-out infinite;
}

.shape-arc {
  width: 180px;
  height: 90px;
  background-color: var(--bauhaus-blue);
  border-radius: 100px 100px 0 0;
  top: 40%;
  left: 45%;
  transform: rotate(30deg);
  animation: float-arc 16s ease-in-out infinite;
}

@keyframes float-slow {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-10px, 15px); }
}

@keyframes float-medium {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(15px, -10px) rotate(10deg); }
}

@keyframes float-arc {
  0%, 100% { transform: rotate(30deg) translate(0, 0); }
  50% { transform: rotate(30deg) translate(-15px, -15px); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

footer {
  position: relative;
  z-index: 3;
  padding: 3vh 10vw;
  background-color: var(--text-dark);
  color: var(--bg-cream);
  text-align: center;
  margin-top: auto;
}

.copyright {
  font-size: 0.8rem;
  opacity: 0.7;
  margin: 0 auto;
}
</style>