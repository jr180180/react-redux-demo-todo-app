import {addTodo, toggleTodo} from "../../actions/todos";
import todos from '../fixtures/todos';

const count = todos.length;

describe('todos actions', () => {
    test('should add new todo item', () => {
        const action = addTodo('test', count);
        expect(action).toEqual({
            type: 'ADD_TODO',
            text: 'test',
            id: count
        })
    });
    test('should toggle todo complete', () => {
        const action = toggleTodo(todos[0]);
        expect(action).toEqual({
            type: 'TOGGLE_TODO',
            id: todos[0]
        })
    });
});
