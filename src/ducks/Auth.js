export const SETUP_TOKEN = 'projectx/auth/SETUP_TOKEN';
export const LOGIN_PASSWORD = 'projectx/auth/LOGIN_PASSWORD';
export const LOGIN_PASSWORD_SUCCESS = 'projectx/auth/LOGIN_PASSWORD_SUCCESS';
export const LOGIN_PASSWORD_FAIL = 'projectx/auth/LOGIN_PASSWORD_FAIL';
export const LOGIN_FACEBOOK = 'projectx/auth/LOGIN_FACEBOOK';
export const DELETE_TOKEN = 'projectx/auth/DELETE_TOKEN';

const initialState = {
  error: '',
  token: '',
};
export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SETUP_TOKEN: {
      return { ...state, token: action.token };
    }

    case LOGIN_PASSWORD:
      return { ...state };
    case LOGIN_PASSWORD_SUCCESS: {
      console.log(action.payload.data)
      return { ...state, token: action.payload.data.access_token };
    }
    case LOGIN_PASSWORD_FAIL: {
      alert('Login Failed');
      return { ...state }
    }
    default:
      return { ...state };
  }
}

export const loginWithPassword = ({ email, password }) => ({
  type: LOGIN_PASSWORD,
  payload: {
    request: {
      url: '/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    },
  },
});

export const setUpToken = token => ({
  type: SETUP_TOKEN,
  token,
});
