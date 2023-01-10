import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.css';

function Footer({
    todoTasks,
    filter,
    onfilterTask,
    onClearCompleted,
    filterTodoData,
    choseFilter,
}) {
    return (
        <footer className='footer'>
            <span className='todo-count'>{todoTasks} items left</span>
            <TasksFilter
                filter={filter}
                onfilterTask={(label) => onfilterTask(label)}
                filterTodoData={() => filterTodoData()}
                choseFilter={(btn, label) => choseFilter(btn, label)}
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

export default Footer;
