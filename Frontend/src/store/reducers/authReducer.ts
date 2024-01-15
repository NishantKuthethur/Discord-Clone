interface StateType {
  userDetails: null | { [key: string]: any }
}

interface ActionType {
  type: string
  payload?: any
}

const initState: StateType = {
  userDetails: null,
}

const reducer: React.Reducer<StateType, ActionType> = (
  state = initState,
  action,
) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
      }
    default:
      return state
  }
}

export default reducer
