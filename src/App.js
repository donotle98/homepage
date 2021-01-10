import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Home from './Home/Home';

const App = () => {
    return (
        <>
            <Router>
                <StyledWrapper>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                    </Switch>
                </StyledWrapper>
            </Router>
        </>
    );
};

export default App;
const StyledWrapper = styled.div``;
