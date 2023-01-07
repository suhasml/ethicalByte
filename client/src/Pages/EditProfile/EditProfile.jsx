import React from 'react';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';
import Navbar from '../../Shared-Components/Navbar';
import { ProfileForm } from '../../Shared-Components/Profile/ProfileForm/ProfileForm';

export const EditProfile = () => {
  useDocumentTitle('EthicalByte | Edit Profile');

  return (
    <div>
      <Navbar />
      <ProfileForm />
    </div>
  );
};
