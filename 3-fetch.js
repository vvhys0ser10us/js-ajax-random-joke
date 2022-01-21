const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random'

button.addEventListener('click', () => {
  fetch(url)
    .then((res) => res.json())
    .then((text) => displayData(text))
    .catch((err) => console.log(err))
})

function displayData({ value: joke }) {
  img.classList.add('shake-img')
  content.textContent = joke
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, Math.random() * 1000)
}
