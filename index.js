const client = require('./helpers/conn')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require('cors')

const superUserRoutes = require('./routes/superUserRoutes')
const congregationsRoutes = require('./routes/congregationRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({origin: false, origin: 'https://relatorio-de-horas.herokuapp.com/superuser/dashboard/*', methods: 'GET,PUT,POST', credentials: true}))

app.use('/superUsers', superUserRoutes)
app.use('/congregation', congregationsRoutes)
app.use('/user', userRoutes)

app.listen((PORT), () => {
    console.log(`Server running at port: ${PORT}`);
});
