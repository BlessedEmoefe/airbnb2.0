import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/*Import the Header component */
// import Header from "../../components/header/header.component";
import UserType from "../../features/UserType/UserType.page";
// import { FlexibleDiv } from "../../components/flexibleDiv/flexibleDiv.component";
import Test from "../../features/Test/Test.screen";
import SignIn from "../../features/Authentication/SignIn/SignIn.page";
import Overview from "../../features/Overview/Overview.page";
import Customers from "../../features/Customers/Customers.page";
import IOU from "../../features/IOU/IOU.page";
import Fixed from "../../features/Fixed/Fixed.page";
import Profile from "../../features/Profile/Profile.page";
import { ModalContextProvider } from "../store/context/modalContext";
import CustomerOverView from "../../features/Customers/customerOverview";
const Routes = () => {
  return (
    <ModalContextProvider>
      <Router>
      <Switch>
        <Route exact component={UserType} path="/" />
        <Route component={Test} path="/test" />
        <Route component={SignIn} path="/signin" />
        <Route component={Overview} path="/overview" />
       
        <Route component={Customers} path="/customers" />
        <Route component={CustomerOverView} path="/customer-overview" />
        <Route component={IOU} path="/iou" />
        <Route component={Fixed} path="/fixed" />
        <Route component={Profile} path="/profile" />
        
      </Switch>
    </Router>
    </ModalContextProvider>
  );
};

export default Routes;
