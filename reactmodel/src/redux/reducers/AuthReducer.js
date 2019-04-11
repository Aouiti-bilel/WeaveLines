import { GET_PROFILE } from "../actions/types";
const initState = {
  contacts: {}
};
export default function(state = initState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state;
  }
}
