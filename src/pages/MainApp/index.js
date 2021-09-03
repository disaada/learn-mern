import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CreateBlog, DetailBlog, Home } from "@pages";
import Header from "./Header";
import Footer from "./Footer";
import './main-app.scss'

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <div className="header-wrapper">
        <Header />
      </div>
      <div className="content-wrapper">
        <Router>
          <Switch>
            <Route path="/create-blog" component={CreateBlog} />
            <Route path="/detail-blog" component={DetailBlog} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </div>
  );
};

export default MainApp;
