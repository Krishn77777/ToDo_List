import { FaEdit, FaTrash } from "react-icons/fa";

function ToDoItem({todo, deleteTask, completedTask, editTask, editingId, editingText, setEditingText, saveTask}){

    const isEditing = editingId === todo.id;

    return(
        <div className="flex justify-between items-center bg-gray-800 p-3 rounded mb-2">
            { isEditing ? (
                <input type="text" value={editingText} onChange={(e)=> setEditingText(e.target.value)}
                className="p-1 rounded text-green flex-1 mr-2"/>) : (
            <span onClick={()=> completedTask(todo.id)} className={`cursor-pointer  ${todo.completed ? "line-through text-gray-400" : ""}`}>
                 {todo.text} 
            </span> )}

            <div className="flex gap-3">
                { isEditing ? (
                    <button onClick={saveTask} className="text-green-400 hover:text-green-300">
                         Save 
                    </button> ) : (
                    <button onClick={()=> editTask(todo.id, todo.text)} className="text-yellow-400 hover:text-yellow-300">
                    <FaEdit/>
                    </button>  )}

                <button onClick={()=> deleteTask(todo.id)} className="text-red-400 hover:text-red-300">
                    <FaTrash/>
                </button>

            </div>

        </div>
    )
}

export default ToDoItem;