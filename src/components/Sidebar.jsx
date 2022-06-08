import {
  Box,
  Collapse,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FaClipboardCheck, FaRss } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import { BsGearFill } from "react-icons/bs";
import { HiCode, HiCollection } from "react-icons/hi";
import { MdHome, MdKeyboardArrowRight } from "react-icons/md";

import SidebarItem from "./SidebarItem";

const SidebarContent = (props) => {
  const integrations = useDisclosure();

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
        <SidebarItem icon={MdHome}>Home</SidebarItem>
        <SidebarItem icon={FaRss}>Articles</SidebarItem>
        <SidebarItem icon={HiCollection}>Collections</SidebarItem>
        <SidebarItem icon={FaClipboardCheck}>Checklists</SidebarItem>
        <SidebarItem icon={HiCode} onClick={integrations.onToggle}>
          Integrations
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={integrations.isOpen && "rotate(90deg)"}
          />
        </SidebarItem>
        <Collapse in={integrations.isOpen}>
          <SidebarItem pl="12" py="2">
            Shopify
          </SidebarItem>
          <SidebarItem pl="12" py="2">
            Slack
          </SidebarItem>
          <SidebarItem pl="12" py="2">
            Zapier
          </SidebarItem>
        </Collapse>
        <SidebarItem icon={AiFillGift}>Changelog</SidebarItem>
        <SidebarItem icon={BsGearFill}>Settings</SidebarItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
