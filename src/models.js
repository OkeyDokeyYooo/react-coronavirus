export const Data = {
    state: {
        trk: [],
        total: {}
    },
    reducers: {
        updateData : (state, data) => {
            let totalSummary = data.pop()
            return ({
                trk: data,
                total: totalSummary
            })
        },
    },
    effects: {
    }
}