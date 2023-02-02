import PropTypes from 'prop-types';

import Task from '../Task';

import './TaskList.css';

export default function TaskList({
    todos,
    onDeleted,
    changeDeadline,
    onToggleCompleted,
    onChangeName,
}) {
    TaskList.propTypes = {
        onToggleCompleted: PropTypes.func.isRequired,
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
                onToggleCompleted={() => onToggleCompleted(id)}
                onChangeName={(ids, text) => onChangeName(ids, text)}
                changeDeadline={(newDeadline) =>
                    changeDeadline(id, newDeadline)
                }
            />
        );
    });

    return <ul className='todo-list'>{elements}</ul>;
}
