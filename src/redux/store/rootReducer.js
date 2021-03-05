import { combineReducers } from 'redux'
import AuthStore from '../../modules/auth/store'

const rootReducer = combineReducers({
    counter: AuthStore.reducer,
})

export default rootReducer