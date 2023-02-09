import PropTypes from 'prop-types';

import './TasksFilter.css';

export default function TasksFilter({ filter, changeFilter }) {
    const btns = [{ name: 'All' }, { name: 'Active' }, { name: 'Completed' }];

    const onClick = (event) => {
        const classSelected = 'selected';

        const buttons = document.querySelectorAll('.footer button');

        buttons.forEach((button) => {
            if (button.textContent === filter) {
                if (!button.classList.contains(classSelected)) {
                    button.classList.add(classSelected);
                }
            }
        });
        if (event.target.classList.contains(classSelected)) {
            return;
        }
        buttons.forEach((button) => {
            button.classList.remove(classSelected);
        });
        event.target.classList.add(classSelected);
        changeFilter(event.target.textContent);
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
    changeFilter: PropTypes.func.isRequired,
};
