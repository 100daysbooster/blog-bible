import { notify } from 'reapop';

import { NOTI_ERROR, NOTI_SUCCESS, NOTI_WARNING, NOTI_INFO } from '../../Types';

const initialState = {
    success: {
        title: 'Success!',
        message: 'Success',
        status: 'success',
        dismissible: true,
        dismissAfter: 200000
    },
    error: {
        title: 'ERROR!',
        message: 'Success',
        status: 'success',
        dismissible: true,
        dismissAfter: 2000
    },
    info: {
        title: 'Information!',
        message: 'Success',
        status: 'success',
        dismissible: true,
        dismissAfter: 2000
    },
    warning: {
        title: 'Warning!',
        message: 'Success',
        status: 'success',
        dismissible: true,
        dismissAfter: 2000
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        default: return state;
    }
}

export function onSuccess(message) {
    return dispatch => {
        dispatch(notify({
            title: 'ดำเนินการสำเร็จ',
            message,
            status: 'success',
            dismissible: true,
            dismissAfter: 2000
        }));
    }
}

export function onFailure(message) {
    return dispatch => {
        dispatch(notify({
            title: 'ไม่สามารถดำเนินการได้',
            message,
            status: 'error',
            dismissible: true,
            dismissAfter: 2000
        }));
    }
}