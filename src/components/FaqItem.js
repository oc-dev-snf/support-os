import { CONTRACT_URL } from '../data'

export function createFaqItem({ q, a }) {
  const details = document.createElement('details')

  const summary = document.createElement('summary')
  summary.innerHTML = `${q} <span class="chev">▶</span>`

  const answer = document.createElement('div')
  answer.className = 'answer'
  answer.textContent = a

  const helpful = document.createElement('div')
  helpful.className = 'helpful'

  const label = document.createElement('span')
  label.textContent = 'Did this answer help?'

  const yesBtn = document.createElement('button')
  yesBtn.className = 'btn ok'
  yesBtn.textContent = 'Yes'

  const noBtn = document.createElement('button')
  noBtn.className = 'btn no'
  noBtn.textContent = 'No'

  const followup = document.createElement('div')
  followup.className = 'followup'
  followup.setAttribute('aria-live', 'polite')

  yesBtn.addEventListener('click', () => {
    followup.className = 'followup show ok'
    followup.textContent = 'Great — glad this helped.'
  })

  noBtn.addEventListener('click', () => {
    followup.className = 'followup show no'
    followup.innerHTML = `No problem. Please use the <a class="contract" href="${CONTRACT_URL}" target="_blank" rel="noopener">Scottish Widows contact us page</a> for further help.`
  })

  helpful.append(label, yesBtn, noBtn, followup)
  answer.append(helpful)
  details.append(summary, answer)

  return details
}
