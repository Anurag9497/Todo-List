import React,{useState} from "react";
import "./App.css";
import List from '../List';

function App() 
{
	const [item,setItem] = useState([]);
	const [todo, setTodo] = useState("");
	let newId = 0;

	const getnewId = () => {
		item.filter((obj) => obj.id>newId ? newId=obj.id : newId);
		newId++;
		return newId;
	};

	const handleChange = (event) => {
		setTodo(event.target.value);
	};

	const addItem = () => {
		if(todo==="")
			return;
		const itemObj = {
			id: getnewId(),
			value: todo,
		};
		const copiedList = [...item, itemObj];
		setItem(copiedList);
		setTodo("");
	};

	const handleDelete = rmvId => {
		let copiedList = item.filter((obj) => {
			if(obj.id!==rmvId)
				return obj;
			else
				return;
		});
		setItem(copiedList);
	};

	const handleUpdate = (currId, editTodo) => {
		let copiedList = item.map((obj) => {
			if(obj.id===currId)
			{
				let newObj = {...obj};
				newObj.value = editTodo;
				return newObj;
			}
			else
				return obj;
		});
		setItem(copiedList);
	};

	return (
	<div id="main">
		<h1>TODO LIST</h1>
		<div>
			<textarea id="task" value={todo} onChange={handleChange}></textarea><br/>
			<button type="button" id="btn" onClick={addItem}>Add</button>
		</div>
		<div>
			<br/><List item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
		</div>
	</div>
	);
}


export default App;
