import uuid from 'uuid/v1'
import models from '../models';
import server from '../'
const { Messages, Users } = models

const controller = {
	create: async (req, res) => {
		const { content, senderId } = req.body
		try {
			const newMessage = await Messages.create({ content, senderId: senderId, id: uuid() })
			req.socket.emit('newMsg', newMessage)
			res.status(201).send(newMessage)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		const query = req.body
		try {
			const messages = await Messages.findAll({
				where: {...query},
				include: [{
					model: Users
				}]
			})
			res.status(200).send(messages)
		} catch (err) {
			res.status(400).send(err)
		}
	}
}

export default controller
