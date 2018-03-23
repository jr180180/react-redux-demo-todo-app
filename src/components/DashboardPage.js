import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {addTodo} from "../actions/todos";

export const DashboardPage = ({ addTodo, todosCount }) => {
    const handleEnterKeyPressed = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTodo(event.target.value, todosCount);
            event.target.value = '';
        }
    };

    return (
        <div>
            <Header />
            <div className="content-container">
                <input
                    className='text-input'
                    onKeyPress={handleEnterKeyPressed}
                    placeholder='Add Task & Press Enter'
                />
                <TodoList />
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = ( state ) => ({
    todosCount: state.todos.length
});

const mapDispatchToProps = ( dispatch ) => ({
    addTodo: (text, count) => (dispatch(addTodo(text, count)))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
