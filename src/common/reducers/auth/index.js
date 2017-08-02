import {isLoggedIn, getLocalToken} from 'api'
import {
  LOGIN_AUTH_FAIL,
  LOGIN_AUTH_SUCCESS,
  LOGOUT_AUTH_SUCCESS,
  APPLICATION_INIT
} from 'actions'

export const initialState = {
  loggedIn: isLoggedIn(),
  token: getLocalToken(),
  errors: {}
}

export function auth (state = initialState, action) {
  switch (action.type) {
    case APPLICATION_INIT:
      return {...initialState, ...state}
    case LOGOUT_AUTH_SUCCESS: {
      return {
        loggedIn: false,
        token: null,
        errors: {}
      }
    }
    case LOGIN_AUTH_FAIL: {
      return {
        loggedIn: false,
        token: null,
        errors: action.errors
      }
    }
    case LOGIN_AUTH_SUCCESS: {
      const {token} = action.result
      return {
        ...state,
        loggedIn: true,
        token
      }
    }
    default:
      return state
  }
}
