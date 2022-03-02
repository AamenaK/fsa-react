import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Name from "./Name";


function App() {
   //const h1 = React.createElement('h1', {}, 'Hello React' );
   //const img = React.createElement('img', { width : 100, height : 100, src : 'https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg'})
   //const div = React.createElement('div', {}, [h1, img]);
   //return div;

   return <div>
       <Header />
       <h1>Hello React</h1>
       <Name personName = "John" age = "21" />
       <Name personName = "Joseph" age = "20" />
       <img width = "200" height = "200" src = "https://4.img-dpreview.com/files/p/E~TS590x0~articles/3925134721/0266554465.jpeg" />
       <Footer />
   </div>
}


export default App;

