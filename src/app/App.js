import './App.scss'
import Header from '../components/header/Header'
import AddTodo from '../components/addTodo/AddTodo'
import TodoItem from '../components/todoItem/TodoItem'
import FilterItem from '../components/filterItem/FilterItem'
import { useState } from 'react'
import { useEffect } from 'react'

//get localStorage
const getTodos = () => {
	const data = localStorage.getItem('Todos')
	if (data) {
		return JSON.parse(data)
	} else {
		return []
	}
}
function App() {
	//State
	const [todos, setTodos] = useState(getTodos())
	const [newTask, setNewTask] = useState('')
	const [filter, setFilter] = useState('all')

	//set localStorage
	useEffect(
		item => {
			localStorage.setItem('Todos', JSON.stringify(todos))
			if (localStorage.getItem('mode') === 'true') {
				document.body.classList.add('lite')
			} else {
				document.body.classList.remove('lite')
			}
		},
		[todos]
	)

	//Add Task
	const addTask = () => {
		if (newTask) {
			let num = todos.length + 1
			let newEntry = { id: num, task: newTask, status: false }
			setTodos([...todos, newEntry])
			setNewTask('')
		}
	}

	//Delete Task
	const deleteTask = id => {
		let newTask = todos.filter(task => task.id !== id)
		setTodos(newTask)
	}

	//Mark Done
	const markDone = id => {
		const newTask = todos.map(task => {
			if (task.id === id) {
				return { ...task, status: !task.status }
			}
			return task
		})
		setTodos(newTask)
	}

	//FilterChange
	const changeFilter = filterStatus => {
		setFilter(filterStatus)
	}

	return (
		<div className='app'>
			<div className='app-bg'></div>
			<div className='app__container'>
				<Header />
				<AddTodo addTask={addTask} newTask={newTask} setNewTask={setNewTask} />
				<div className='todos'>
					{todos && todos.length ? '' : 'No Task...'}
					<TodoItem
						todos={todos}
						deleteTask={deleteTask}
						markDone={markDone}
						filter={filter}
					/>
					<FilterItem
						todos={todos}
						setTodos={setTodos}
						filter={filter}
						changeFilter={changeFilter}
					/>
				</div>
				<footer>Drag and drop to reorder list</footer>
			</div>
		</div>
	)
}

export default App
