const API_KEY = 'ab3311611e68c0b21da61c1e8642758f'
const searchField = document.querySelector('#search-field')
const searchBtn = document.querySelector('#search-btn')
const output = document.querySelector('#output')

const getApiUrl = () => {
  const query = searchField.value
  const mainPart = 'http://api.openweathermap.org/data/2.5/weather?'
  const searchQuery = `q=${query}&`
  const apiKeyPart = `appid=${API_KEY}`
  const url = `${mainPart}${searchQuery}${apiKeyPart}`  
  getData(url)
}

const getData = (url) => {
  axios.get(url)
    .then(res => {
      const kelvin = res.data.main.temp
      const fahrenheited = (((kelvin - 273.15) * 9) / 5) + 32
      output.textContent = `${res.data.name} ${fahrenheited}`
    })
}
