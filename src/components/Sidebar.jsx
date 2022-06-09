import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink as RouterLink } from "react-router-dom";

import SidebarItem from "./SidebarItem";
import { menu } from "../configs/Menu";

const Sidebar = (props) => {
  const subMenu = useDisclosure();

  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
        <Text
          fontSize="2xl"
          ml="2"
          color={useColorModeValue("brand.500", "white")}
          fontWeight="semibold"
        >
          JUDAS UI
        </Text>
      </Flex>

      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        {menu.map((item, index) =>
          item.sub === undefined ? (
            <SidebarItem
              key={index}
              icon={item.icon}
              as={RouterLink}
              to={"/" + item.title.toLowerCase()}
            >
              {item.title}
            </SidebarItem>
          ) : (
            <div key={index}>
              <SidebarItem icon={item.icon} onClick={subMenu.onToggle}>
                {item.title}
                <Icon
                  as={MdKeyboardArrowRight}
                  ml="auto"
                  transform={subMenu.isOpen && "rotate(90deg)"}
                />
              </SidebarItem>
              <Collapse in={subMenu.isOpen}>
                {item.sub.map((sub, i) => (
                  <SidebarItem key={i}>
                    <Text pl="8">{sub.title}</Text>
                  </SidebarItem>
                ))}
              </Collapse>
            </div>
          )
        )}
      </Flex>
    </Box>
  );
};

export default Sidebar;
