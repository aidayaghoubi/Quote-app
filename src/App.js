import { Redirect, Route, Switch } from "react-router-dom";
import QuetesDetail from "./pages/quotes-datals";
import AllQuotes from "./pages/all-quotes";
import NewQuotes from "./pages/new-quotes";
import Layout from "./components/layout/Layout";

import './index.css'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes/:quoteId' >
          <QuetesDetail />
        </Route>
        <Route path='/quotes' exact>
          <AllQuotes />
        </Route>

        <Route path='/new-quote'>
          <NewQuotes />
        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
