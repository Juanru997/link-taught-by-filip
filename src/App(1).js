import React, { useState } from 'react';
import './second.css';

function App() {
  return (

    // <div className="Iphone">

    //  </div>
    //  <Iphone />
    <Content />

  );
}

function Content() {
  return (
    <html>


      <head>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Tomorrow|Turret+Road|ZCOOL+KuaiLe&display=swap');
</style>

      </head>


      <body>
        <div className="Appse">
          <div className="Fen">

            <div id="diiv">
              <p id="headline">Wait!</p>
              <p id="new">What if... </p></div>
            <div className="idea">
              <p>You wait a second and think about your purposes every time you open up a social media app? </p>
              <div >
                <button className='myButton' type="button">Start Now!</button></div>

              <div className="descr">
                <h2>
                Our app is designed to be bound with  social media apps like Wechat, Instagram, Facebook, etc. 
                </h2>
                <h2 className="how">
                Every time the you click into the app, a notification will pop up, asking you to wait a few seconds and think about what you want to do with it this time. 
                </h2>
                <h2 className="how">
                A quick single click only allows a single interface. If you want to switch, just choose again. 
                </h2>
                <h2 className="how">
                At the same time, daily, weekly, monthly summaries are available for comparisons of usage.
                </h2>
              </div>
            </div>
          </div>
          <img src="https://i.loli.net/2019/11/17/rVMNZwmIWcyfoKS.png" height="700vw" />
        </div>
      
      </body>



    </html>

  )

}


export default App;

