import React from 'react'
import './AddTodo.scss'
import { useState } from 'react'
import checkoutIconActive from '../../assets/checkout-active.svg'

function AddTodo({ addTask, newTask, setNewTask }) {
	const [checkout, setCheckout] = useState(true)

	const handleClick = () => {
		setCheckout(!checkout)
	}

	return (
		<div className='add-todo'>
			<div className='add-todo__container'>
				<span>
					{checkout ? (
						<div className='lite-icon' onClick={handleClick}></div>
					) : (
						<img
							onClick={handleClick}
							src={checkoutIconActive}
							alt='checkout icon'
						/>
					)}
					<input
						type='text'
						value={newTask}
						placeholder='Create a new todo…'
						onChange={e => setNewTask(e.target.value)}
					/>
				</span>
				<button title='Add Task' className='btn-add' onClick={addTask}>
					add
				</button>
			</div>
		</div>
	)
}

export default AddTodo
