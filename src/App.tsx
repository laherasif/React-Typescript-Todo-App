import React from 'react';
import Addtodo from './componentes/Register/Addtodo';
import Home from './componentes/Home/Home'
import Header from './componentes/Home/Header'
import { Provider } from './componentes/UseContext/Context';
import { BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Edittodo from './componentes/Register/Edit';
import Footer from './componentes/Home/Footer';



const App: React.FC = () => {
 
  return (
    <Provider>
    <React.Fragment>
      <Router> 
        <Header/>
        <Switch>
        <Route exact path="/" component={Home}/>
       <Route  path="/new"  component={Addtodo}/>
       <Route  path="/edit/:id"  component={Edittodo}/>
       </Switch>
       <Footer/>
      </Router>

    </React.Fragment>
    </Provider>
  );
}

export default App;
