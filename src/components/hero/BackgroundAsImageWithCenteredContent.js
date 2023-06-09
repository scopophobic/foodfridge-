import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1615897570582-285ffe259530?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
`;
const StyledButton = tw.button`
  mt-8
  bg-green-700 
  text-white 
  font-bold 
  py-2 
  px-4 
  rounded 
  hover:bg-indigo-600 
  focus:outline-none 
  focus:shadow-outline
  transition 
  duration-150 
  ease-in-out
`;
const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryAction = tw.button`
  rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 
  bg-gray-100 font-bold shadow transition duration-300 bg-green-700 text-gray-100 
  hocus:bg-green-900 hocus:text-gray-200 focus:outline-none focus:shadow-outline
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">Store</NavLink>
      <NavLink href="#">Map</NavLink>
      <NavLink href="#">Locations</NavLink>
      <NavLink href="#">
        About
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink>Sign In</PrimaryLink>
    </NavLinks>,
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
            Less Waste, More Value
            <br />
            Blockchain Empowering Sustainable Supermarkets
          </Heading>
          <StyledButton>
            <a
              href="https://the-eat-project.singhsahaj2001.repl.co/"
              tw="no-underline text-white"
            >
              Supermarket Inventory System
            </a>
          </StyledButton>
        </Content>
      </HeroContainer>
    </Container>
  );
};
