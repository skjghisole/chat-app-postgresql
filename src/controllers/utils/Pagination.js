export default ({ page, pageSize }) => {
	let offset = ~~page * ~~pageSize
	const limit = offset + ~~pageSize

	return {
		offset,
		limit
	}
}