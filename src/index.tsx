import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type ProfilePageType = {
    postsData:Array<PostType>
}

export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}

export type AppData = {
    postsData: Array<PostType>
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}


export const dialogs = [
    {id: 1, name: "Bill"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Max"},
    {id: 4, name: "Sasha"},
    {id: 5, name: "Victor"},
    {id: 6, name: "Peter"}
]

export const messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "Yo"},
]


export const posts = [
    {id: 1, message: "post1", likesCount: 25},
    {id: 2, message: "post2", likesCount: 10},
    {id: 3, message: "post3", likesCount: 22}
]


ReactDOM.render(
    <React.StrictMode>
        <App postsData={posts} dialogsData={dialogs} messagesData={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
