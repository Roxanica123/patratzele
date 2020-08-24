export const configurables = {
    number: {
        label: "Number of squares",
        attributes: {
            'type': 'number',
            'id': 'number',
            'min': 1,
            'max': 50,
            'value': 5
        }
    },
    time: {
        label: "Time",
        attributes: {
            'type': 'range',
            'id': 'time',
            'min': 0.1,
            'max': 5,
            'step': '0.1',
            'value': 1
        }
    },
    difficulty: {
        label: "Difficulty",
        attributes: {
            'type': 'range',
            'id': 'difficulty',
            'min': 0,
            'max': 3,
            'value': 0
        }
    }
}