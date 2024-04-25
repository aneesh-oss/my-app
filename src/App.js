// App.js
// App.js

import React from 'react';
import './App.css';
import FormNew from './FormNew';
import ContactForm from './ContactForm';
import ParentComponent from './ParentComponent';
import Parent from './Parent';
import Product from './Product';
import ProductCard from './ProductCard';
import products from './products';
// import ClassPage from './ClassPage';
// import FunctioPage from './FunctioPage'
// import LoginForm from './LoginForm';
// import UserDataForm from './UserDataForm';
// import ButtonUse from './ButtonUse';
// import FormValidation from './FormValidation';
// import Form from './Form';
// import FormData from './FormData';
// import Page from './Page';
// import Counter from './Counter';
// import CounterWithDependency from './CounterWithDependency';
// import CounterWithEmptyDependency from './CounterWithEmptyDependency';
// import CounterWithoutDependency from './CounterWithoutDependency';

function App() {
  return (
    <div className="app">
      <h2>Product Catalog</h2>
      <div className="product-list">
        {/* Render product cards using map */}
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {/* <FormNew></FormNew> */}
      
      {/* <h2>Product Page</h2> */}
      {/* Render the product card with showProduct as true */}
      {/* <Product showProduct={true} /> */}
      {/* Render the product card with showProduct as false */}
      {/* <Product showProduct={false} /> */}
      {/* <ContactForm></ContactForm> */}
      {/* <CounterWithDependency></CounterWithDependency>
      <CounterWithEmptyDependency></CounterWithEmptyDependency>
      <CounterWithoutDependency></CounterWithoutDependency> */}
      {/* <Counter></Counter> */}
      {/* <FormData></FormData> */}
      {/* <Form></Form> */}
      {/* <Page></Page> */}
      {/* <FormValidation></FormValidation> */}
      {/* <ButtonUse></ButtonUse> */}
      {/* <UserDataForm></UserDataForm> */}
      {/* <ClassPage></ClassPage>
      <FunctioPage></FunctioPage>
      <LoginForm /> */}
    </div>
  );
}

export default App;


// App.js

// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';
// // import LoginPage from './LoginPage';
// // import SignupPage from './SignupPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={SignupPage} />
//         <Route path="/" component={LoginPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LoginPage from './LoginPage';
// import SignupPage from './SignupPage';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/signup" component={SignupPage} />
//         <Route path="/" component={LoginPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
