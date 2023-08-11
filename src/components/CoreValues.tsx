import React from "react";
import Container from "./Container";
import Image from "next/image";

const CoreValues = () => {
  const values = [
    {
      title: "Dedication",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem, amet eligendi voluptate atque asperiores numquam ut voluptates aliquam odio?",
    },
    {
      title: "Intellectual",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem, amet eligendi voluptate atque asperiores numquam ut voluptates aliquam odio?",
    },
    {
      title: "Curiosity",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident dolorem, amet eligendi voluptate atque asperiores numquam ut voluptates aliquam odio?",
    },
  ];
  return (
    <Container>
      <div className="flex py-16 flex-col md:flex-row md:items-start items-center gap-4">
        <div className="md:flex-[0.6]">
          <h1 className="font-semibold text-blue-500 text-center md:text-start text-4xl">
            Our Core Values
          </h1>
          <p className="text-[#777777] leading-8 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius atque
            odit, consequuntur reprehenderit facere iste ab magni aspernatur,
            earum assumenda, mollitia doloremque! Fugit id ex quisquam nesciunt
            doloribus officia natus dolorem! Aliquam nemo possimus optio esse
            nulla voluptatibus dolores quos?
          </p>
          <p className="text-[#777777] mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima vel
            quod possimus ipsam sequi nesciunt dolore laboriosam ipsa quia
            cupiditate.
          </p>
          <ul className="py-8 flex flex-col space-y-4">
            {values.map((value, i) => (
              <div className="flex items-start gap-x-4" key={i}>
                <div>
                  <div className="flex items-center gap-x-2">
                    <div className="h-[2px] w-8 bg-black"></div>

                    <p className="text-2xl ">{value.title}</p>
                  </div>

                  <p className="text-gray-500 pl-10">{value.content}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>

        <Image
          width={0}
          height={0}
          sizes="100vw"
          className="object-cover h-full w-full  md:flex-[0.4]"
          src="/assets/core-values.png"
          alt="core-values"
        />
      </div>
    </Container>
  );
};

export default CoreValues;
