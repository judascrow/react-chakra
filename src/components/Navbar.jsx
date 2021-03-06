import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ sidebar }) => {
  const navigate = useNavigate();

  const logout = async () => {
    navigate("/login");
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      w="full"
      px="4"
      bg={useColorModeValue("blue.500", "gray.800")}
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
      <Flex align="center" mr={4}>
        {/* <Icon as={FaBell} cursor="pointer" mr={5} /> */}
        <Menu isLazy>
          <MenuButton colorScheme="inherit" as={Button}>
            <Flex align="center" color="gray.100">
              <Avatar size="sm" name="thongchai" cursor="pointer" />
              <Box ml="3" align="left">
                <Text fontSize="sm" fontWeight="semibold">
                  ธงชัย สมตัว
                </Text>
              </Box>
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Change Password</MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Navbar;
