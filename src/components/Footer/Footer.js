import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';
import './Footer.css';

function Footer({ todoTasks, filter, onClearCompleted, changeFilter }) {
    Footer.defaultProps = {
        filter: 'All',
    };

    Footer.propTypes = {
        filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
        changeFilter: PropTypes.func.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
    };
    return (
        <footer className='footer'>
            <span className='todo-count'>{todoTasks} items left</span>
            <TasksFilter filter={filter} changeFilter={changeFilter} />
            <button
                type='button'
                className='clear-completed'
                onClick={onClearCompleted}
            >
                Clear completed
            </button>
        </footer>
    );
}

export default Footer;
