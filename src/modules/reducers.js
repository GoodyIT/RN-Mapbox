import { combineReducers } from 'redux';
import auth from '../ducks/Auth';
import placesSearch from '../ducks/PlacesSearch';
import profileInfo from '../ducks/ProfileInfo';

export default combineReducers({ auth, placesSearch, profileInfo });
