const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random'

button.addEventListener('click', async () => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    displayData(data)
  } catch (error) {
    console.log(error)
  }
})

function displayData({ value: joke }) {
  img.classList.add('shake-img')
  content.textContent = joke
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, Math.random() * 1000)
}
