import React, { useState } from 'react'

function TodoList(){
    const [tasks, setTasks] = useState(["eat", "shower"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim()) {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index: number){
        setTasks(t => {
            return t.filter((_, i) => i !== index);
        })
    }

    return(
    <div className="todo-list">
        <h1>todo list</h1>

        <div>
            <input
                type="text"
                placeholder="new task"
                value={newTask}
                onChange={handleInputChange}/>
            <button
                className="add-button"
                onClick={addTask}>
                add
            </button>
        </div>

        <ol>
            {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button
                        className="delete-button"
                        onClick={() => deleteTask(index)}>
                        done
                    </button>
                </li>)}
        </ol>
    </div>
    )
}

export default TodoList
