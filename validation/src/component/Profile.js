import React, { useState, useEffect } from 'react';
import '../App.css'; 

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    birthdate: '',
    address: '',
    city: '',
    state: '',
    country: '',
  });
  const [errors, setErrors] = useState({});




  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    setUsers(storedUsers);
  }, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };


  const validateForm = () => {
    const newErrors = {};
    const fields = ['firstName', 'lastName', 'email', 'password', 'phone', 'birthdate', 'address', 'city', 'state', 'country'];
    fields.forEach(field => {
      if (!formData[field]) newErrors[field] = `${field.replace()} is required`;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSave = () => {
    if (validateForm()) {
      const storedUsers = JSON.parse(localStorage.getItem('users'));
      if (isAdding) {
        if (storedUsers.find(user => user.email === formData.email)) {
          alert('User  email already exists.');
          return;
        }
        storedUsers.push(formData);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        localStorage.setItem(`user_${formData.email}`, JSON.stringify(formData));
      } 
      else {
        const updatedUsers = users.map(user => 
          user.email === currentUser.email ? formData : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem(`user_${formData.email}`, JSON.stringify(formData));
        setUsers(updatedUsers);   
        setIsEditing(false);  
      }
      resetForm();
    }
  };


  const handleEdit = (user) => {
    setCurrentUser(user);
    setFormData(user);
    setIsEditing(true);
    setIsAdding(false);
  };


  const handleDelete = (email) => {
    const updatedUsers = users.filter(user => user.email !== email);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.removeItem(`user_${email}`);
    setUsers(updatedUsers);
    resetForm();
  };



  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
      birthdate: '',
      address: '',
      city: '',
      state: '',
      country: '',
    });
    setErrors({});
    setCurrentUser({});
    setIsAdding(false);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">  
      <h1>User Profile ACC</h1>

      {isAdding || isEditing ? (
        <div className="form-container">
         
          <form onSubmit={(e) => e.preventDefault()} className="signup-form">
            <table>
              <tbody>
                {['firstName', 'lastName', 'email', 'password', 'phone', 'birthdate', 'address', 'city', 'state', 'country'].map(field => (
                  <tr key={field}>
                    <th>{field.replace().toUpperCase()}</th>
                    <td>
                      <input
                        type={field === 'email' ? 'email' : field === 'password' ? 'password' : field === 'birthdate' ? 'date' : 'text'}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}   
                        disabled={field === 'email' && isEditing}
                      />
                      {errors[field] && <p className="error">{errors[field]}</p>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <button type="button" onClick={handleSave}>
             Save 
            </button>

            <button type="button" onClick={resetForm}>
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <div>
         
          <table className="user-list">
            <thead>
              <tr>
                {['First Name', 'Last Name', 'Email', 'Phone', 'Birthdate', 'Address', 'City', 'State', 'Country', 'Actions'].map(header => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.email} style={{padding:"10px"}}>
                  <td className='pad'>{user.firstName}</td>
                  <td className='pad'>{user.lastName}</td>
                  <td className='pad'>{user.email}</td>
                  <td className='pad'>{user.phone}</td>
                  <td className='pad'>{user.birthdate}</td>
                  <td className='pad'>{user.address}</td>
                  <td className='pad'>{user.city}</td>
                  <td className='pad'>{user.state}</td>
                  <td className='pad'>{user.country}</td>
                  <td>
                    <button onClick={() => handleEdit(user)}>Edit</button>
                    <button onClick={() => handleDelete(user.email)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Profile;



