import { isEmpty } from 'lodash';

export const INITIAL_SEARCH = 'projectx/placesSearch/INITIAL_SEARCH';
export const INITIAL_SEARCH_SUCCESS = 'projectx/placesSearch/INITIAL_SEARCH_SUCCESS';
export const INITIAL_SEARCH_FAIL = 'projectx/placesSearch/INITIAL_SEARCH_FAIL';
export const SEARCH = 'projectx/placesSearch/SEARCH';
export const SEARCH_SUCCESS = 'projectx/placesSearch/SEARCH_SUCCESS';
export const SEARCH_FAIL = 'projectx/placesSearch/SEARCH_FAIL';
export const LOAD_MORE = 'projectx/placesSearch/LOAD_MORE';
export const LOAD_MORE_SUCCESS = 'projectx/placesSearch/LOAD_MORE_SUCCESS';
export const LOAD_MORE_FAIL = 'projectx/placesSearch/LOAD_MORE_FAIL';
export const REFRESH = 'projectx/placesSearch/REFRESH';
export const REFRESH_SUCCESS = 'projectx/placesSearch/REFRESH_SUCCESS';
export const REFRESH_FAIL = 'projectx/placesSearch/REFRESH_FAIL';
export const DESTROY = 'projectx/placesSearch/DESTROY';

const initialState = {
  places: [],
  page: 1,
  loading: false,
  refreshing: false,
  filter: {},
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INITIAL_SEARCH: {
      return { ...state, loading: true, refreshing: true };
    }
    case INITIAL_SEARCH_SUCCESS: {
      return { ...state, places: action.payload.data.data.data, loading: false, refreshing: false };
    }
    case INITIAL_SEARCH_FAIL: {
      return { ...state, loading: false, refreshing: false };
    }
    case SEARCH: {
      return { ...state, loading: true, refreshing: true };
    }
    case SEARCH_SUCCESS: {
      const places = action.payload.data.data.data;
      return { ...state, places, page: 1, loading: false, refreshing: false };
    }
    case SEARCH_FAIL: {
      return { ...state, loading: false, refreshing: false };
    }
    case LOAD_MORE: {
      return { ...state, loading: true };
    }
    case LOAD_MORE_SUCCESS: {
      const { page } = action.meta.previousAction.payload;
      const places = state.places.concat(action.payload.data.data.data);
      return { ...state, places, page, loading: false };
    }
    case LOAD_MORE_FAIL: {
      return { ...state, loading: false };
    }
    case DESTROY: {
      return { ...state, places: [] };
    }
    default:
      return state;
  }
}

const limit = 15;
const parseFilter = (filter = {}) => {
  if (isEmpty(filter)) return undefined;
  const parsedFilter = { additionalFilters: [] };

  if (filter.name) {
    parsedFilter.additionalFilters = parsedFilter.additionalFilters.concat({ name: filter.name });
  }
  return { ...parsedFilter };
};
export const initialSearch = () => ({
  type: INITIAL_SEARCH,
  payload: {
    request: {
      url: '/places/search',
      method: 'POST',
      data: {
        page: 1,
        limit,
      },
    },
  },
});
export const search = filter => ({
  type: SEARCH,
  payload: {
    request: {
      url: '/places/search',
      method: 'POST',
      data: {
        page: 1,
        limit,
        ...parseFilter(filter),
      },
    },
  },
});
export const loadMore = ({ page, filter }) => ({
  type: LOAD_MORE,
  payload: {
    request: {
      url: '/places/search',
      method: 'POST',
      data: {
        page,
        limit,
        ...parseFilter(filter),
      },
    },
    page,
  },
});
export const refresh = filter => ({
  type: REFRESH,
  payload: {
    request: {
      url: '/places/search',
      data: {
        ...parseFilter(filter),
      },
    },
  },
});
export const destroy = () => ({
  type: DESTROY,
  payload: {
    request: {
      url: '/places/search',
      method: 'POST',
    },
  },
});
