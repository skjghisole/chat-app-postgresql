import uuid from 'uuid/v1'
import models from '../models';
import server from '../'
const { Messages, Users } = models

const controller = {
	create: async (req, res) => {
		const { content, senderId, channelId } = req.body
		let msg
		try {
			if (channelId === 'world') (msg = { content, senderId, id: uuid(), channelId: process.env.WORLD_CHAT_ID })
			else (msg = { content, senderId, id: uuid(), channelId })
			const newMessage = await Messages.create(msg)
			req.socket.emit('newMsg', newMessage)
			res.status(200).send(newMessage)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		let { channelId, ...rest } = req.query
		if (channelId === 'world') (channelId = process.env.WORLD_CHAT_ID)
		try {
			const messages = await Messages.findAll({
				where: {
					channelId, ...rest
				},
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
