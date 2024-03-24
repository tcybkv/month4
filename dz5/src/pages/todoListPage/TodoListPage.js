import React, { useState } from 'react';
import styles from './todoListPage.module.css';

function TodoListPage() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };

    const handleDeleteAll = () => {
        if (todos.length === 0) {
            alert('Список пуст');
        } else {
            setTodos([]);
        }
    };

    return (
        <div className={styles.todoListContainer}>
            <h1 className={styles.header}>Todo List</h1>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Введите дело"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTodo}>Добавить</button>
            </div>
            <ul className={styles.todoList}>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={handleDeleteAll} className={styles.deleteAllBtn}>
                Удалить все
            </button>
        </div>
    );
}

export default TodoListPage;
