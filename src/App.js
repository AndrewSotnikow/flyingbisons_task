import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NewsListPage from "./components/pages/NewsListPage/NewsListPage";
import AlbumPage from "./components/pages/AlbumPage/AlbumPage";
import Menu from "./components/molecules/Menu/Menu";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/news">
            <NewsListPage />
          </Route>
          <Route path="/album">
            <AlbumPage />
          </Route>
          <Redirect to="/news" />
        </Switch>
        <Menu
          title={["News list", "Album"]}
          styles={["m-menu", "a-button a-button--active"]}
        />
      </Router>
    </>
  );
}

export default App;
