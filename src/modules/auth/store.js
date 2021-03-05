const INITIAL_STATE = {
    count: 0,
};
export default {
    namespace: 'auth',
    reducer: (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state, count: state.count + 1,
                };
            case 'DECREMENT':
                return {
                    ...state, count: state.count - 1,
                };
            default: return state;
        }
    },
    actions: {
        increaseCounter: () => {
            return {
                type: 'INCREMENT',
            }
        },
        decreaseCounter: () => {
            return {
                type: 'DECREMENT',
            }
        }
    }
}