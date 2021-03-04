import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home";
import {AddUser} from "./components/AddUser";
import {EditUser} from "./components/EditUser";
import 'bootstrap/dist/css/bootstrap.min.css';
import {GlobalProvider} from './context/GlobalState'


function App() {
    return (
        <div style={{margin: '2rem auto', maxWidth: '30rem'}}>
            <GlobalProvider>
                <Router>
                    <Switch>
                        <Route exact path='/'><Home/></Route>
                        <Route exact path='/add'><AddUser/></Route>
                        <Route exact path='/edit/:id'><EditUser/></Route>
                    </Switch>
                </Router>
            </GlobalProvider>
        </div>
    );
}

export default App;
