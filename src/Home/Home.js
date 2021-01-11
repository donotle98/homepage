import React, { useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import styled from 'styled-components';

const Home = () => {
    const [currTime, setCurrTime] = useState(null);

    useEffect(() => {
        setInterval(() => {
            setCurrTime(new Date().toLocaleString());
        }, 1000);
    });
    return (
        <StyledHome>
            <div className='background-image'></div>
            <div className='nav-bar'>
                <NavBar />
            </div>
            <div className='timestamp'>
                <h1>{currTime}</h1>
            </div>
            <div className='todo-btn'>
                <span>Todo List</span>
            </div>
            {/* <div>
                <Todo />
            </div> */}
        </StyledHome>
    );
};

const StyledHome = styled.div`
    .nav-bar {
        z-index: 1000;
    }
    .background-image {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1000;
        background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
            url('https://images.unsplash.com/photo-1521464302861-ce943915d1c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80');
        background-size: cover;
        background-position: no-repeat;
    }

    .timestamp {
        color: white;
        height: 100%;
        width: 100%;
        display: flex;
        position: fixed;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
    }

    .todo-btn {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        text-decoration: none;
        margin-bottom: 1rem;
        color: white;
        font-size: 1.4rem;
        cursor: pointer;
        border: solid 2px white;
        padding: 0.5rem 1.5rem 0.5rem 1.5rem;
        transition: 0.5s;
    }

    .todo-btn:hover {
        color: black;
        background-color: white;
        border: solid 2px black;
        transition: 0.5s;
        box-shadow: -20px -20px white;
    }
`;

export default Home;
