import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import StoreProvider from './store/StoreProvider';

import HomeView from './views/Home';
// import LoadingView from './components/shared/LoadingView';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import CardView from "./views/Card";
import SettingsView from "./views/Settings";

function AuthRoute({children, ...rest}) {
  const user = useSelector(({auth}) => auth.user)
  const onlyChild = React.Children.only(children);

  return (
    <Route
      {...rest}
      render={props =>
        user ?
          React.cloneElement(onlyChild, {...rest, ...props}) :
          <Redirect to="/" />
      }
    />
  )
}


const ContentWrapper = ({children}) => {
  const isDarkTheme  = useSelector(({settings}) => settings.isDarkTheme);
  return (
    <div className={`content-wrapper ${isDarkTheme ? 'dark' : 'light'}`}>
      {children}
    </div>
  )
}

function ElectronReactApp() {
  // const dispatch = useDispatch();
  // const isChecking = useSelector(({auth}) => auth.isChecking);
  // const isOnline = useSelector(({app}) => app.isOnline);
  // const user = useSelector(({auth}) => auth.user);
  // const isChecking = useSelector(({auth}) => auth.isChecking ? auth.isChecking : false);
  // const isOnline = useSelector(({app}) => app.isOnline ? app.isOnline : false);
  // const user = useSelector(({auth}) => auth.user ? auth.user : null);

  return (
    <Router>
      <ContentWrapper>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
          <AuthRoute path="/home">
            <HomeView />
          </AuthRoute>
          <AuthRoute path="/card/:id">
            <CardView />
          </AuthRoute>
          <AuthRoute path="/settings">
            <SettingsView />
          </AuthRoute>
        </Switch>
      </ContentWrapper>
    </Router>
  )
}

export default function App() {
  return (
    <StoreProvider>
      <ElectronReactApp />
    </StoreProvider>
  )
}
