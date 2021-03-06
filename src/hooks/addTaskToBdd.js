import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebase/firebaseConfig";

const addTaskToBdd = async (value, uid) => {
  try {
    const docRef = await addDoc(collection(db, "tasks"), {
      done: false,
      order: 0,
      title: value,
      uid
    });
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export default addTaskToBdd