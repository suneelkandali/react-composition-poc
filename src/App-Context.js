import React, { useContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
let Context = React.createContext();

const App = () => {
  let [currentUser, setCurrentUser] = useState(null);

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
    <Context.Provider value={{ currentUser }}>
      <div style={mainDiv}>
        <div style={headerDiv}>
          <Header />
        </div>
        <div style={bodyDiv}>
          {currentUser ? (
            <Dashboard />
          ) : (
            <LoginScreen onLogin={() => onLoginHandler({ name: "Michael" })} />
          )}
        </div>
        <div style={footerDiv}>
          <Footer />
        </div>
      </div>
    </Context.Provider>
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
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardNav />
      <DashboardContent />
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

const DashboardNav = () => {
  return (
    <div>
      <h1>DashboardNav</h1>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <div>
      <h1>DashboardContent</h1>

      <WelcomeMessage />
    </div>
  );
};

const WelcomeMessage = () => {
  //let Context = React.createContext();
  let { currentUser } = React.useContext(Context);
  return <div>Welcome {currentUser.name}</div>;
};

export default App;
