import React from 'react';
import Image from 'next/image';
import ProfileImg from '../../../public/assets/header/User-Profile-PNG.png'
import Layout from '@/src/components/Layout/UserLayout';

const Profile = () => {
  return (
   <>
   <Layout>     <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-center mb-4">
        <Image src={ProfileImg} alt="Profile picture of Juu" className="rounded-full w-32 h-32 object-cover" />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">juu</h1>
          <p className="text-gray-600">developer</p>
          <p className="text-gray-600">  670663 </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray-700">kannur , kerala</p>
        </div>
      </div>
    </div>
    </Layout>

   </>
  );
}

export default Profile;
