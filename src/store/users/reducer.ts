import { ADD_USER } from "./actions";

const initialState = {
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
