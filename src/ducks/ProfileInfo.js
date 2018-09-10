export const GET_PROFILE_INFO = 'projectx/placesSearch/GET_PROFILE_INFO';
export const GET_PROFILE_INFO_SUCCESS = 'projectx/placesSearch/GET_PROFILE_INFO_SUCCESS';
export const GET_PROFILE_INFO_FAIL = 'projectx/placesSearch/GET_PROFILE_INFO_FAIL';

const initialState = {
  place: {},
};
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_PROFILE_INFO: {
      return { ...state };
    }
    case GET_PROFILE_INFO_SUCCESS: {
      const place = action.payload.data.data;
      return { ...state, place };
    }
    case GET_PROFILE_INFO_FAIL: {
      return { ...state };
    }
    default:
      return { ...state };
  }
}

export const getProfileInfo = id => ({
  type: GET_PROFILE_INFO,
  payload: {
    request: {
      url: `/places/id`,
      method: 'GET',
    },
  },
});
