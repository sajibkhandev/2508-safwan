import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ImageOne from "../assets/image.png";
import ImageTwo from "../assets/image2.png";

const About = () => {
  return (
    <section>
      <Container>
        <Flex>
          <div className="w-1/2">
            <Flex className="justify-between">
              <Image src={ImageOne} />
              <div className="flex flex-col justify-between">
                <Image src={ImageTwo} />
                <Image src={ImageTwo} />
              </div>
            </Flex>
          </div>
          <div className="w-1/2">
            <SubHeading text="About Me" />
            <Heading text="I Enjoy Solving Problems With Scalable Solutions" />
            <p>
              Quisruam est, qui dolorem ipsum quia dolor sit amet, consecteaur
              aeci velit, sed quia non numquam eius modi tempora incidunt lao
              magnam aliquam quaerat voluptatem reprehenderit.
            </p>
            <p>
              Modi tempora incidunt ut lao magnam aliquam quaerat voluptatem
              reprehenderit non numquam eius.
            </p>
            <Button text="Download CV"/>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default About;
