(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const s=document.querySelector("#app");if(!s)throw new Error("App root not found");const d=[{title:"LAN Security Audit + Hardening (Lab)",outcome:"Mapped topology, identified exposed services, published remediation tracker, and removed critical OpenClaw auth risks (2 critical → 0).",link:"https://github.com/4OH4-Ltd/lab.security.audit"},{title:"Bike Diary PR Triage + Risk Review",outcome:"Reviewed open PR landscape, flagged oversized migration PR risk, and recommended safe split strategy for staged delivery.",link:"https://github.com/4OH4-Ltd/bike.diary.legacy/pull/3"},{title:"Support Site Recovery + Public Deployment",outcome:"Restored repository visibility and re-enabled GitHub Pages deployment with a verified live endpoint.",link:"https://github.com/oc-dev-snf/support-os"}],p=["Security-first engineering across infra, app gateways, and operational tooling","GitHub-native workflow: repo hygiene, PR triage, release readiness, and rollback-aware planning","Fast execution under constraints: LAN-only audits, non-destructive validation, and high-signal reporting"];s.innerHTML=`
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
`;const a=document.querySelector("#highlights");if(!a)throw new Error("Highlights root not found");for(const o of d){const i=document.createElement("article");i.className="item",i.innerHTML=`
    <h3>${o.title}</h3>
    <p>${o.outcome}</p>
    <a href="${o.link}" target="_blank" rel="noreferrer">View artifact →</a>
  `,a.appendChild(i)}const c=document.querySelector("#timeline");if(!c)throw new Error("Timeline root not found");for(const o of p){const i=document.createElement("li");i.textContent=o,c.appendChild(i)}
