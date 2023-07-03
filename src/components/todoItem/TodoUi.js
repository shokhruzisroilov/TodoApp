import React from 'react'
import './TodoItem.scss'

import checkoutIconActive from '../../assets/checkout-active.svg'
import closeIcon from '../../assets/close-icon.svg'

function TodoUi({ id, task, status, markDone, deleteTask }) {
	return (
		<React.Fragment>
			<div className='todo-item'>
				<span>
					{status ? (
						<img
							src={checkoutIconActive}
							alt='checkout icon'
							onClick={() => markDone(id)}
						/>
					) : (
						<div className='lite-icon' onClick={() => markDone(id)}></div>
					)}
					<p className={status ? 'task-done' : 'task'}>{task}</p>
				</span>
				{!status ? (
					<div
						className='close-icon'
						title='Delete'
						onClick={() => deleteTask(id)}
					>
						<img src={closeIcon} alt='close icon' />
					</div>
				) : (
					''
				)}
			</div>
		</React.Fragment>
	)
}

export default TodoUi
