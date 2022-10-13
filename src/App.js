import React from "react";
import "./App.css";
import ClickSayHello from "./components/ClickSayHello";
import MyContacts from "./components/MyContacts";

const App = () => {

    return (
      <div className="h-[100vh] bg-slate-500">
        <h1 style={{textAlign: 'center', fontSize: '40px'}}>Mes Contacts</h1>
        <MyContacts />
        <hr />
        <ClickSayHello />
      </div>
    );
  
}

export default App;
