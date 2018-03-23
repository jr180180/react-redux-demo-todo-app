import todosReducer from '../../reducers/todos';
import todos from '../fixtures/todos';

describe('todos reducer', () => {
    test('should set default state', () => {
        const state = todosReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual([]);
    });

    test('should add todo', () => {
        const count = todos.length;
        const todo = {
            id: count,
            text: 'test',
            completed: false
        };
        const action = {
            type: 'ADD_TODO',
            text: todo.text,
            id: count
        };
        const state = todosReducer(todos, action);
        expect(state).toEqual([...todos, todo]);
    });

    test('should toggle completed state', () => {
        const todo = todos[0];
        const id = todo.id;
        const action = {
            type: 'TOGGLE_TODO',
            id
        };
        const state = todosReducer([todo], action);
        expect(state).toEqual([{
            ...todo,
            completed: true
        }]);
    });
});
