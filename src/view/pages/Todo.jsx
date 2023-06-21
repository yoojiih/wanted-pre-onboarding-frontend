import React, {useEffect, useState} from "react";
import WithTodoAuth from "../../hoc/WithTodoAuth";
import HttpUtil from "../../util/HttpUtil";
import TodoItem from "../components/TodoItem";

/**
 * 투두 페이지 view
 *
 * @return Element 랜더링 뷰
 */
function Todo() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = async () => {
        try {
            const response = await HttpUtil.call("GET_TODOS");
            console.log(response)
            setTodos(response);
        } catch (error) {
            alert(error);  
        }
    };
    const createTodo = async () => {
        try {
            const response = await HttpUtil.call("POST_TODOS", {  id: 1,
                todo: newTodo, isCompleted: false, userId: 1});
            if (!response) return;
            console.log(response);
            getTodos();
            } catch (error) {
                alert(error);   
            }
    };

    const logOut = () => {
        localStorage.removeItem('access_token');
        window.location.reload();
    };

    const handleChnageNewTodo = (e) => {
        e.preventDefault();
        setNewTodo(e.target.value);
    };

    
    return (
        <div className="page">
            <h3>
                <b>Todo PAGE</b>
            </h3>
            <>
                {todos && todos.map(value => {
                    return (
                    <TodoItem
                        id={value.id}
                        todo={value.todo}
                        isCompleted={value.isCompleted}
                        getTodos={getTodos}
                    />
                    );
                })}
            </>
            <input data-testid="new-todo-input" onChange={handleChnageNewTodo} />
            <button data-testid="new-todo-add-button" onClick={() => createTodo()}>추가</button>
            <button onClick={logOut}>로그아웃</button>
        </div>
    );
}
export default WithTodoAuth(Todo, null);