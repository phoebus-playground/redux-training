import {createActions, createReducer} from 'reduxsauce';

const {Types, Creators} = createActions({
  addTodo: ['todo'],
});

export const TodoTypes = Types;

const INITIAL_STATE = {
  listTodo: [],
};

export const reducer = createReducer(INITIAL_STATE, {
  [Types.ADD_TODO]: (state, action) => {
    return {...state, listTodo: [...state.listTodo, action.todo]};
  },
});

export default Creators;
