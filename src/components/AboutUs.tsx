"use client";

import React from "react";
import Container from "./Container";

interface Props {
  title: string;
  subtitle: string;
  content?: string;
}

const AboutUs: React.FC<Props> = ({
  title,
  subtitle,
  content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos et accusantium voluptatum? Ex nam enim sed laborum? Excepturi, at nam?",
}) => {
  return (
    <section className="pt-36 pb-16 md:py-8">
      <Container className="space-y-2">

        <h1 className="text-[#029FE4] text-3xl font-semibold">{title}</h1>
        <p className="text-[18px] text-black">{subtitle}</p>
        <p className="text-sm">{content}</p>
      </Container>
    </section>
  );
};

export default AboutUs;
