import './styles.css'

const app = document.querySelector<HTMLDivElement>('#app')
if (!app) throw new Error('App root not found')

const highlights = [
  {
    title: 'LAN Security Audit + Hardening (Lab)',
    outcome: 'Mapped topology, identified exposed services, published remediation tracker, and removed critical OpenClaw auth risks (2 critical → 0).',
    link: 'https://github.com/4OH4-Ltd/lab.security.audit'
  },
  {
    title: 'Bike Diary PR Triage + Risk Review',
    outcome: 'Reviewed open PR landscape, flagged oversized migration PR risk, and recommended safe split strategy for staged delivery.',
    link: 'https://github.com/4OH4-Ltd/bike.diary.legacy/pull/3'
  },
  {
    title: 'Support Site Recovery + Public Deployment',
    outcome: 'Restored repository visibility and re-enabled GitHub Pages deployment with a verified live endpoint.',
    link: 'https://github.com/oc-dev-snf/support-os'
  }
]

const timeline = [
  'Security-first engineering across infra, app gateways, and operational tooling',
  'GitHub-native workflow: repo hygiene, PR triage, release readiness, and rollback-aware planning',
  'Fast execution under constraints: LAN-only audits, non-destructive validation, and high-signal reporting'
]

app.innerHTML = `
  <main class="wrap">
    <section class="hero card">
      <p class="kicker">Presentation Demo</p>
      <h1>Recent Work & Experience</h1>
      <p class="lead">A compact showcase of recent engineering outcomes, delivery approach, and operating style.</p>
      <div class="chips">
        <span>Security Audits</span>
        <span>Incident Triage</span>
        <span>GitHub Delivery</span>
        <span>Operational Hardening</span>
      </div>
    </section>

    <section class="card">
      <h2>Recent Highlights</h2>
      <div class="grid" id="highlights"></div>
    </section>

    <section class="card">
      <h2>Experience Snapshot</h2>
      <ul class="timeline" id="timeline"></ul>
    </section>

    <section class="card">
      <h2>Delivery Principles</h2>
      <ul class="principles">
        <li><strong>High signal, low noise:</strong> concise status, explicit risks, clear decisions.</li>
        <li><strong>Safe-by-default execution:</strong> read-only first, controlled hardening second.</li>
        <li><strong>Ship with evidence:</strong> reproducible commands, documented outcomes, linked artifacts.</li>
      </ul>
    </section>

    <footer>
      Built for today’s presentation · Hosted on GitHub Pages
    </footer>
  </main>
`

const highlightsRoot = document.querySelector<HTMLDivElement>('#highlights')
if (!highlightsRoot) throw new Error('Highlights root not found')
for (const item of highlights) {
  const card = document.createElement('article')
  card.className = 'item'
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.outcome}</p>
    <a href="${item.link}" target="_blank" rel="noreferrer">View artifact →</a>
  `
  highlightsRoot.appendChild(card)
}

const timelineRoot = document.querySelector<HTMLUListElement>('#timeline')
if (!timelineRoot) throw new Error('Timeline root not found')
for (const line of timeline) {
  const li = document.createElement('li')
  li.textContent = line
  timelineRoot.appendChild(li)
}
