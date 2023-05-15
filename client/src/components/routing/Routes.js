import React from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Alert from "../layout/Alert";
import Dashboard from "../dashboard/Dashboard";
import ProfileForm from "../profile-forms/ProfileForm";
import AddOrganization from "../profile-forms/AddOrganization";
// import AddExperience from "../profile-forms/AddOrganization";
import Acts from "../pages/Acts";
import Faqs from "../pages/Faqs";
import Careers from "../pages/Carrers";
import AnnualReturns from "../pages/AnnualReturns";
import AddEmployee from "../profile-forms/AddEmployee";
import Profiles from "../profiles/Profiles";
import Profile from "../profile/Profile";
import Posts from "../posts/Posts";
import Post from "../post/Post";
import NotFound from "../layout/NotFound";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/AboutUs";
import HelpAndSupport from "../pages/Help";
import ContactUs from "../pages/ContactUs";
import Employee from "../dashboard/Employee";

const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/faqs" component={Faqs} />
        <Route exact path="/contactUs" component={ContactUs} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/help" component={HelpAndSupport} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:id" component={Profile} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/org/emp" component={Employee} />
        <PrivateRoute exact path="/acts" component={Acts} />
        <PrivateRoute exact path="/returns" component={AnnualReturns} />
        <PrivateRoute exact path="/create-profile" component={ProfileForm} />
        <PrivateRoute exact path="/edit-profile" component={ProfileForm} />
        <PrivateRoute
          exact
          path="/add-organization"
          component={AddOrganization}
        />
        <PrivateRoute exact path="/add-employee" component={AddEmployee} />
        <PrivateRoute exact path="/posts" component={Posts} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
