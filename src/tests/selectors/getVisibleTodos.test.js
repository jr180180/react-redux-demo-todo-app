import getVisibleTodos from "../../selectors/getVisibleTodos";
import todos from '../fixtures/todos';

describe('getVisibleTodos selector', () => {
    test('should show all todos by default', () => {
        const result = getVisibleTodos(todos, '');
        expect(result).toEqual([...todos])
    });

    test('should show all todos', () => {
        const result = getVisibleTodos(todos, 'SHOW_ALL');
        expect(result).toEqual([...todos])
    });

    test('should show completed todos only', () => {
        const result = getVisibleTodos(todos, 'SHOW_COMPLETED');
        expect(result).toEqual([todos[2]])
    });

    test('should show active todos only', () => {
        const result = getVisibleTodos(todos, 'SHOW_ACTIVE');
        expect(result).toEqual([todos[0], todos[1]])
    });
});
