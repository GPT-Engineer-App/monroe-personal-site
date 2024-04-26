import { Box, Flex, Heading, Text, Image, Link, VStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <Heading fontSize="xl" textAlign="center">
          James Monroe
        </Heading>
        <Text mt={4} textAlign="center" color="gray.600">
          Software Developer | Tech Enthusiast | Lifelong Learner
        </Text>
      </Box>
      <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1585076800527-972613dc816c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMG9mJTIwSmFtZXMlMjBNb25yb2V8ZW58MHx8fHwxNzE0MTM2NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="James Monroe" m={4} />
      <VStack spacing={2} align="stretch">
        <Text fontSize="md" p={5} textAlign="center">
          Hello! I'm James Monroe, a passionate software developer with a focus on creating impactful and user-friendly applications. I specialize in modern web technologies and am always eager to learn and adopt new technologies.
        </Text>
        <Text fontSize="md" p={5} textAlign="center">
          I have a strong background in computer science, and I've worked on various projects ranging from small business websites to large-scale enterprise applications. My goal is to leverage technology to solve real-world problems and make a positive difference.
        </Text>
      </VStack>
      <Flex justify="center" mt={5}>
        <Link href="https://github.com/jamesmonroe" isExternal>
          <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" m={2} colorScheme="gray" />
        </Link>
        <Link href="https://linkedin.com/in/jamesmonroe" isExternal>
          <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" m={2} colorScheme="blue" />
        </Link>
        <Link href="mailto:james.monroe@example.com">
          <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" m={2} colorScheme="red" />
        </Link>
      </Flex>
    </Flex>
  );
};

export default Index;
