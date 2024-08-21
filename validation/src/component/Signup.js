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
        const emailRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!value) {
          error = 'Email is required';
        } else if (!emailRegular.test(value)) {
          error = 'Invalid email';
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
        if (!value) {
          error = 'Birthdate is required';
        }
        break;
      case 'address':
      case 'city':
      case 'state':
      case 'country':
        if (!value) error = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
        break;
      case 'password':

        const passwordRegular = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!value) {
          error = 'Password is required';
        } else if (!passwordRegular.test(value)) {
          error = 'Password must be 8 characters long and include one uppercase letter, one lowercase letter, and a number';
        }
        break;
      case 'confirmPassword':
        if (!value) {
          error = 'Confirm password is required';
        } else if (value !== formData.password) {
          error = 'Passwords and Confirm Password must be the same';
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
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (errors[key]) {
        validationErrors[key] = errors[key];
      }
    });
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      submitForm();
    } else {
      setErrors(validationErrors);
    }
  };

  const submitForm = () => {
    const filteredData = {};

    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() !== '' && !errors[key]) {
        filteredData[key] = formData[key];
      }
    });

    if (Object.keys(filteredData).length > 0) {
      let storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check for duplicate email or phone
      const emailExists = storedUsers.some(user => user.email === filteredData.email);
      const phoneExists = storedUsers.some(user => user.phone === filteredData.phone);

      if (emailExists) {
        alert("A user with this email already exists.");
      } else if (phoneExists) {
        alert("A user with this phone number already exists.");
      } else {
        storedUsers.push(filteredData);
        
        // Store users list in localStorage
        localStorage.setItem('users', JSON.stringify(storedUsers));

        // Store user-unique key
        const userKey = `user_${filteredData.email}`;
        localStorage.setItem(userKey, JSON.stringify(filteredData));
        
        alert("Signup successful and data stored.");

        // Clear form successful 
        setFormData({
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

        // Clear errors after successful 
        setErrors({});
      }
    } else {
      alert("Please fill out all required fields.");
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
          <input
            type="checkbox"
            id="showPassword"
            onChange={handleTogglePassword}
            checked={showPassword}
          />
          <label htmlFor="showPassword">Show Password</label>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
