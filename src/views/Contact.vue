<script setup>
import { ref, reactive, computed } from 'vue';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwiKdASS9GBwMSs2bO_tiApf13bR0CW6XNM4qD0aoPRGSDV7fRPOvVHs2QHjgAtI_bM/exec';

const currentYear = computed(() => new Date().getFullYear());

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const isLoading = ref(false);
const isSuccess = ref(false);
const errorMessage = ref('');

const submitForm = async () => {
  isLoading.value = true;
  errorMessage.value = '';

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      // 'text/plain' bypasses Google Apps Script CORS preflight issues
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(form)
    });

    const result = await response.json();

    if (result.status === 'success') {
      isSuccess.value = true;
    } else {
      throw new Error('Failed to send message.');
    }
  } catch (error) {
    errorMessage.value = 'Connection error. Please try again later.';
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.message = '';
  isSuccess.value = false;
};
</script>

<template>
  <div class="portfolio-container contact-page">
    <nav>
      <div class="logo">CONTACT.</div>
      <div class="nav-links open">
        <router-link to="/">Back to Home</router-link>
      </div>
    </nav>

    <section class="contact-header contact-content">
      <div class="shapes-container">
        <!-- Floating Bauhaus shapes -->
        <div class="shape shape-circle"></div>
        <div class="shape shape-square"></div>
        <div class="shape shape-arc"></div>
      </div>

      <div class="content-wrapper">
        <!-- Text Section -->
        <div class="text-content">
          <span class="subtitle">Get in touch</span>
          <h1>Let's<br>Talk.</h1>
          <p class="description">Interested in working together or just want to say hi? Fill out the form and I'll get back to you as soon as possible.</p>
        </div>

        <!-- Form Section -->
        <div class="form-container">
          <form @submit.prevent="submitForm" v-if="!isSuccess" class="bauhaus-form">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required placeholder="John Doe" />
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" v-model="form.email" required placeholder="hello@example.com" />
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" v-model="form.message" required rows="4" placeholder="How can we collaborate?"></textarea>
            </div>

            <button type="submit" class="project-btn submit-btn" :disabled="isLoading">
              {{ isLoading ? 'Transmitting...' : 'Send Message →' }}
            </button>

            <p v-if="errorMessage" class="error-msg">{{ errorMessage }}</p>
          </form>

          <!-- Success State -->
          <div v-else class="success-state">
            <div class="success-icon">
              <div class="icon-circle"></div>
              <div class="icon-check"></div>
            </div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you shortly.</p>
            <button @click="resetForm" class="project-btn submit-btn">
              Send another <span>→</span>
            </button>
          </div>
        </div>
      </div>
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

.contact-page {
  justify-content: space-between;
}

.content-wrapper {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 600px;
    align-items: start;
  }
}

.description {
  font-size: 1.1rem;
  font-weight: 300;
  max-width: 400px;
  margin-top: 1.5rem;
}

h1 {
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1.1;
  margin: 0;
  font-size: clamp(4rem, 10vw, 8rem);
  letter-spacing: -2px;
  margin-bottom: 1rem;
}

section {
  padding: 5vh 10vw;
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.subtitle {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--bauhaus-red);
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 0.5rem;
  display: block;
}

/* --- Form Styles --- */
.form-container {
  background: var(--bg-cream);
  padding: 2rem;
  border: 4px solid var(--text-dark);
  box-shadow: 12px 12px 0 var(--bauhaus-blue);
  animation: fadeInDown 0.8s ease-out forwards;
}

.form-group {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

input, textarea {
  background: transparent;
  border: 2px solid var(--text-dark);
  padding: 1rem;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  color: var(--text-dark);
  transition: border-color 0.3s, box-shadow 0.3s;
  border-radius: 0;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--bauhaus-red);
  box-shadow: 4px 4px 0 var(--bauhaus-yellow);
}

input::placeholder, textarea::placeholder {
  color: rgba(18, 18, 18, 0.4);
}

.submit-btn {
  width: 100%;
  font-size: 1.2rem;
  padding: 1rem;
  cursor: pointer;
  margin-top: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
  transform: none !important;
}

.project-btn {
  background-color: var(--text-dark);
  color: var(--bg-cream);
  text-decoration: none;
  font-weight: 700;
  text-transform: uppercase;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.2s;
  border: 2px solid var(--text-dark);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.project-btn:hover:not(:disabled) {
  background-color: var(--bauhaus-red);
  border-color: var(--bauhaus-red);
  transform: translate(-4px, -4px);
  box-shadow: 8px 8px 0 var(--text-dark);
}

.error-msg {
  color: var(--bauhaus-red);
  font-weight: 700;
  margin-top: 1rem;
  text-transform: uppercase;
  font-size: 0.9rem;
}

.success-state {
  text-align: center;
  padding: 2rem 0;
}

.success-state h3 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--bauhaus-blue);
}

.success-state p {
  margin-bottom: 2rem;
  font-weight: 700;
}

/* --- Shapes Background --- */
.shapes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  pointer-events: none;
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

/* --- Success State & Animations --- */
.success-state {
  text-align: center;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.success-icon {
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 2rem;
}

.icon-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: var(--bauhaus-yellow);
  box-shadow: -4px 4px 0 var(--text-dark);
  border: 3px solid var(--text-dark);
  animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

.icon-check {
  position: absolute;
  top: 38%;
  left: 30%;
  width: 32px;
  height: 16px;
  border-bottom: 5px solid var(--text-dark);
  border-left: 5px solid var(--text-dark);
  transform: rotate(-45deg) scale(0);
  opacity: 0;
  animation: checkReveal 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s forwards;
}

.success-state h3 {
  font-size: 2.2rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: var(--bauhaus-blue);
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.4s ease-out 0.4s forwards;
}

.success-state p {
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 1.1rem;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.4s ease-out 0.5s forwards;
}

.success-state .submit-btn {
  opacity: 0;
  transform: translateY(20px);
  animation: slideUpFade 0.4s ease-out 0.6s forwards;
}

@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

@keyframes checkReveal {
  0% { transform: rotate(-45deg) scale(0); opacity: 0; }
  100% { transform: rotate(-45deg) scale(1); opacity: 1; }
}

@keyframes slideUpFade {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>