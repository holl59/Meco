// Store/Reducers/favoriteReducer.js
//import ecos from '../../Helpers/ecosData'

const initialState = { ecoList: [] }

function manageEco(state = initialState, action) {
  let nextState
  switch (action.type) {

    case 'ADD_ECO' : {
      nextState = {
        ...state,
        ecoList: [...state.ecoList, action.data]
      }
			return nextState
		}

/* 		case EDIT_ECO: {
			return state.map(eco => {
				if (eco.uid === action.uid) {
					return {
						...eco,
						edited: true,
						editedAt: Date.now(),
						...action.data,
					};
				} else {
					return beer;
				}
			});
		} */

		case 'DELETE_ECO' : {
      const ecoListIndex = state.ecoList.findIndex(item => item.id === action.data.id)
      if (ecoListIndex !== -1) {
        nextState = {
          ...state,
          ecoList: state.ecoList.filter( (item, index) => index !== ecoListIndex)
        }
      }
      return nextState || state
		}

    default: {
      return state
    }
  }
}

export default manageEco