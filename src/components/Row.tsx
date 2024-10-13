import React from "react";
import { Link } from "react-router-dom";

type RowProps = {
  index: number;
  date: string;
  tested: boolean;
  link: string;
};

const Row: React.FC<RowProps> = ({ index, date, tested, link }) => {
  return (
    <tr key={index} className="border-t-1 text-center">
      <td>{index}</td>
      <td>{date.substring(0, 10)}</td>
      <td>{tested ? "Yes" : "No"}</td>
      <td className="bg-gradient-to-b from-white text-transparent to-transparent bg-clip-text">
        <Link to={link}>Download</Link>
      </td>
    </tr>
  );
};

export default Row;
