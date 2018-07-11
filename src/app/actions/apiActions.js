export const apiStarted = () => ({
    type: 'API_LOAD_STARTED'
})

export const apiFinished = () => ({
    type: 'API_LOAD_FINISHED'
})

export const apiError = (error) => ({
    type: 'API_LOAD_ERROR',
    payload: error
})

