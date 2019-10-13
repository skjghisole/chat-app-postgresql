import '@babel/polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import { Client } from 'pg'
import routes from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = process.env.PORT || 2020

routes(app)


app.get('/', async (req, res, next) => {
	// const result = await client.query('select * from "USERS"')
	// res.send(result.rows)
	
})

app.post('/users', async (req, res) => {
	// await client.query('insert into "USERS" values ($1, $2, $3)', ["skjghisole", 3, "myPass"])
	// res.send("Inserted!")
})

app.listen(port, console.log(`Server started @ http://localhost:${port}`))