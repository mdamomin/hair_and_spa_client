import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { useEffect, useState } from 'react';
import firebaseConfig from '../Container/Website/Components/Login/firebase/firebase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  TwitterAuthProvider,
  updateProfile,
  GithubAuthProvider,
} from 'firebase/auth';

// Initialize firebase app
initializeApp(firebaseConfig);
getAnalytics(initializeApp(firebaseConfig));

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [loginData, setLoginData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);

  //   Create user using email and password
  const signupUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignupError('');
        setSignupSuccess(true);
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
      })
      .catch((error) => {
        setSignupError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   Login user using email and password
  const loginUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || '/';
        navigate(destination);

        setLoginError('');
      })
      .catch((error) => {
        setLoginError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Login using google
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setLoginError('');
      })
      .catch((error) => {
        setLoginError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Login using Twitter
  const twitterProvider = new TwitterAuthProvider();

  const twitterSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setLoginError('');
      })
      .catch((error) => {
        setLoginError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  // Login using github
  const githubProvider = new GithubAuthProvider();
  const githubSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const destination = location?.state?.from || '/';
        navigate(destination);
        setLoginError('');
      })
      .catch((error) => {
        setLoginError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  //   Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const handleOnBlur = (e) => {
    const displayName = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[displayName] = value;
    setLoginData(newLoginData);
  };

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setSignupSuccess(false);
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };
  return {
    user,
    signupUser,
    loginUser,
    logout,
    loginData,
    handleOnBlur,
    isLoading,
    signupError,
    loginError,
    signupSuccess,
    googleSignIn,
    twitterSignIn,
    githubSignIn,
  };
};

export default useFirebase;
