const Types = {
  ADD_TODO: 'ADD_TODO',
};

const INITIAL_STATE = {
  listTodo: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.ADD_TODO:
      return {...state, listTodo: [...state.listTodo, action.todo]};
    default:
      return state;
  }
};

export const addTodo = todo => {
  return {
    type: Types.ADD_TODO,
    todo,
  };
};
