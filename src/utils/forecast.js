const request = require('request')

const forecast = (latitude, longitude , query, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a83c4fda69e2ee20497766da4c54814c&query=' + query//latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(' It is currently ' + body.current.temperature + ' degress out.' , undefined)
        }
    })
}

module.exports = forecast