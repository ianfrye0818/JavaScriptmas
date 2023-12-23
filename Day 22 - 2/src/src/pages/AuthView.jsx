import { useState } from 'react';
import LoginView from './loginView';
import SignUpView from './SignUpView';

/// View for setting up the different routes that can be taken depending on if user wants to sign in or set up an account

const AuthView = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleToggleMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return isSignUp ? (
    <LoginView handleToggleMode={handleToggleMode} />
  ) : (
    <SignUpView handleToggleMode={handleToggleMode} />
  );
};
export default AuthView;
