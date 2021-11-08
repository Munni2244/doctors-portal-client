import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const Initialization=()=>{
    initializeApp(firebaseConfig);
}
export default Initialization