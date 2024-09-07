const REPO_URL = 'https://github.com/aleksei-stukalov/'
console.log('Hello World!')
console.log(`Please feel free to look around my github repos.\n${REPO_URL}`)

window.toggleTheme = () => {
  const current = document.body.dataset.colorTheme
  const newTheme = current === 'light' ? 'dark' : 'light'
  document.body.dataset.colorTheme = newTheme
  localStorage.setItem('theme', newTheme)
}
