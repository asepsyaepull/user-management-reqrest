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
      <div className="container mx-auto p-4">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src={user.avatar} alt={user.first_name} />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{user.first_name} {user.last_name}</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">{user.email}</p>
              <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProfilePage;