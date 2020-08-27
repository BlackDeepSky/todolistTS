import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type FilterValueType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: false},
        {id: 3, title: "ReactJS", isDone: true},
        {id: 4, title: "RestApi", isDone: false},
        {id: 5, title: "ViewJS", isDone: true}
    ]);

    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks)
    }

    let [filter, setFilter] = useState<FilterValueType>("all");

    let taskForTodolist = tasks;

    if(filter === "active"){
        taskForTodolist = tasks.filter(t => t.isDone === false)
    }
    if(filter === "completed"){
        taskForTodolist = tasks.filter(t => t.isDone === true)
    }
    
    function changeFilter(value: FilterValueType) {
    setFilter(value)
    }
    
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={taskForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
