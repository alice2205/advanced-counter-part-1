const initialState = {
    num: 10
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType=> {
    switch (action.type) {
        case 'INC-NUM':
            return {
                ...state, num: state.num + 1
            }
        case 'SET-NUM-FROM-LOCAL-STORAGE':
            return {
                ...state, num: action.num
            }
        default: return state
    }
}

export const incCounterValueAC = () => ({type: 'INC-NUM'} as const)
export const setNumFromLocalStorageAC = (num: number) => ({type: 'SET-NUM-FROM-LOCAL-STORAGE', num} as const)

export type IncCounterValueACType = ReturnType<typeof incCounterValueAC> ;
export type setNumFromLocalStorageACType = ReturnType<typeof setNumFromLocalStorageAC> ;

type ActionType = IncCounterValueACType | setNumFromLocalStorageACType
