// services/AuthService.js

import auth from '@react-native-firebase/auth';

const AuthService = {
  login: async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      console.log('User logged in');
    } catch (error) {
      console.error('Login error:', error);
    }
  },
  signup: async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User signed up');
    } catch (error) {
      console.error('Signup error:', error);
    }
  },
};

export default AuthService;
