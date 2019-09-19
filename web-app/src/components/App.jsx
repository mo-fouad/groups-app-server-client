import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
// Redux
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as groupActions from "../redux/actions/groupsActions";

// components & layouts
import Header from "./Fragments/Header";
import Footer from "./Fragments/Footer";
import WelcomeHeading from "./Fragments/WelcomeHeading";
import Users from "./usres/Users";
import UserDetails from "./usres/OneUsre";
import AddNewUser from "./usres/AddNewUser";
import Groups from "./groups/Groups";
import GroupDetails from "./groups/OneGroup";
import AddNewGroup from "./groups/AddNewGroup";

// ReactStrap
import { Container, Spinner } from "reactstrap";

class App extends Component {
   componentDidMount() {
      // firing functions to listen to Data
      const { requestingGroupsData } = this.props;
      requestingGroupsData();
   }

   // subbmiting new Group
   submitAddNewGroup = FormData => {
      const { addNewGroupAction } = this.props;
      addNewGroupAction(FormData);
   };

   render() {
      console.log(this.props);
      const { groupsData } = this.props;

      if (groupsData && groupsData.length > 0) {
         return (
            <Fragment>
               <Header />
               <Container>
                  <Switch>
                     <Route exact path="/">
                        <WelcomeHeading />
                     </Route>
                     <Route exact path="/groups">
                        <Groups groupsData={groupsData} />
                     </Route>
                     <Route exact path="/users">
                        <Users />
                     </Route>
                     <Route exact path="/group/:group_name">
                        <GroupDetails />
                     </Route>
                     <Route exact path="/user/:user_name">
                        <UserDetails />
                     </Route>
                     <Route exact path="/add-new-form">
                        <AddNewGroup formSubmitted={this.submitAddNewGroup} />
                     </Route>
                     <Route exact path="/add-new-user">
                        <AddNewUser />
                     </Route>
                  </Switch>
               </Container>
               <Footer />
            </Fragment>
         );
      } else {
         return (
            <div className="loading-screen">
               <Spinner color="primary"></Spinner>
            </div>
         );
      }
   }
}

// Map Redux state to props
function mapStateToProps(state) {
   const { groupsData } = state.groupReducers;
   return {
      groupsData
   };
}

// Map action to props so we have access to different actions
function mapDispatchToProps(dispatch) {
   return bindActionCreators(Object.assign({}, groupActions), dispatch);
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(App);
