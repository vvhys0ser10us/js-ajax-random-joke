const button = document.querySelector('.btn')
const content = document.querySelector('.content')
const img = document.querySelector('.container img')
const url = 'https://api.chucknorris.io/jokes/random'

button.addEventListener('click', () => {
  getData(url)
    .then((res) => displayData(res))
    .catch((err) => console.log(err))
})

function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send()
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== 4) return
      if (xhr.status === 200) {
        resolve(xhr.responseText)
      } else {
        reject({
          status: xhr.status,
          text: xhr.statusText,
        })
      }
    }
  })
}

function displayData(data) {
  img.classList.add('shake-img')
  const { value: joke } = JSON.parse(data)
  content.textContent = joke
  setTimeout(() => {
    img.classList.remove('shake-img')
  }, Math.random() * 1000)
}
