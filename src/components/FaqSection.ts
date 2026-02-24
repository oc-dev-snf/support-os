import { createFaqItem } from './FaqItem'
import type { FaqSection } from '../data'

export function createFaqSection(section: FaqSection): HTMLElement {
  const sectionEl = document.createElement('section')
  sectionEl.className = 'section'

  const heading = document.createElement('h2')
  heading.textContent = section.title
  sectionEl.appendChild(heading)

  section.items.forEach((item) => sectionEl.appendChild(createFaqItem(item)))

  return sectionEl
}
