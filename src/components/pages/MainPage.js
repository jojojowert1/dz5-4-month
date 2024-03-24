import React, {useState} from 'react';

const MainPage = () => {
    const [inputValue, setInputValue]= useState('')
    const [todos, setTodos]= useState([])

    const setInput = (elem)=>{
        setInputValue(elem.target.value)
    }
    const setTodo = ()=>{
        if (inputValue.trim() !==''){
            setTodos([...todos, inputValue])
            setInputValue('')
        }
    }

    const deleteAll = ()=>{
        if (todos.length > 0){
            setTodos([])
        } else {
            alert('Список пуст')
        }
    }


    return (
        <div>
            <input type="text" placeholder='дело' value={inputValue} onChange={setInput}/>
            <button onClick={setTodo}>Добавить дело</button>
            <ul>
                {
                    todos.map((todo, index)=> <li key={index}>{todo}</li>)
                }
            </ul>
            <button onClick={deleteAll}>Удалить все</button>

        </div>
    );
};

export default MainPage;