import { getAuth, createUserWithEmailAndPassword,getIdToken ,GoogleAuthProvider,signInWithPopup ,signOut,onAuthStateChanged ,signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";
import { useEffect, useState } from "react";
import Initialization from "../component/Login/firebase/firebase.init";

Initialization();
const useFirebase=()=>{
    const [loading, setLoading]=useState(true);
    const [user, setUser]=useState({});
    const [error, setError]=useState('');
    const [admin, setAdmin]=useState(false);
    const [token, setToken]=useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    ///register pass useer
    const RegisterUser=(email,password,name, history)=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const newUser={email, displayName:name};
                setUser(newUser);
                saveUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                    // Profile updated!
                    // ...
                  }).catch((error) => {
                    // An error occurred
                    // ...
                  });
                  
                history.replace('/')
                setError("");

     })
        .catch((error) => {
         setError(error.message);
             // ..
         })
         .finally(()=> setLoading(false));
    }

    //sign in with google
    const signInWithGoogle=(location, history)=>{
        setLoading(true)
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
           saveUser(user.email, user.displayName, 'Put')
          setError("");
          const destination= location?.state?.from || '/';
          history.replace(destination);
        }).catch((error) => {

            setError(error.message);
          
        }).finally(()=> setLoading(false));

    }

    //login
 const login=(email, password,location, history)=>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const destination= location?.state?.from || '/';
        history.replace(destination);
     setError("");
    })
    .catch((error) => {
        setError(error.message);

    })
    .finally(()=> setLoading(false));

 }
    
    //onState Change
    useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
          getIdToken(user)
          .then(idToken => setToken(idToken))
            } else {
                setUser({})
            }
            setLoading(false)
          });
          return ()=> unSubscribe;
    },[])

    ///sign out
    const logOut=()=>{
        signOut(auth).then(() => {
        //  setUser({})
           }).catch((error) => {

          })
          .finally(()=> setLoading(false));

    }

    ///save user database
    const saveUser=(email, displayName,method)=>{
        const user={email,displayName}
    fetch('https://shielded-shore-27798.herokuapp.com/users',{
        method: method,
        headers:{ 'content-type' : 'application/json'},
        body:JSON.stringify(user)
    })
    .then()
    }

    /// make admin
    useEffect(()=>{
        fetch(`https://shielded-shore-27798.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))

    },[user.email])


    return {
        user,
        token,
        admin,
        RegisterUser,
        logOut,
        login,
        loading,
        error,
        signInWithGoogle
    }


}
export default useFirebase;