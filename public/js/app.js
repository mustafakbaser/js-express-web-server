console.log('Client side javascript file is loaded!')

fetch('https://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

//Search Form
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

//Message paragraphs in index.hbs
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
        e.preventDefault() //Prevent default behaviour

        const location = search.value
        fetch('/weather?address=' + location).then((response) => {
            response.json().then((data) => {
                if(data.error){
                    messageOne.textContent = data.error
                    messageTwo.textContent = location.toLocaleUpperCase() + ' cannot be found!'
                }else if(location === ''){
                    messageOne.textContent = 'Location cannot be null.'
                    messageTwo.textContent = ' '
                } 
                else{
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                    console.log(data.location)
                    console.log(data.forecast)
                }
            })
        })
    })