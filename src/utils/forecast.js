const request = require('request')

const accessKey = 'a83c4fda69e2ee20497766da4c54814c'

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key='+ accessKey +'&query=' +  + latitude + ',' + longitude//query

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degress out and feels like ' + body.current.feelslike)
        }
    })
}

module.exports = forecast