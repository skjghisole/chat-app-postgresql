import '@babel/polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import { Client } from 'pg'
import { MessageRoutes, UserRoutes } from './routes'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/messages', MessageRoutes)
app.use('/users', UserRoutes)

const port = process.env.PORT || 2020
app.listen(port, console.log(`Server started @ http://localhost:${port}`))