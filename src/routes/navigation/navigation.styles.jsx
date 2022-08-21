import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Logo = styled(Link)`
  height: 39px;
  width: 50px;
  margin-left: 0px;
`;

export const NavLinks = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  line-height: 1.5rem;
  text-transform: uppercase;
  margin: 0 15px 0 15px;
  cursor: pointer;
  &.active,
  &:hover {
    border-bottom: 1px solid black;
    border-top: 1px solid rgba(0, 0, 0, 0);
  }
  &:nth-child(2) {
    margin-right: 0;
  }
`;

// nav {
//   height: 70px;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 25px;

//   .logo {
//     height: 39px;
//     width: 50px;
//     margin-left: 0px;
//   }

//   .nav-links {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;

//     .nav-link {
//       line-height: 1.5rem;
//       text-transform: uppercase;
//       margin: 0 15px 0 15px;
//       cursor: pointer;
//       &.active,
//       &:hover {
//         border-bottom: 1px solid black;
//         border-top: 1px solid rgba(0, 0, 0, 0);
//       }
//       &:nth-child(2) {
//         margin-right: 0;
//       }
//     }
//   }
// }
