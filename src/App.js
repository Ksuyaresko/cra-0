import React from 'react';
import './App.css';
import Main from "./components/main/main";
import Header from "./components/header/header";
import User from "./components/user/user";
import Footer from "./components/footer/footer";


function App() {
  const user = {
      name: 'Johny Dou',
      avatar: 'logo.png',
      followers: 4356,
      following: 532,
      link: 'https://'
  }
  return (
    <div className="App">
        <Main>
            <Header name={user.name}/>
            <User user={user}/>
            <Footer/>
        </Main>
    </div>
  );
}

export default App;
