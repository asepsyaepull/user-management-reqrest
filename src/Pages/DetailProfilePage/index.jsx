import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import DetailProfileInfo from '../../components/ui/detailProfileInfo';
import DetailProfileSkills from '../../components/ui/detailProfileSkill';
import DetailProfileExperiences from '../../components/ui/detailProfileExperience';
import { MessageSquare, Phone } from 'lucide-react';

const DetailProfilePage = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


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
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 transition-colors">
        <span className="loading loading-dots loading-lg text-gray-900 dark:text-white"></span>
      </div>
    );
  }

  return (
    <div className='bg-gray-50 dark:bg-gray-900 transition-colors'>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="min-h-screen ">
        <div className="max-w-5xl mx-auto pb-20">
          {/* breadcrumb */}
          <div className="breadcrumbs text-sm text-gray-900 dark:text-white py-8">
            <ul>
              <li><a>Home</a></li>
              <li><a onClick={() => navigate('/list-user')} >List User</a></li>
              <li>Detail User</li>
            </ul>
          </div>
          <div className="relative">
            <div className="h-36 sm:h-48 bg-olive-600 rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1633432695542-b2c8e2b8a26c?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Cover"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -bottom-16 left-4 sm:left-8">
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
            <div className="absolute top-4 right-4 flex gap-2 sm:gap-3">
              <button className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-olive-700 dark:text-olive-300" />
              </button>
              <button className="p-2 sm:p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-olive-700 dark:text-olive-300" />
              </button>
            </div>
          </div>
          <div className="mt-20 px-4 sm:px-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{`${user.first_name} ${user.last_name}`}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{user.email}</p>
          </div>
          <DetailProfileInfo />
          <DetailProfileSkills />
          <DetailProfileExperiences />
        </div>
      </div>
    </div > 
  );
};

export default DetailProfilePage;