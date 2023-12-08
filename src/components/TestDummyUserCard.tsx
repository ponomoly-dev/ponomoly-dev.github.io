import Image from "next/image";
import React, { FC } from "react";

// interface TestDummyUserCardProps {
//   firstName: string;
//   id: string;
//   lastName: string;
//   picture: string;
//   title: string;
// }

const TestDummyUserCard: FC<any> = ({
  firstName,
  id,
  lastName,
  picture,
  title,
}) => {
  const fullText = `${title}. ${firstName} ${lastName}`;
  return (
    <div>
      <Image
        width={100}
        height={100}
        src={picture}
        alt={fullText + "'s picture"}
      />
      {fullText}
    </div>
  );
};

export default TestDummyUserCard;
