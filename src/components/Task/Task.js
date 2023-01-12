import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import './Task.css';

function Task({
    label,
    date,
    onDeleted,
    id,
    checked,
    onToggleCompleted,
    onEditeTask,
    completed,
}) {
    Task.propTypes = {
        label: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        onToggleCompleted: PropTypes.func.isRequired,
        onEditeTask: PropTypes.func.isRequired,
        onDeleted: PropTypes.func.isRequired,
    };
    let classNames = 'description';

    if (completed || checked) {
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
                checked={checked}
            />
            <label htmlFor={id}>
                <span className={classNames}>{label}</span>
                <span className='created'>created {result}</span>
            </label>
            <button
                type='button'
                className='icon icon-edit float-right'
                onClick={onEditeTask}
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
