// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Signup from '../src/component/SignUp';
import Signin from '../src/component/Singin';
import Header from '../src/component/Header';
import Home from './component/Home';

// const isAuthenticated = () => {
//   // This function should check if the user is authenticated.
//   // For simplicity, we'll assume a token is stored in localStorage when logged in.
//   return localStorage.getItem('authToken') !== null;
// };

// const PrivateRoute = ({ element }) => {
//   return isAuthenticated() ? element : <Navigate to="/signin" />;
// };

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<h1>Welcome! Please choose a form.</h1>} />
            <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;



// ====================================================================================================




import React, { useState } from 'react';
import '../App.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthdate: '',
    address: '',
    city: '',
    state: '',
    country: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'firstName':
      case 'lastName':
        if (!value) {
          error = `${name === 'firstName' ? 'First name' : 'Last name'} is required`;
        }
        break;

      case 'email':
        const emailRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          error = 'Email is required';
        } else if (!emailRegular.test(value)) {
          error = 'Invalid email format';
        }
        break;

      case 'phone':
        const phoneRegular = /^[0-9]{10}$/;
        if (!value) {
          error = 'Phone is required';
        } else if (!phoneRegular.test(value)) {
          error = 'Phone number must be 10 digits';
        }
        break;

      case 'birthdate':
        if (!value) error = 'Birthdate is required';
        break;

      case 'address':
        if (!value) error = 'Address is required';
        break;

      case 'city':
        if (!value) error = 'City is required';
        break;

      case 'state':
        if (!value) error = 'State is required';
        break;

      case 'country':
        if (!value) error = 'Country is required';
        break;

      case 'password':
        const passwordRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!value) {
          error = 'Password is required';
        } else if (!passwordRegular.test(value)) {
          error = 'Password must be at least 8 characters ';
        }
        break;

      case 'confirmPassword':
        if (!value) {
          error = 'Confirm password is required';
        } else if (value !== formData.password) {
          error = 'Passwords do not match';
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validate = () => {
    const validationErrors = {};

    // Validate all fields ssubmit 
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
    });

    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form data:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <input
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          value={formData.birthdate}
          onChange={handleChange}
        />
        {errors.birthdate && <p className="error">{errors.birthdate}</p>}

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="error">{errors.city}</p>}

        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p className="error">{errors.state}</p>}

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
        />
        {errors.country && <p className="error">{errors.country}</p>}

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <input
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <div>
          <input type="checkbox" id="showPassword" onChange={handleTogglePassword} checked={showPassword} />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;




// ========================================================================================================================



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Ensure this path is correct

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      if (formData.email === 'agravatnikhil2410@gmail.com' && formData.password === '12345678') {
        console.log('Form data:', formData);
        navigate('/home'); 
      } else {
        setErrors({ form: 'Invalid password' });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        
        {errors.form && <p className="error">{errors.form}</p>}

        <div className="checkbox-container">
          <input
            type="checkbox"
            id="showPassword"
            onChange={handleTogglePassword}
            checked={showPassword}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>
        
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;


// ======================================================================================================================




import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/signin');
  };

  return (
    <div className="home-container">
      <h2>Home</h2>
      <ul>
        <li>User List</li>
        <li>Edit</li>
        <li>Delete</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;



// =========================================================================================================================




  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  li {
    margin: 0 15px;
  }
  
  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  
  /* Singin - SingUp css vali  */
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .error {
    color: red;
    font-size: 16px; /* Adjust size as needed */
    margin-top: 7px; /* Space between input and error message */
  }