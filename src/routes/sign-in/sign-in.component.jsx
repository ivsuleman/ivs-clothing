import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const loginWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    console.log(
      "🚀 IRFAN-LOG ~ file: sign-in.component.jsx:6 ~ loginWithGoogle ~ response:",
      response
    );
  };
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={loginWithGoogle}>Sign in with Google Pop-Up</button>
    </div>
  );
};

export default SignIn;
