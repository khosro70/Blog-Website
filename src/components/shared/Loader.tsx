import { LoaderPropsInterface } from "@/contracts/interfaces";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader: React.FC<LoaderPropsInterface> = ({ height, width }) => {
  return (
    <Oval
      visible={true}
      height={height}
      width={width}
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default Loader;
