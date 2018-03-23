import React from 'react';
import { connect } from 'react-redux';
import getVisibleTodos from '../selectors/getVisibleTodos';
import TodoItem from '../components/TodoItem';
import {toggleTodo} from "../actions/todos";

export const TodoList = ({ todos, visibility, onTodoClick }) => {
    const todosList = getVisibleTodos(todos, visibility);
    return (
        <ul>
            { todosList.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            ))}
        </ul>
    );
};

const mapStateToProps = (state) => ({
    todos: state.todos,
    visibility: state.visibility
});

const mapDispatchToProps = ( dispatch ) => ({
    onTodoClick: (id) => (dispatch(toggleTodo(id)))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
