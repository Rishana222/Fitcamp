import React from 'react';
import Search from '../components/Homepage/Search';
import GymLocation from '../components/Homepage/GymLocation';
import LatestAdded from '../components/Homepage/LatestAdded';
import Card from '../components/Homepage/Card';
import JoinedUser from '../components/Homepage/JoinedUser';
import Membership from '../components/Homepage/Membership';

function Home() {
  return (
    <>
      <Search />
      <GymLocation />
      <LatestAdded />
      <Card />
      <JoinedUser />
      <Membership />
    </>
  );
}

export default Home;