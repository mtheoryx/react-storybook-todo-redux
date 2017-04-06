const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'UPDATE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                text: action.payload
            }
        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        case 'DELETE_TODO':
            return state.id !== action.id;
        default:
            return state;
    }
};
export const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'UPDATE_TODO':
            return state.map(t => todo(t, action));
        case 'DELETE_TODO':
            return state.filter(t => todo(t, action));
        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};
