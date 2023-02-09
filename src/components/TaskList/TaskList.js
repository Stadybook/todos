import PropTypes from 'prop-types';

import Task from '../Task';

import './TaskList.css';

export default function TaskList({
    todos,
    toggleProperty,
    onDeleted,
    changeDeadline,
    onChangeName,
}) {
    TaskList.propTypes = {
        toggleProperty: PropTypes.func.isRequired,
        onDeleted: PropTypes.func.isRequired,
        onChangeName: PropTypes.func.isRequired,
    };

    const elements = todos.map((item) => {
        const { id } = item;
        return (
            <Task
                {...item}
                key={id}
                onDeleted={() => onDeleted(id)}
                toggleProperty={toggleProperty}
                onChangeName={onChangeName}
                changeDeadline={(newDeadline) =>
                    changeDeadline(id, newDeadline)
                }
            />
        );
    });

    return <ul className='todo-list'>{elements}</ul>;
}
