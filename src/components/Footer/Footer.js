import React from 'react';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './FooterStyles';

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Market Place</Heading>
            <FooterLink href='#'>All NFTs</FooterLink>
            <FooterLink href='#'>Art</FooterLink>
            <FooterLink href='#'>Collectibles</FooterLink>
            <FooterLink href='#'>Domain Names</FooterLink>
            <FooterLink href='#'>Music</FooterLink>
            <FooterLink href='#'>Photography</FooterLink>
            <FooterLink href='#'>Sports</FooterLink>
            <FooterLink href='#'>Trading Cards</FooterLink>
            <FooterLink href='#'>Utility</FooterLink>
            <FooterLink href='#'>Virtual Worlds</FooterLink>
          </Column>
          <Column>
            <Heading>My Account</Heading>
            <FooterLink href='#'>Profile</FooterLink>
            <FooterLink href='#'>Favorites</FooterLink>
            <FooterLink href='#'>Watchlist</FooterLink>
            <FooterLink href='#'>My Collections</FooterLink>
            <FooterLink href='#'>Settings</FooterLink>
          </Column>
          <Column>
            <Heading>Resources</Heading>
            <FooterLink href='#'>Help Center</FooterLink>
            <FooterLink href='#'>Platform Status</FooterLink>
            <FooterLink href='#'>Partners</FooterLink>
            <FooterLink href='#'>Gas-Free Marketplace</FooterLink>
            <FooterLink href='#'>Blogs</FooterLink>
            <FooterLink href='#'>Docs</FooterLink>
            <FooterLink href='#'>Newsletter</FooterLink>
          </Column>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href='#'> About </FooterLink>
            <FooterLink href='#'> Careers </FooterLink>
            <FooterLink href='#'> Ventures </FooterLink>
            <FooterLink href='#'> Grants </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
