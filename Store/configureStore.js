// Store/configureStore.js

import { createStore } from 'redux'
import manageEco from './Reducers/ecoReducer'
import setAvatar from './Reducers/avatarReducer'
import { persistCombineReducers } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage
}

export default createStore(persistCombineReducers(rootPersistConfig, {manageEco, setAvatar}))