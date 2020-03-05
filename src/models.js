export const Data = {
    state: {
        trk: []
    },
    reducers: {
        updateData : (state, data) => {
            return ({
                trk: data
            })
        },
    },
    effects: {
    }
}