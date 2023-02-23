const initState = {
    themeId: 1,
}

type changeThemeIdType = {
    type: string
    id: number
}


export const themeReducer = (state = initState, action: changeThemeIdType): typeof initState=> { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
        return {...state,
            themeId: action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
