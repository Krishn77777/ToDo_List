
import ToDoItem from "./ToDoItem";

export default function ToDoList({ todos, deleteTask, completedTask, editTask, editingId, editingText, setEditingText, saveTask }) {
  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-400">No tasks yet...</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem key={todo.id} 
          todo={todo} 
          deleteTask={deleteTask} 
          completedTask={completedTask}
          editTask={editTask} 
          editingId={editingId} 
          editingText={editingText}
          setEditingText={setEditingText}
          saveTask={saveTask}/>
        ))
      )}
    </div>
  );
}
