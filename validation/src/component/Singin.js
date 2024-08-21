import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
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

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'email':
        if (!value) error = 'Email is required';
        break;
      case 'password':
        if (!value) error = 'Password is required';
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
    const newErrors = {};
    const emailRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegular.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (formData.password.length > 20) {
      newErrors.password = 'Password incorrect';
    }

    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
    });

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      verifySignIn();
    } else {
      setErrors(validationErrors);
    }
  };

  const verifySignIn = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const storedUser = storedUsers.find((u) => u.email === formData.email);

    if (storedUser) {
      if (storedUser.password === formData.password) {
        localStorage.setItem('authToken', 'yourAuthToken');
        navigate('/profile', { state: { user: storedUser } });
      } else {
        setErrors({ password: 'Incorrect password' });
      }
    } else {
      setErrors({ email: 'Invalid email' });
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
            className="size"
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
            className="size"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

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
