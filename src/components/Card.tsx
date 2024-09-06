import React from "react";
import { Card, CardHeader, CardFooter, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface romCardProps {
  tested: boolean;
  name: string;
  img: string;
  version: number;
  id: number;
}

const RomCards: React.FC<romCardProps> = ({
  tested,
  name,
  img,
  version,
  id,
}) => {
  return (
    <Card
      isFooterBlurred
      className="w-[300px] h-[350px] col-span-12 sm:col-span-5 hover:drop-shadow-2xl hover:scale-110 transition-all "
      isPressable
      onPress={() => (window.location.pathname = `/builds/${id}`)}
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start p-4">
        <p className="text-tiny text-black uppercase font-bold">
          {" "}
          {tested ? "Tested" : "!Tested"}{" "}
        </p>
        <h4 className="text-black font-medium text-2xl">{name}</h4>
      </CardHeader>
      <img
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={img}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between p-2">
        <div>
          <p className="text-black text-tiny">Android Version</p>
          <p className="text-black text-tiny">{version}</p>
        </div>
        <Button
          as={Link}
          className="text-tiny"
          color="primary"
          to={`/builds/${id}`}
          radius="full"
          size="sm"
        >
          Explore
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RomCards;
