import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const Navbar = ({ sidebar }) => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={useColorModeValue("blue.400", "gray.800")}
      borderBottomWidth="1px"
      borderColor={useColorModeValue("inherit", "gray.700")}
      h="14"
    >
      <IconButton
        aria-label="Menu"
        display={{ base: "inline-flex", md: "none" }}
        onClick={sidebar.onOpen}
        icon={<FiMenu />}
        colorScheme="blue"
      />
      <Flex px="4" py="5" align="center"></Flex>

      <Flex align="center">
        <Icon color="white" as={FaBell} cursor="pointer" />
        <Avatar ml="4" size="sm" name="thongchai" cursor="pointer" mr={3} />
      </Flex>
    </Flex>
  );
};

export default Navbar;
