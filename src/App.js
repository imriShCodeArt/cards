import loadable from "@loadable/component";
import React from "react";
import { hot } from "react-hot-loader/root";
import Register from "../shared/account/Register";

//  ******* clears console after each code update ******
window.addEventListener("message", function onWebpackMessage(e) {
  console.clear();
});
//  *****************************************************

const Avatar = loadable(()=>import('components/data/Avatar'))

const App = () => {
  return (
    <div className='container'>
      <Avatar />
      <Register />
      <div>Name: App</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
};

export default hot(App);
