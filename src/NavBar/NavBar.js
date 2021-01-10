import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <StyledNav>
            <nav>
                <a href='https://github.com/' target='_blank'>
                    <span>Github</span>
                </a>
                <a href='https://www.linkedin.com/feed/' target='_blank'>
                    <span>LinkedIn</span>
                </a>
            </nav>
        </StyledNav>
    );
};

const StyledNav = styled.div`
    nav {
        position: absolute;
        text-align: center;
        padding-top: 1rem;
        right: 1rem;
        top: 0;
        display: flex;
        flex-direction: column;
        a {
            text-decoration: none;
            margin-bottom: 1rem;
            color: white;
            font-size: 1.4rem;
            cursor: pointer;
            border: solid 2px white;
            padding: 0.5rem 1.5rem 0.5rem 1.5rem;
            transition: 0.5s;
        }
        a:hover {
            color: black;
            background-color: white;
            border: solid 2px black;
            transition: 0.5s;
        }
    }
`;
export default NavBar;
