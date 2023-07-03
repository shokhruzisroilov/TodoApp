import React from 'react'
import './FilterItem.scss'

const paragrafData = [
	{
		id: 1,
		title: 'all',
		label: 'All',
	},
	{
		id: 2,
		title: 'active',
		label: 'Active',
	},
	{
		id: 3,
		title: 'completed',
		label: 'Completed',
	},
]

function FilterItem({ todos, setTodos, filter, changeFilter }) {
	const paragrafClick = paragrafData.map(item => {
		let activeClazz = filter === item.title ? 'paragraf-active' : 'paragraf'
		return (
			<p
				className={activeClazz}
				key={item.id}
				onClick={() => changeFilter(item.title, todos)}
			>
				{item.label}
			</p>
		)
	})
	return (
		<div className='filter-item'>
			<h3>{todos.length} items left</h3>
			<span>{paragrafClick}</span>
			<h4 onClick={() => setTodos('')}>Clear</h4>
		</div>
	)
}

export default FilterItem
