module.exports = {
  methods: {
    formatStr(str, maxLength) {
      if (str.length > maxLength) {
        str = str.substr(0, maxLength - 3) + '...'
      }

      return str
    },
  },
}
