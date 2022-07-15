const ex = require('express')

const app = ex()

app.set('views', `${__dirname}/dist`)
app.use(ex.static(`${__dirname}/dist`))

app.use(ex.json())
app.use(ex.urlencoded({extended: false}))

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(8005, () => {
    console.log('Server is running on port 8005')
})