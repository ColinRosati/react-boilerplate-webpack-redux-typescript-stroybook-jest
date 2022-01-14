import { ADD_USER } from "./actions";

const initialState = {
  user: null,
};

type ActionType = {
  type: string;
  payload: any;
}

export default function(state = initialState, action: ActionType) {
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
