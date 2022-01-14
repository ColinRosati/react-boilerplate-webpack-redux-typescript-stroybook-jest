export const ADD_USER = 'ADD_USER'

export const addUser = (value: string) => ({
  type: ADD_USER,
  payload: {
    value
  }
});