import PropTypes from 'prop-types';

import './TasksFilter.css';

export default function TasksFilter({ filter, setFilter }) {
    const btns = [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }];

    const onClick = (event) => {
        const classSelected = 'selected';
        if (event.target.classList.contains(classSelected)) {
            return;
        }
        setFilter(event.target.textContent);
    };

    return (
        <ul className='filters'>
            {btns.map((el) => (
                <li key={el.name}>
                    <button
                        className={filter === el.name ? 'selected' : ' '}
                        type='button'
                        onClick={onClick}
                        btn={el.name}
                        label={el.name}
                    >
                        {el.name}
                    </button>
                </li>
            ))}
        </ul>
    );
}

TasksFilter.propTypes = {
    setFilter: PropTypes.func.isRequired,
};
