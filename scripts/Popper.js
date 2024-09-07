export const Popper = (heading) => {
  // Lets store the content of the heading in an array of characters. And then
  // clear the heading element so we can add our code to it.
  const content = heading.textContent.split('')
  heading.textContent = ''

  // Now we can create a span element for each character and add it to the
  // heading element. Each span element will have a mouseenter and mouseleave
  // event listener to handle the animation. We need the function that handles
  // the mouseleave event to be outside of the forEach loop, so we can use it
  // later to set all characters to idle state by default.
  const setAllToIdle = () => {
    // Very simple - we just want to set all characters to idle state.
    const characters = Array.from(heading.children)
    characters.forEach(char => char.dataset.state = 'idle')
  }
  // Creating span elements for each character and adding them to the heading.
  content.forEach((char, index) => {
    const handleEnter = (index) => {
      // Referencing the characters around the current character since we want
      // to animate 5 characters at a time.
      const current = heading.children[index]
      const closeLeft = heading.children[index - 1]
      const closeRight = heading.children[index + 1]
      const farLeft = heading.children[index - 2]
      const farRight = heading.children[index + 2]
      // Setting up the dataset that is used in CSS for the animation.
      // Further conditional checks are used to prevent errors when the
      // characters are at the start or end of the heading.
      current.dataset.state = 'current'
      if (closeLeft) closeLeft.dataset.state = 'close'
      if (closeRight) closeRight.dataset.state = 'close'
      if (farLeft) farLeft.dataset.state = 'far'
      if (farRight) farRight.dataset.state = 'far'
    }
    // OK, lets create our characters, insert listeners and add them to the
    // heading.
    const span = document.createElement('span')
    span.textContent = char === ' ' ? '\u00A0' : char // Handling html space
    span.addEventListener('mouseenter', () => handleEnter(index))
    span.addEventListener('mouseleave', () => setAllToIdle())

    heading.appendChild(span)
  })

  setAllToIdle()
}