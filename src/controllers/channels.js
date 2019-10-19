import uuid from 'uuid/v1'
import models from '../models';
const { Messages, Channels } = models

const controller = {
	create: async (req, res) => {
		const { participantIds } = req.body
		let participants
		if (typeof participantIds === 'string') (participants = JSON.parse(participantIds))
		else (participants = participantIds)
		try {
			if (participants.length <= 0) throw new Error('Invalid Channel, it should contain atleast one participant')
			const newChannel = await Channels.create({ id: uuid(), participants })
			// for debugging
			// await newChannel.setParticipants(participantIds)
			res.status(200).send(newChannel)
		} catch (err) {
			res.status(400).send(err)
		}
	},
	find: async (req, res) => {
		try {
			const channels = await Channels.findAll()
			res.status(200).send(channels)
		} catch(err) {
			console.log(err)
			res.status(400).send(err)
		}
	}
}

export default controller