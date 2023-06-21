import React, {useState} from "react";
import axios from 'axios';

export default function TodoItem(props) {
    const { id, todo, isCompleted } = props;
    const [editValue, setEditValue] = useState(todo);
    const [isEditing, setEditing] = useState(false);

    const TOKEN_API = axios.create({
        baseURL: "https://www.pre-onboarding-selection-task.shop/",
        headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        },
    });

    const onChangeUpdate = (e) => {
        setEditValue(e.target.value);
    };

    const updateTodo = async () => {
        try {
            const response = await TOKEN_API.put(`/todos/${id}`, {
                isCompleted: isCompleted,
                todo: editValue,
            });
            if (!response) return;
        } catch (error) {
            alert(error);  
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await TOKEN_API.delete(`/todos/${id}`);
            if (!response) return;
        } catch (error) {
            alert(error);  
        }
    };

    return (
        <div className="item">
            {isEditing ? (
            <>
                <input type="checkbox" checked={isCompleted} />    
                <input type="text" value={editValue || ''} data-testid="modify-input" onChange={onChangeUpdate}/>
                <button data-testid="submit-button" onClick={updateTodo}> 제출</button>
                <button data-testid="cancel-button" onClick={() => setEditing(false)}>취소</button>   
            </>
            ) : (
            <>
                <label>
                    <input type="checkbox" checked={isCompleted} />
                    <span>{todo || ''}</span>
                </label>
                <button data-testid="modify-button" onClick={() => {
                    updateTodo();
                    setEditing(true);
                }}>
                    수정
                </button>
                <button data-testid="delete-button" onClick={() => deleteTodo(id)}>
                    삭제
                </button>
            </>
            )}
        </div>
    );
}