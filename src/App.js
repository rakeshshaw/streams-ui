import Header from "./components/layout/Header";
import { Route, Router, Switch } from "react-router-dom";
import StreamList from "./components/streams/StreamList";
import StreamCreate from "./components/streams/StreamCreate";
import StreamEdit from "./components/streams/StreamEdit";
import StreamDelete from "./components/streams/StreamDelete";
import StreamShow from "./components/streams/StreamShow";
import history from "./history";


function App() {
  return (
    <Router history={history}>
      <header>
        <Header />
        
        <Switch>
          <Route path="/" exact>
            <StreamList />
          </Route>
          <Route path="/streams/new" exact>
            <StreamCreate />
          </Route>
          <Route path="/streams/edit/:id" exact>
            <StreamEdit />
          </Route>
          <Route path="/streams/delete/:id" exact>
            <StreamDelete />
          </Route>
          <Route path="/streams/show/:id" exact>
            <StreamShow />
          </Route>
        </Switch>
        
      </header>

      <main></main>
      </Router>
  );
}

export default App;
