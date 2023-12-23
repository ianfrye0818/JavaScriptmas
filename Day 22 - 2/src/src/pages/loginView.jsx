import { useState } from 'react';
import PropTypes from 'prop-types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGoogle } from '../auth';
import { auth } from '../auth';
import { FaGoogle } from 'react-icons/fa';
import gift from '../assets/icon.png';

//this view contains UI and Logic for loggin user in w/ FireBase Authentication
const LoginView = (props) => {
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

  //reaches out to the FireBase auth and signs in using username & password
  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    signInWithEmailAndPassword(auth, username, password)
      .then(() => {
        setError('');
      })
      .catch((error) => {
        console.log(error);
        setError(error.code.split('/')[1]);
      });
  };
  return (
    <div className='container'>
      <img src={gift} />
      <h1>Sign In</h1>
      <form onSubmit={handleLogin}>
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
        <button className='btn'>Sign In</button>
      </form>

      {/* added the ability to sign in with google -> function can be found in auth.js with the rest of the Firebase Functions */}
      <button onClick={signInWithGoogle}>
        <FaGoogle /> Sign in with Google
      </button>

      <p style={{ color: 'white' }}>
        Need an account?{' '}
        <span
          style={{
            color: '333',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={props.handleToggleMode}
        >
          Sign Up
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

LoginView.propTypes = {
  handleToggleMode: PropTypes.func.isRequired,
};

export default LoginView;
