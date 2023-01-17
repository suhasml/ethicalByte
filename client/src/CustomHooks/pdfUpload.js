/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable max-len */
import { storage } from '../utils/firebase';

const pdfUpload = (file) => {
    // Create a storage reference from our storage service
  const storageRef = storage.ref();
  // Create a child reference
  const pdfsRef = storageRef.child('pdfs');
  // pdfsRef now points to 'pdfs'
  const uploadTask = pdfsRef.put(file);
  uploadTask.on(
    'state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
    },
    () => {
      // Handle successful uploads on complete
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    },
  );
};

export default pdfUpload;