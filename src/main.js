import './styles.css'
import { faqSections } from './data'
import { createFaqSection } from './components/FaqSection'

const app = document.querySelector('#app')

app.innerHTML = `
  <header class="topbar">
    <div class="inner">
      <div class="brand">
        <span class="brand-badge">SW</span>
        <span>Scottish Widows — Support OS</span>
      </div>
    </div>
  </header>

  <main class="wrap">
    <span class="poc">PoC</span>
    <h1>Frequently Asked Questions</h1>
    <p class="sub">Accordion-style FAQ covering Insurance, Protection and Investments. If an answer doesn’t help, users are directed to the Scottish Widows contact page.</p>
    <div id="sections"></div>
    <footer>PoC content only. For policy-specific wording, please refer to official contract documentation.</footer>
  </main>
`

const sectionsRoot = document.querySelector('#sections')
faqSections.forEach((section) => sectionsRoot.appendChild(createFaqSection(section)))
