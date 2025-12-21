import React from "react";
import Card from "../components/Homepage/Card";
import { useLocation, useParams } from "react-router-dom";
import { getGymsByLocation } from "../utils/gymApi";
import { useQuery } from "@tanstack/react-query";
import { getGymlocation } from "../utils/gymlocationApi";

const Categories = () => {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["getGymByLocation", id],
    queryFn: () => getGymsByLocation(id),
  });

  console.log({ id });
if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div className="relative   bg-white px-6 md:px-12 lg:px-24 pt-32 mb-1">
        <h1 className="text-4xl font-bold mb-3 text-black mt-28 md:mt-12">JAKRTA</h1>
        <p className="text-gray-700 text-xl lg:font-bold">
          {/* Finding Fitcamp gym location nearby ‘Jakarta’ City */}
          Explore gyms in this location
        </p>
      </div>
        <Card data={data?.data} />
      <div className="mb-8 flex justify-center">
        <button className="bg-black text-white hover:bg-gray-700 px-3.5 py-1.5 rounded-full font-light">Load More</button>
      </div>
    </>
  );
};

export default Categories;
