const validation = {
    validateNo: (req, res, next) => {
        const { reading } = req.body

        num = parseFloat(reading)

        const decimalRegex = /^-?\d+(\.\d{1,2})?$/

        if (isNaN(num)) {
            res.status(400).json({ message: 'Please enter a valid number' })
        } else if (!decimalRegex.test(reading)) {
            res.status(400).json({ message: 'Number can have at most 2 decimal points' })
        } else {
            next()
        }
    },

    validateTemperature: (req, res, next) => {
        const { reading } = req.body

        if (reading < 25 || reading > 35) {
            res.status(400).json({ message: 'Temperature can only be between 25 and 35' })
        } else {
            next()
        }
    },

    validatePh: (req, res, next) => {
        const { reading } = req.body

        if (reading < 4 || reading > 7) {
            res.status(400).json({ message: 'Ph can only be between 4 and 7' })
        } else {
            next()
        }
    },

    validateStirring: (req, res, next) => {
        const { reading } = req.body

        if (reading < 500 || reading > 1300) {
            res.status(400).json({ message: 'Ph can only be between 500 and 1300' })
        } else {
            next()
        }
    },
}

module.exports = validation