import { Todofilters } from "../Todofilters/Todofilters"
import { Todo } from "../Todo/Todo"


const Todolist = ({ todos, handleSetComplete, handleClearComplete, handleDelete, activeFilter, showAllTodos, showActiveTodos, showCompletedTodos  }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2xl">
            {todos.map(todo => {
                return (
                    <Todo key={todo.id}
                    todo={todo}
                    handleSetComplete={handleSetComplete}
                    handleDelete={handleDelete} />
                )
            })}
            <Todofilters 
                activeFilter={activeFilter}
                total={todos.length}
                showAllTodos={showAllTodos}
                showActiveTodos={showActiveTodos}
                showCompletedTodos={showCompletedTodos}
                handleClearComplete={handleClearComplete}
             />
        </div>
    )
}

export { Todolist }