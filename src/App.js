import { Route, Switch } from "react-router-dom";
import Header from "./pages/shared/header/Header";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Footer from "./pages/shared/Footer";
import Services from "./pages/services/Services";
import About from "./pages/shared/About";
import ServiceDetails from "./pages/serviceDetails/ServiceDetails";
import AuthProvider from "./context/AuthProvider";
import Signup from "./pages/account/Signup";
import Signin from "./pages/account/Signin";
import Profile from "./pages/profile/Profile";
import PrivateRoute from "./firebase/PrivateRoute";
import AboutSection from "./pages/about/AboutSection";
import Therapists from "./pages/therapists/Therapists";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Switch>
        <Route path="/studiomedicodaripecora/profile" component={Profile} />
        <Route path="/studiomedicodaripecora/account" component={Signup} />
        <Route path="/studiomedicodaripecora/signin" component={Signin} />
        <PrivateRoute path="/studiomedicodaripecora/service/:id">
          <ServiceDetails />
        </PrivateRoute>
        <PrivateRoute path="/studiomedicodaripecora/services">
          <Services />
        </PrivateRoute>
        <PrivateRoute path="/studiomedicodaripecora/therapists">
          <Therapists />
        </PrivateRoute>
        <Route path="/studiomedicodaripecora/about">
          <About />
          <AboutSection />
        </Route>
        <Route exact path="/studiomedicodaripecora/home" component={Home} />
        <Route exact path="/studiomedicodaripecora/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </AuthProvider>
  );
}

export default App;
