module.exports = {
	methods: {
		formatStr(str, maxLength) {
			if (str.length > maxLength) {
				str = str.substr(0, maxLength - 3) + "..."
			}

			return str
		},

		getProductSchema() {
			return {
				_id: "",
				title: "",
				img: "",
				has_prime: false,
				price: 0,
			}
		},

		getTwitchLink(channel) {
			if (!channel) return ""
			return `https://www.twitch.tv/${channel}`
		},
	},
}
