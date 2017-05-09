
const generateSuffix = () => {
  return Math.round(
    Math.pow(36, 6) - Math.random() * Math.pow(36, 5)
  ).toString(36).slice(1)
}

module.exports = generateSuffix