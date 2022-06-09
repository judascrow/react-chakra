import { FaUsers, FaBoxOpen } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
import { MdHome } from "react-icons/md";

export const menu = [
  {
    title: "Home",
    icon: MdHome,
  },
  {
    title: "Products",
    icon: FaBoxOpen,
  },
  {
    title: "Users",
    icon: FaUsers,
  },
  {
    title: "Settings",
    icon: BsGearFill,
    sub: [
      {
        title: "Courts",
      },
      {
        title: "Slack",
      },
      {
        title: "Zapier",
      },
    ],
  },
];
