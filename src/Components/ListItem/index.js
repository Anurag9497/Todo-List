import React,{useState} from 'react';
import './index.css';

const ListItem = (props) => {
    const [edit, setEdit] = useState(false);
    const [editTodo, setEditTodo] = useState(props.obj.value);
    
    const handleEdit = () => {
        setEdit(true);
    };

    const handleEditing = (event) => {
        setEditTodo(event.target.value);
    };

    const handleSave = () => {
        if(editTodo!=="")
        {
            props.handleUpdate(props.obj.id, editTodo);
            setEdit(false);
        }
    };

    return(
        <>
            <span className="list">&#128073; {props.obj.value}</span>
            <button type="button" className="edit" onClick={handleEdit}>Edit</button>{" "}
            <button type="button" className="delete" onClick={() => props.handleDelete(props.obj.id)}>Delete</button><br/><br/>
            {edit &&
                <>
                    <textarea value={editTodo} className="editTask" onChange={handleEditing}></textarea><br/>
                    <button type="button" className="saveTask" onClick={handleSave}>Save</button>
                </>
            }
        </>
    );
};

export default ListItem;