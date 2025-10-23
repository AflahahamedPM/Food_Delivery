import RestaurentMenu from "@/components/restaurent/RestaurentMenu";
import { restaurentDatas } from "@/utils/restaurentData";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;

  const restaurent = restaurentDatas?.find(
    (resData) => resData?.uId === id
  );

  if (!restaurent) {
    return <p className="text-center mt-10 text-xl">Restaurant not found.</p>;
  }

  return <RestaurentMenu restaurentData={restaurent}/>;
};

export default page;
