import React, { useRef } from "react";
import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useEffect } from "react";

const ShareModal = ({ isOpen, onClose, post }) => {
  const shareRef = useRef(null);

  // Handle share logic 

  const handleShare = async () => {
    
    console.log("Sharing post with:", shareRef.current.value);
    onClose(); 
  };

  useEffect(() => {
    
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent bg={"#3a4750"} color={"white"} border={"1px solid gray"} maxW={"400px"}>
        <ModalHeader>Share</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <Flex gap={4} flexDir={"column"} maxH={"250px"} overflowY={"auto"}>
          
            {/* <UserOption name="User1" /> */}
            
          </Flex>
          <form style={{ marginTop: "2rem" }}>
            <Input placeholder="Enter username" size={"sm"} ref={shareRef} />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button type="button" ml={"auto"} size={"sm"} my={4} onClick={handleShare}>
                Share
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
