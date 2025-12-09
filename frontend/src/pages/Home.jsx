import React from 'react';
import Search from '../components/Homepage/Search';
import GymLocation from '../components/Homepage/GymLocation';
import LatestAdded from '../components/Homepage/LatestAdded';
import Card from '../components/Homepage/Card';
import JoinedUser from '../components/Homepage/JoinedUser';
import Membership from '../components/Homepage/Membership';
import { useQuery } from '@tanstack/react-query';
import { getGym } from '../utils/gymApi';


function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['gyms'],
    queryFn: getGym
  });

  return (
    <>
      <Search />
      <GymLocation />
      <LatestAdded />
     <Card data={data} />
      <JoinedUser />
      <Membership />
    </>
  );
}

export default Home;