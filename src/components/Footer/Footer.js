import PropTypes from 'prop-types';

import TasksFilter from '../TasksFilter';
import './Footer.css';

function Footer({ todoTasks, filter, onClearCompleted, setFilter }) {
    Footer.defaultProps = {
        filter: 'All',
    };

    Footer.propTypes = {
        filter: PropTypes.oneOf(['All', 'Active', 'Completed']),
        setFilter: PropTypes.func.isRequired,
        onClearCompleted: PropTypes.func.isRequired,
    };
    return (
        <footer className='footer'>
            <span className='todo-count'>{todoTasks} items left</span>
            <TasksFilter filter={filter} setFilter={setFilter} />
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
