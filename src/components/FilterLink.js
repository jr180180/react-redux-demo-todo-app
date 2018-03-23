import React from 'react';
import { connect } from 'react-redux';
import {visibilityFilter} from "../actions/visibility";

const FilterLink = ({ filter, children, currentFilter, setFilter }) => {
    if (filter === currentFilter) {
        return <span>{children}</span>;
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        setFilter(filter);
    };

    return (
        <a href='#'
           onClick={(e) => handleOnClick(e)}
        >
            {children}
        </a>
    )
};

const mapStateToProps = (state) => ({
    currentFilter: state.visibility
});

const mapDispatchToProps = (dispatch) => ({
    setFilter: (filter) => dispatch(visibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);