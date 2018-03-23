export const addTodo = (text, count) => ({
    type: 'ADD_TODO',
    text: text,
    id: count++
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});
