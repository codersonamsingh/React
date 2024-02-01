import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, text: "Hello World"}]

}





export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.fliter((todo) => todo.id=)
        },
    }

})
export const {addTodo, removeTodo}= todoSlice.action
export default todoSlice.reducers