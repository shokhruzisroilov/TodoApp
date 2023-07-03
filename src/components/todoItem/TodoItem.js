import React from 'react'
import './TodoItem.scss'
import TodoUi from './TodoUi'

function TodoItem({ todos, deleteTask, markDone, filter }) {
	if (filter === 'active') {
		return (
			<>
				{todos &&
					todos
						.filter(item => !item.status)
						.sort((a, b) => (a.id > b.id ? 1 : -1))
						.map(item => {
							return (
								<TodoUi
									id={item.id}
									task={item.task}
									status={item.status}
									markDone={markDone}
									deleteTask={deleteTask}
								/>
							)
						})}
			</>
		)
	}
	if (filter === 'completed') {
		return (
			<>
				{todos &&
					todos
						.filter(item => item.status)
						.sort((a, b) => (a.id > b.id ? 1 : -1))
						.map(item => {
							return (
								<TodoUi
									id={item.id}
									task={item.task}
									status={item.status}
									markDone={markDone}
									deleteTask={deleteTask}
								/>
							)
						})}
			</>
		)
	}
	return (
		<>
			{todos &&
				todos
					.sort((a, b) => (a.id > b.id ? 1 : -1))
					.map(item => {
						return (
							<TodoUi
								id={item.id}
								task={item.task}
								status={item.status}
								markDone={markDone}
								deleteTask={deleteTask}
							/>
						)
					})}
		</>
	)
}

export default TodoItem
