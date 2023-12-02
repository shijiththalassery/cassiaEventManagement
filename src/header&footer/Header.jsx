import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
  NavbarMenuToggle,
  NavbarMenu
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { useLocation } from 'react-router-dom';



export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    "Home",
    "Gallery",
    "Contact us",
    "About",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />

        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={currentPath === '/'}>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === '/gallery'}>
          <Link color="foreground" href="/gallery" >
            Gallery
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === '/contactUs'}>
          <Link color="foreground" href="/contactUs" >
            Contact us
          </Link>
        </NavbarItem>
        <NavbarItem isActive={currentPath === '/aboutUs'}>
          <Link color="foreground" href="/aboutUs">
            About
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
