import { createFaqItem } from './FaqItem'

export function createFaqSection(section) {
  const sectionEl = document.createElement('section')
  sectionEl.className = 'section'

  const heading = document.createElement('h2')
  heading.textContent = section.title
  sectionEl.appendChild(heading)

  section.items.forEach((item) => sectionEl.appendChild(createFaqItem(item)))

  return sectionEl
}
