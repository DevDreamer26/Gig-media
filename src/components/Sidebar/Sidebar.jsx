import { Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { IoMdLogOut } from "react-icons/io";

import useLogout from "../../hooks/useLogout";
import SidebarItems from "./SidebarItems";

const Sidebar = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"#00204a"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }} bg={"#3a4750"} color={"white"}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor="pointer"
        >
          <img src="/logo.png" alt="Gigcrafters logo" />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          p={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
          cursor="pointer"
        >
          <img src="/gig.png" alt="Mobile logo Gigcrafters" />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          <SidebarItems />
        </Flex>

        {/* LOGOUT */}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            <IoMdLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
              color={"#fff"}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
