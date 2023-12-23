import { signOut } from 'firebase/auth';
import { MdLogout } from 'react-icons/md';
import {
  addToFirestore,
  deleteFromFirestore,
  subscribeToChristmasList, // Import the new function for real-time updates
  auth,
} from '../auth'; // Adjust the path based on your project structure

import gift from '../assets/icon.png';

import { useState, useEffect } from 'react';

const MainView = () => {
  const user = auth.currentUser;
  const [christmasList, setChristmasList] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [imgsrc, setImgSrc] = useState(gift);

  console.log(user);
  useEffect(() => {
    // Subscribe to real-time updates
    const unsubscribe = subscribeToChristmasList(user, (data) => {
      setChristmasList(data);
    });

    // Unsubscribe when the component unmounts or when needed
    return () => {
      unsubscribe();
    };
  }, [user]);

  function celebrateGif() {
    setImgSrc(
      'https://media.tenor.com/qg8K8VOmzJwAAAAi/party-popper-confetti.gif'
    );
    setTimeout(() => {
      setImgSrc(gift);
    }, 1500);
  }

  function handleInputChange(e) {
    setNameInput(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (nameInput.trim()) {
      addToFirestore(user, nameInput);
      setNameInput('');
    }
  }

  function handleDeleteItem(docId) {
    deleteFromFirestore(user, docId);
    celebrateGif();
  }

  function handlLogOut() {
    signOut(auth);
  }

  return (
    <div className='container'>
      <MdLogout className='log-out-btn' onClick={handlLogOut} />
      <img src={imgsrc} alt='Celebration' />
      <h1>Gift App</h1>
      <h2 className='user-welcome'>
        Welcome back{' '}
        {user.displayName ? user.displayName : user.email.split('@')[0]}
      </h2>
      <form className='input-fields' onSubmit={handleFormSubmit}>
        <input
          type='text'
          onChange={handleInputChange}
          placeholder='Frode'
          value={nameInput}
        />
        <button id='add-button' type='submit'>
          Add Name
        </button>
      </form>
      <ul id='people-list'>
        {christmasList.map((person) => (
          <li onDoubleClick={() => handleDeleteItem(person.id)} key={person.id}>
            {person.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainView;
