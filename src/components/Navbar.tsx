import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { pathname } = location;

  const navLinks = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Roms",
      route: "/roms",
    },
    {
      title: "Upload",
      route: "/upload",
    },
    {
      title: "About",
      route: "/about",
    },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="text-white bg-[#fff] bg-opacity-5 rounded-lg absolute"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Fleur_Hub</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navLinks.map((link, index) =>
          link.route == pathname ? (
            <NavbarItem key={index} isActive>
              <Link color="foreground" to={link.route}>
                {link.title}
              </Link>
            </NavbarItem>
          ) : (
            <NavbarItem key={index}>
              <Link color="foreground" to={link.route}>
                {link.title}
              </Link>
            </NavbarItem>
          ),
        )}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            to="/roms"
            variant="bordered"
            radius="full"
          >
            Let's Explore
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="rounded-xl p-5 m-2 bg-opacity-5 bg-white text-white">
        {navLinks.map((link, index) =>
          link.route === pathname ? (
            <NavbarMenuItem key={`${link.title}-${index}`} isActive>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navLinks.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                to={link.route}
                size="lg"
              >
                {link.title}
              </Link>
            </NavbarMenuItem>
          ) : (
            <NavbarMenuItem key={`${link.title}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === navLinks.length - 1
                      ? "danger"
                      : "foreground"
                }
                className="w-full"
                to={link.route}
                size="lg"
              >
                {link.title}
              </Link>
            </NavbarMenuItem>
          ),
        )}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
