import { Fragment } from 'react';
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
} from '../../utils/firebase/firebase.utils';

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
    console.log('user doc ref: ', userDocRef);
  };

  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In</button>
    </Fragment>
  );
};

export default SignIn;
