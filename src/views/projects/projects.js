import { React, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import routes from "../../routes";
import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

import collab from "../../assets/projects/lets_collab_img3.jpg";
import blog from "../../assets/projects/bloggers.jpg";
export default function Projects() {
  const textColorPrimary = useColorModeValue(
    "secondaryGray.900",
    "lightpeach.100"
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const getActiveRoute = (routes) => {
    for (let i = 0; i < routes.length; i++) {
      if (window.location.href.indexOf(routes[i].path) !== -1) {
        return routes[i].navbarDisplayName;
      }
    }
  };

  return (
    <Box>
      <Navbar displayText={getActiveRoute(routes)} />
      <Box pt={{ base: "20px", md: "40px", xl: "40px" }}>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb="40px"
        ></Flex>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap="25px"
          alignItems="center"
          justifyContent="center"
        >
          
          
          <ProjectCard
            projectImage={collab}
            projectName={"Task Manager"}
            aboutProject={" Full-featured Task Manager web application"}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
            projectLiveLink="https://lets-collab.vercel.app/"
            projectLink="https://github.com/junaid7535/Task-Manager"
          />
          
          <ProjectCard
            projectImage={blog}
            projectName={"Authentication System"}
            aboutProject={"Secure Authentication System"}
            techStack={"EXPRESS JS, NODE JS, REACT JS, MONGODB"}
            projectLiveLink="https://bloggers-arena.vercel.app/"
            projectLink="https://github.com/junaid7535/authentication"
          />
          
          {/* <ProjectCard
            projectImage={mtrans}
            projectName={"Machine Translation"}
            aboutProject={
              "Translated Texts With The Help Of Encoder- Decoder LSTM Model And Attention Mechanism"
            }
            techStack={"LSTM, ENCODER-DECODER, ATTENTION MECHANISM"}
            projectLink="https://github.com/Rahul1582/Bloggers-Arena"
          /> */}
        </SimpleGrid>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="Center"
          mt="40px"
          mb="40px"
        >
          <Text color={textColorPrimary} fontSize="2em" textAlign="center">
            {"<BLOGS/>"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="50px"
          alignItems="center"
          justifyContent="center"
        >
          
        </SimpleGrid>
      </Box>
    </Box>
  );
}
