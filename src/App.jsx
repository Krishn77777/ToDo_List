import { useEffect, useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {

  const [newTask, setNewTask] = useState("");
  
  const [todos, setTodos] = useState(()=>{
    const stored = JSON.parse(localStorage.getItem("todos")) || [];
    return stored;
  });

  const[editingId, setEditingId] = useState(null);
  const[editingText, setEditingText] = useState("")

  // localStorage to save todos
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  

  // function to add a new task
  function addTask() {
    if (newTask.trim() == "") return;

    const newTodo = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask("");
  };

  // function to delete a task
  function deleteTask(id){
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // function to mark a task as complete
  function completedTask(id){
    const updatedTodos = todos.map((todo)=> todo.id === id ? { ...todo, completed : !todo.completed} : todo);
    setTodos(updatedTodos);
  };

  // function to edit the task
  function editTask(id,text){
    setEditingId(id);
    setEditingText(text);
  };

  // function to save the edited task

  function saveTask(){
    const updatedTodos = todos.map((todo)=> todo.id === editingId ? { ...todo , text: editingText } : todo );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditingText("");
  };





  return (

    <div className="min-h-screen bg-slate-900 text-white flex justify-center pt-10">
      <div className="w-full max-w-md">
      <Header />
      <div className="p-4 text-center">
        <input type="text" placeholder="Add a task..." value={newTask} onChange={(e) => setNewTask(e.target.value)} className="p-2 rounded w-xs" />
        <button onClick={addTask} className="ml-5 p-2 bg-cyan-700 rounded">Add</button>
        <ToDoList 
          todos={todos} 
          deleteTask={deleteTask} 
          completedTask={completedTask} 
          editTask={editTask} 
          editingId={editingId} 
          editingText={editingText}
          setEditingText={setEditingText}
          saveTask={saveTask}/>
      </div>
      </div>
    </div>
  )
}

export default App;
