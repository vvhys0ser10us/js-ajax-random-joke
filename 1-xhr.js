const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random'

button.addEventListener('click', () => {
  getData(url)
})

function getData(url) {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url)
  xhr.send()
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return
    if (xhr.status === 200) {
      img.classList.add('shake-img')
      const { value: joke } = JSON.parse(xhr.responseText)
      content.textContent = joke
      setTimeout(() => {
        img.classList.remove('shake-img')
      }, Math.random() * 1000)
    }
  }
}
