import { RootState } from 'store/types';

export const getUsersState = (store: RootState) => store.usersReducer;
