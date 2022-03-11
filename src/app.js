const express = require('express')

const app = express()

app.get('', (req, res) => { // req = request, res = response
    res.send('Hello express!')
})

app.listen(3000) //3000 default port