import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const DetailProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />
      {/* <div className="container mx-auto p-4">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={user.avatar} alt={user.first_name} />
            </div>
            <div className="p-8 flex-1">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.first_name} {user.last_name}</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.email}</p>
              <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative w-full h-[300px]">
        <div className="w-full h-full bg-olive-600">
          {/* Cover image */}
          <img
            src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Profile picture */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-24">
          <div className="w-48 h-48 rounded-full border-4 border-white overflow-hidden bg-teal-900">
            <img
              src={user.avatar} alt={user.first_name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="text-center mt-28">
        <h1 className="text-4xl font-bold">{user.first_name} {user.last_name}</h1>
        <p className="text-gray-600 mb-4">{user.email}</p>
        <p className="text-gray-600 mb-4">Uzbekistan, Tashkent</p>
        <p className="text-gray-700 max-w-md mx-auto">
          I'm web designer. I work in programs like figma, adobe photoshop, adobe illustrator
        </p>

        <div className="flex justify-center gap-16 my-8">
          <div className="text-center">
            <p className="text-4xl font-bold">21</p>
            <p className="text-gray-600">Shots</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">238</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">101</p>
            <p className="text-gray-600">Following</p>
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <button className="bg-olive-700 text-white px-8 py-2 rounded-md hover:bg-olive-800 transition">
            Follow
          </button>
          <button className="border border-gray-300 px-8 py-2 rounded-md hover:bg-gray-50 transition">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProfilePage;