import {storage} from "../database/firebase.js";
import { ref, getDownloadURL, uploadBytesResumable, updateMetadata, uploadBytes, uploadString } from "firebase/storage";


async function uploadImage(groupId, file){

    const storageRef = ref(storage, `files/${groupId}`);
    const uploadImage = uploadBytesResumable(storageRef, file);


    // await uploadBytes(storageRef, file).then((snapShot) => {
    //     console.log(snapShot)
    // }).catch((error) => {
    //     console.log(error)
    // });

    try {
        const storageRef = ref(storage, `files/${groupId}`);
        const snapshot = await uploadString(storageRef, file);

        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
    }catch (error){
        console.error('Erro ao fazer upload da imagem:', error);
        throw error;
    }
}

export { uploadImage }