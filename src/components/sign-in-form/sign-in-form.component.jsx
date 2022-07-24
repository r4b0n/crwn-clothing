import { useState, useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

import './sign-in-form.styles.scss';

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  signInUserFromEmailPassword,
  //createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        //const userDocRef = await createUserDocFromAuth(response.user);
        //console.log('user doc ref: ', userDocRef);
      }
    };
    fetchUser();
  }, []);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInUserFromEmailPassword(email, password);
      resetFormFields();
    } catch (err) {
      if (err.code === 'auth/wrong-password') {
        alert('incorrect password');
      } else if (err.code === 'auth/wrong-password') {
        console.log('');
      }
      switch (err.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(err.message);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Aready have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='btns-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
          <Button
            type='button'
            style={{ display: 'none' }}
            onClick={signInWithGoogleRedirect}
          >
            Sign In with Google Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
