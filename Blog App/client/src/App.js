
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import AppWithRouterAccess from './AppWithRouterAccess';
// // import ContextProvider from './context/ContextProvider';
// import Header from './Components/Header';
// import Home from './Components/home/Home';
// import DetailView from './Components/post/DetailsView';
// import CreatePost from './Components/post/CreateView';
// import Update from './Components/post/UpdateView';

function App() {
  return (
    // <ContextProvider>
      <BrowserRouter>
        <AppWithRouterAccess/>
        {/* <Header />
        <Box style={{marginTop: 64}}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/details/:id' component={DetailView} />
            <Route exact path='/create' component={CreatePost} />
            <Route exact path='/update/:id' component={Update} />
          </Switch>
        </Box> */}
      </BrowserRouter>
    // </ContextProvider>
  );
}

export default App;