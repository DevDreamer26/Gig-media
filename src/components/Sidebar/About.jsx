import { Box, Flex, Tooltip, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FcAbout } from "react-icons/fc";


const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        hasArrow
        label={"About the App"}
        placement='right'
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          _hover={{ bg: "whiteAlpha.400" }}
          borderRadius={6}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          onClick={onOpen}
          cursor="pointer"
        >
          <FcAbout />
          <Box display={{ base: "none", md: "block" }}>About</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About the App</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              Welcome to Gigmedia, a cool social media site! 😎
              Feel free to explore and share your feedback. 💬 We would love to hear from you about our project.
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              Contact us via email:{" "} <br />
              <ChakraLink href="mailto:bidyasagarhazarika@gmail.com" color="blue.500" fontWeight="bold">
                bidyasagarhazarika@gmail.com
              </ChakraLink>
              <br />
              <ChakraLink href="mailto:chinmoykoch12@gmail.com" color="blue.500" fontWeight="bold">
                chinmoykoch12@gmail.com
              </ChakraLink>
              <br />
              <ChakraLink href="mailto:indokalpasaikia1@gmail.com" color="blue.500" fontWeight="bold">
                indokalpasaikia1@gmail.com
              </ChakraLink>
            </Text>
            {/* <Text fontSize={{ base: "md", md: "lg" }} mb={4}>
              See more of our projects at{" "}
              <ChakraLink
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                color="blue.500"
                fontWeight="bold"
              >
                GitHub
              </ChakraLink>
              
            </Text> */}
            <ChakraLink
              href="https://github.com/DevDreamer26"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
              fontWeight="bold"
            >
              GitHub (Bidyasagar)
            </ChakraLink>
            <br />
            <ChakraLink
              href="https://github.com/Chinmoykoch"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
              fontWeight="bold"
            >
              GitHub (Chinmoy)
            </ChakraLink>
            <br/>
            <ChakraLink
              href="https://github.com/indokalpasaikia1"
              target="_blank"
              rel="noopener noreferrer"
              color="blue.500"
              fontWeight="bold"
            >
              GitHub (Indokalpa Saikia)
            </ChakraLink>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default About;
