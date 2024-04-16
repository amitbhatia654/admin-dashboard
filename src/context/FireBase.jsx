import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FireBaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyAfx9sexwhGBkzYMqb7LE_ojgIYjSQqe_k",
  authDomain: "dashboard-75cea.firebaseapp.com",
  projectId: "dashboard-75cea",
  storageBucket: "dashboard-75cea.appspot.com",
  messagingSenderId: "210084194599",
  appId: "1:210084194599:web:91ade06c3529052994e102",
};

export const useFirebase = () => useContext(FireBaseContext);

const firebaseApp = initializeApp(firebaseConfig); //creating instance of firebase app
const firebaseAuth = getAuth(firebaseApp); // creating instance of firebase authentication
const fireStore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const FireBaseProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("dashboard") || "");
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  });
  const signupUserWithEmailAndPass = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      return "Register Successfully";
    } catch (error) {
      return error.message;
    }
  };

  const signInWithEmailAndPass = async (email, password) => {
    try {
      const res = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      localStorage.setItem("dashboard", "UserLogin");

      return "Loggin SuccessFully";
    } catch (error) {
      return error.message;
    }
  };

  const createEmployee = async (data) => {
    // const imageRef = ref(
    //   storage,
    //   `uploads/coverImage/${Date.now()}-${image.name}`
    // );
    // const uploadResult = await uploadBytes(imageRef, image);

    const result = await addDoc(collection(fireStore, "employees"), {
      empName: data.empName,
      empEmail: data.empEmail,
      empPhone: data.empPhone,
      empDepartment: data.empDepartment,
      empAddress: data.empAddress,
    });

    // console.log("resultts", result)

    return result.id;
  };

  const getAllPosts = () => {
    return getDocs(collection(fireStore, "employees"));
  };

  const getPostbyId = async (id) => {
    const docRef = doc(fireStore, "employees", id);
    const result = await getDoc(docRef);
    return result.data();
  };

  const getImageUrl = (path) => {
    return getDownloadURL(ref(storage, path));
  };

  const isUserLoggedIn = user ? user : null;

  const SignOutUser = () => {
    signOut(firebaseAuth);
    localStorage.removeItem("dashboard");
  };

  const deletePost = async (id) => {
    await deleteDoc(doc(fireStore, "employees", id));
    return "post Deleted Successfully";
  };

  const UpdatePost = async (id, title, image, description) => {
    try {
      const imageRef = ref(
        storage,
        `uploads/coverImage/${Date.now()}-${image.name}`
      );
      const uploadResult = await uploadBytes(imageRef, image);

      const PostRef = doc(fireStore, "employees", id);
      const res = await updateDoc(PostRef, {
        title,
        imageUrl: uploadResult.ref.fullPath,
        description,
      });
      return res;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  };

  return (
    <FireBaseContext.Provider
      value={{
        signupUserWithEmailAndPass,
        signInWithEmailAndPass,
        isUserLoggedIn,
        createEmployee,
        getAllPosts,
        getPostbyId,
        getImageUrl,
        deletePost,
        SignOutUser,
        UpdatePost,
      }}
    >
      {props.children}
    </FireBaseContext.Provider>
  );
};
