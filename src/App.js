import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    hobbies: [],
    country: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? 
        (checked ? [...prevData[name], value] : prevData[name].filter(item => item !== value)) 
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with the following data: \nName: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}\nHobbies: ${formData.hobbies}\nCountry: ${formData.country}\nMessage: ${formData.message}`);

    // alert(JSON.stringify(formData, null, 2));
    console.log('Form data:', formData);
    // Pass the data to another component or store it
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name:</Label>
          <Input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
          />
        </FormGroup>

        <FormGroup>
          <Label>Gender:</Label>
          <label>
            <Input 
              type="radio" 
              name="gender" 
              value="male" 
              checked={formData.gender === 'male'} 
              onChange={handleChange} 
            /> Male
          </label>
          <label>
            <Input 
              type="radio" 
              name="gender" 
              value="female" 
              checked={formData.gender === 'female'} 
              onChange={handleChange} 
            /> Female
          </label>
        </FormGroup>

        <FormGroup>
          <Label>Hobbies:</Label>
          <label>
            <Input 
              type="checkbox" 
              name="hobbies" 
              value="reading" 
              checked={formData.hobbies.includes('reading')} 
              onChange={handleChange} 
            /> Reading
          </label>
          <label>
            <Input 
              type="checkbox" 
              name="hobbies" 
              value="sports" 
              checked={formData.hobbies.includes('sports')} 
              onChange={handleChange} 
            /> Sports
          </label>
          <label>
            <Input 
              type="checkbox" 
              name="hobbies" 
              value="music" 
              checked={formData.hobbies.includes('music')} 
              onChange={handleChange} 
            /> Music
          </label>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="country">Country:</Label>
          <Select 
            id="country" 
            name="country" 
            value={formData.country} 
            onChange={handleChange}
          >
            <option value="">Select country</option>
            <option value="usa">USA</option>
            <option value="uk">UK</option>
            <option value="india">India</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message:</Label>
          <TextArea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
          />
        </FormGroup>

        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default Form;






// import React, { useState } from 'react';
// import './App.css';
// import ProductCard from './ProductCard';
// // import ProductListA from './ProductListA';
// // import ProductListB from './ProductListB';
 
// const productsA = [
//   { id: 1, name: "SG Shoes", price: 100, available: true, image: "https://5.imimg.com/data5/EO/MZ/BI/SELLER-65772240/sg-cricket-shoes-1000x1000.jpg" },
//   { id: 2, name: "DSC Shoes", price: 150, available: false, image: "https://th.bing.com/th/id/OIP.AqokQO1MeyMXAt2GylqMCwHaGu?rs=1&pid=ImgDetMain" },
//   { id: 3, name: "New Balance Shoes", price: 200, available: true, image: "https://res.cloudinary.com/moresport/image/upload/c_fill,f_auto,q_auto:good/v1575961299/uploads/assets/1147188-WHITEREDBLACK-1-lP6.jpg" }
// ];
 
// const productsB = [
//   { id: 1, name: "SG Bat", price: 45, available: true, image: "https://www.achivr.in/cdn/shop/products/sunny-tonny-icon-500-x-500.jpg?v=1645525114&width=540" },
//   { id: 2, name: "SS Bat", price: 55, available: true, image: "https://cdn11.bigcommerce.com/s-3954e/images/stencil/1280x1280/products/13013/23977/1__91147.1676054388.jpg?c=2" },
//   { id: 3, name: "DSC Bat", price: 95, available: false, image: "https://5.imimg.com/data5/ECOM/Default/2023/1/ZY/JE/BX/154451094/xlite-5-0-english-willow-cricket-bat-1-3a201add-35b3-439a-9f75-59ad7127f94d.jpg" }
// ];
 
 
// function App() {
//   const [showProductA, setShowProductA] = useState(true);
 
//   return (
//     <div className="App">
//       <h1>Product Viewer</h1>
//       <div>
//         <button onClick={() => setShowProductA(true)}>Cricket Shoes</button>
//         <button onClick={() => setShowProductA(false)}>Cricket Bats</button>
//       </div>
//       <div className="product-container">
//         {showProductA
//           ? productsA.map(product => <ProductCard key={product.id} product={product} />)
//           : productsB.map(product => <ProductCard key={product.id} product={product} />)
//         }
//       </div>
//     </div>
//   );
// }
 
// export default App;




// App.js
// App.js

// import React from 'react';
// import './App.css';
// import FormNew from './FormNew';
// import ContactForm from './ContactForm';
// import ParentComponent from './ParentComponent';
// import Parent from './Parent';
// import Product from './Product';
// import ProductCard from './ProductCardOne';
// import products from './products';
// // import ClassPage from './ClassPage';
// // import FunctioPage from './FunctioPage'
// // import LoginForm from './LoginForm';
// // import UserDataForm from './UserDataForm';
// // import ButtonUse from './ButtonUse';
// // import FormValidation from './FormValidation';
// // import Form from './Form';
// // import FormData from './FormData';
// // import Page from './Page';
// // import Counter from './Counter';
// // import CounterWithDependency from './CounterWithDependency';
// // import CounterWithEmptyDependency from './CounterWithEmptyDependency';
// // import CounterWithoutDependency from './CounterWithoutDependency';

// function App() {
//   return (
//     <div className="app">
//       <h2>Product Catalog</h2>
//       <div className="product-list">
//         {/* Render product cards using map */}
//         {products.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       {/* <FormNew></FormNew> */}
      
//       {/* <h2>Product Page</h2> */}
//       {/* Render the product card with showProduct as true */}
//       {/* <Product showProduct={true} /> */}
//       {/* Render the product card with showProduct as false */}
//       {/* <Product showProduct={false} /> */}
//       {/* <ContactForm></ContactForm> */}
//       {/* <CounterWithDependency></CounterWithDependency>
//       <CounterWithEmptyDependency></CounterWithEmptyDependency>
//       <CounterWithoutDependency></CounterWithoutDependency> */}
//       {/* <Counter></Counter> */}
//       {/* <FormData></FormData> */}
//       {/* <Form></Form> */}
//       {/* <Page></Page> */}
//       {/* <FormValidation></FormValidation> */}
//       {/* <ButtonUse></ButtonUse> */}
//       {/* <UserDataForm></UserDataForm> */}
//       {/* <ClassPage></ClassPage>
//       <FunctioPage></FunctioPage>
//       <LoginForm /> */}
//     </div>
//   );
// }

// export default App;


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
