import { auth } from './auth';
import { onAuthStateChanged } from 'firebase/auth';
import AuthView from './pages/AuthView';
import MainView from './pages/mainView';

import { useState, useEffect } from 'react';

//this is the main app - it will display the mainview if there is a user and display the authview if there is not one.
const App = () => {
  const [user, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return user ? <MainView /> : <AuthView />;
};

export default App;
