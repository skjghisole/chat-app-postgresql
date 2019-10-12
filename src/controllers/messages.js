import { Messages } from '../models';

const controller = {
	create: async (req, res) => {
		const { content, senderId } = req.body
		try {
			const newMessage = await Messages.create({ content, senderId })
			res.status(200).send(newMessage)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		const query = req.body
		try {
			const messages = await Messages.find({ ...query })
			res.status(200).send(messages)
		} catch (err) {
			res.status(400).send(err)
		}
	}
}

export default controller
