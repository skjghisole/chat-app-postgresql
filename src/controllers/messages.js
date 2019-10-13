import models from '../models';
const { Messages } = models

const controller = {
	create: async (req, res) => {
		const { content, senderId } = req.body
		try {
			const newMessage = await Messages.create({ content, senderId: ~~senderId })
			res.status(201).send(newMessage)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		const query = req.body
		try {
			const messages = await Messages.findAll({
				where: {...query}
			})
			res.status(200).send(messages)
		} catch (err) {
			res.status(400).send(err)
		}
	}
}

export default controller
