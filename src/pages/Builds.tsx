import React from "react";
import { useParams } from "react-router-dom";

const Builds: React.FC = () => {
  const { id } = useParams();
  return <div> Builds {id}</div>;
};

export default Builds;
