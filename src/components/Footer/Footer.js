import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer({ todoTasks, filter, onClearCompleted, onFilterChange }) {
    return (
        <footer className='footer'>
            <span className='todo-count'>{todoTasks} items left</span>
            <TasksFilter
                filter={filter}
                onFilterChange={(label) => onFilterChange(label)}
            />
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
Footer.defaultProps = {
    filter: 'All',
};

Footer.propTypes = {
    filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
    onFilterChange: PropTypes.func.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
};

export default Footer;
