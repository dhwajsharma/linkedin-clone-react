import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed/Feed';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar'
import { selectUser } from './features/userSlice';
// import Feed from './components/Feed/Feed'
// import Widgets from './components/Widgets/Widgets'


function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Header />

      {!user ? <Login /> : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          {/* <Widgets /> */}
        </div>
      )}
    </div>
  );
}

export default App;
