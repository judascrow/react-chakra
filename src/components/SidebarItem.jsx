import { Flex, Icon, Link, useColorModeValue } from "@chakra-ui/react";

const NavItem = ({ icon, children, routerLink, ...rest }) => {
  const color = useColorModeValue("gray.600", "gray.300");

  return (
    <Link as={routerLink} style={{ textDecoration: "none" }}>
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

export default NavItem;
