import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider).then((result) => {
      console.log(result);
    }).catch((error) => {
        alert(error.message);
    })
    ;
  };
}
