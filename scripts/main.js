import { Popper } from './Popper.js'

const REPO_URL = 'https://github.com/aleksei-stukalov/'
console.log('Hello World!')
console.log(`Please feel free to look around my github repos.\n${REPO_URL}`)

// Popper element
const popper = document.body.querySelector('[data-popper] .hero__title')
// Function Popper will take a heading element as an input, then separate
// each character in it's own span element, and do some magic with it.
const popperElements = Array.from(popper.children)
popperElements.forEach((heading) => Popper(heading)) // adds effect to headings

const toggleTheme = () => {
  const current = document.body.dataset.colorTheme
  const newTheme = current === 'light' ? 'dark' : 'light'
  document.body.dataset.colorTheme = newTheme
  localStorage.setItem('theme', newTheme)
}
window.toggleTheme = toggleTheme
