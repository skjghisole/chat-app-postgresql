import '@babel/polyfill'
import express from 'express'
import bodyParser from 'body-parser'
import { Server } from 'http'

import io from 'socket.io'

import { Client } from 'pg'
import { MessageRoutes, UserRoutes } from './routes'

// creation of ws server

const app = express()
const wss = io(Server(app))

wss.on('connection', function(socket) {
	console.log(socket)
	// socket.emit('Say this', { msg: 'something else' })
})

wss.emit('connection', { msg: 'Hello' })
// wss.on('Say this', socket => {
// 	console.log(`Someone said: ${socket.msg}`)
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/messages', MessageRoutes)
app.use('/users', UserRoutes)

const port = process.env.PORT || 2020
app.listen(port, console.log(`Server started @ http://localhost:${port}`))