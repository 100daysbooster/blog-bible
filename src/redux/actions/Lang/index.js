import { CHANGE_LANG_ENG, CHANGE_LANG_THAI } from '../../Types';

const initialState = {
    lang: 'thai'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANG_ENG:
            return {
                ...state,
                lang: 'eng'
            }
        case CHANGE_LANG_THAI:
            return {
                ...state,
                lang: 'thai'
            }
        default: return state;
    }
}

export function ChangeLang(lang) {
    return dispatch => {
        return lang === 'thai' ? dispatch({ type: CHANGE_LANG_THAI }) : dispatch({ type: CHANGE_LANG_ENG });
    }
}