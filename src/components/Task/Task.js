import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

function Task({
    label,
    date,
    onDeleted,
    id,
    onToggleCompleted,
    completed,
    handlerClick,
}) {
    Task.propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        onToggleCompleted: PropTypes.func.isRequired,
        onDeleted: PropTypes.func.isRequired,
    };
    let classNames = 'description';

    if (completed) {
        classNames += ' completed';
    }

    const result = formatDistanceToNow(date, { includeSeconds: true });

    return (
        <div className='view'>
            <input
                id={id}
                className='toggle'
                type='checkbox'
                onChange={onToggleCompleted}
                checked={completed}
            />
            <label htmlFor={id}>
                <span className={classNames}>{label}</span>
                <span className='created'>created {result}</span>
            </label>
            <button
                type='button'
                className='icon icon-edit float-right'
                onClick={handlerClick}
            />
            <button
                type='button'
                className='icon icon-destroy float-right'
                onClick={onDeleted}
            />
        </div>
    );
}

export default Task;
