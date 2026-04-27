import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import SubHeading from "../components/SubHeading";
import Heading from "../components/Heading";
import Button from "../components/Button";
import ImageOne from "../assets/image.png";
import ImageTwo from "../assets/image2.png";
import Progressbar from "../components/Progressbar";

const About = () => {
  return (
    <section>
      <Container>
        <Flex className='items-center'>
          <div className="w-1/2">
            <Flex className="justify-between">
            <div className="w-[370px] h-[480px] ">

              <Image className='w-full' src={ImageOne} />
            </div>
              <div className="flex flex-col justify-between">
                <div className="w-[170px] h-[225px] ">
                    <Image className='w-full' src={ImageTwo} />
                </div>
                <div className="w-[170px] h-[225px] ">
                   <Image className='w-full' src={ImageTwo} />
                </div>
              
              </div>
            </Flex>
          </div>
          <div className="w-1/2 pl-[30px]">
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

        <Flex className='justify-between my-20'>
          <Progressbar text="Graphic Design" number="70%"/>
          <Progressbar text="Graphic Design" number="40%"/>
          <Progressbar text="Graphic Design" number="90%"/>
          <Progressbar text="Graphic Design" number="60%"/>
       
        </Flex>

     
      </Container>
    </section>
  );
};

export default About;
