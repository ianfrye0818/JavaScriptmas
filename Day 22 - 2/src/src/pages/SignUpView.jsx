import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../auth';
import PropTypes from 'prop-types';
import gift from '../assets/icon.png';

//this function contains the UI and Logic for handling signing up a user -> it is very similar to the login view.
const SignUpView = (props) => {
  const [formData, updateFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  //updates the form as the user types username/password
  function handleUpdateFormData(e) {
    const { name, value } = e.target;
    updateFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //this function makes a call to the firebase auth system and creates an instance of the user - it also sets the user
  const handleSignUp = (e) => {
    const { username, password } = formData;
    e.preventDefault();
    createUserWithEmailAndPassword(auth, username, password).catch((error) => {
      setError(error.code.split('/')[1]);
    });
    updateFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className='container'>
      <img src={gift} />
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <label className='label' htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={handleUpdateFormData}
          placeholder='Username'
        />
        <label className='label' htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleUpdateFormData}
          placeholder='Password'
        />
        <button>Sign Up</button>
      </form>

      <p style={{ color: 'white' }}>
        Already have an account?{' '}
        <span
          style={{
            color: '333',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={props.handleToggleMode}
        >
          Sign In
        </span>
      </p>
      {/* this gets an error from the firestore and diplays it to the user if there was a probelm */}
      {error && (
        <p
          style={{
            color: 'red',
            fontSize: '16px',
            textTransform: 'capitalize',
            textAlign: 'center',
            marginTop: '20px',
          }}
        >
          {error.split('-').join(' ')}!
        </p>
      )}
    </div>
  );
};

SignUpView.propTypes = {
  handleToggleMode: PropTypes.func.isRequired,
};

export default SignUpView;
