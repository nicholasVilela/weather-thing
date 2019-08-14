const API_KEY = 'ab3311611e68c0b21da61c1e8642758f'
const searchField = document.querySelector('#search-field')
const searchBtn = document.querySelector('#search-btn')
const output = document.querySelector('#output')

const getWeatherApiUrl = () => {
  const query = searchField.value
  const mainPart = 'http://api.openweathermap.org/data/2.5/weather?'
  const searchQuery = `q=${query}&units=imperial&`
  const apiKeyPart = `appid=${API_KEY}`
  const url = `${mainPart}${searchQuery}${apiKeyPart}`
    
  getData(url)
}

const getData = (url) => {
  axios.get(url)
    .then(res => {
      console.log(res)
      const temp = res.data.main.temp
      output.textContent = `${res.data.name} ${temp} ${res.data.weather[0].main}`
    })
}