import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  let [currentUser, setCurrentUser] = useState(null);
  //let Context = React.createContext();
  const onLoginHandler = (user) => {
    setCurrentUser(user);
  };

  const mainDiv = {
    border: "20px solid rgba(0,0,00.05)",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  };

  const headerDiv = {
    backgroundColor: "lightgray",
  };

  const footerDiv = {
    backgroundColor: "lightgray",
  };

  const bodyDiv = {
    flex: 1,
  };

  return (
    <div style={mainDiv}>
      <div style={headerDiv}>
        <Header />
      </div>
      <div style={bodyDiv}>
        {currentUser ? (
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
        ) : (
          <LoginScreen onLogin={() => onLoginHandler({ name: "Michael" })} />
        )}
      </div>
      <div style={footerDiv}>
        <Footer />
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
};
const Dashboard = ({ children }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {children}
    </div>
  );
};

const LoginScreen = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Screen</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

const DashboardNav = ({ children }) => {
  return (
    <div>
      <h1>DashboardNav</h1>
      {children}
    </div>
  );
};

const DashboardContent = ({ children }) => {
  return (
    <div>
      <h1>DashboardContent</h1>
      {children}
    </div>
  );
};

const WelcomeMessage = ({ user }) => {
  return <div>Welcome {user.name}</div>;
};

export default App;
