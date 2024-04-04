import React, { useEffect } from "react";
import styled from "styled-components";
import IImages from "../constants/IImages";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import CartButtons from "./CartButtons";
import { useUserContext } from "../context/user_context";
import { useProductsContext } from "../context/products_context";

const NavbarHome = () => {
  const { openSideBar } = useProductsContext();
  const { isLogin, logindata } = useUserContext();

  const [scrolled, setScrolled] = React.useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    // console.log("first, ", openSideBar);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <NavContainer
      style={{
        background: "floralwhite",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      }}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img
              src={IImages.logo}
              alt=""
              style={{ height: "85px", objectFit: "contain" }}
            />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSideBar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          {/* {isLogin && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )} */}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #5d5d9c;
  }
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    ${"" /* max-width: var(--max-width); */}
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 200px;
      /* height: 45px; */
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-darkred);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    margin-bottom: 0px;
    display: none;
  }
  .cart-btn-wrapper {
    gap: 20px;
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        font-size: 1.1rem;
        font-weight: 500;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          ${"" /* border-bottom: 2px solid var(--clr-primary-indianred); */}
          border-bottom: 2px solid var(--clr-primary-orange);
        }
      }
    }
    .cart-btn-wrapper {
      display: flex;
      flex-direction: row-reverse;
    }
  }
`;

export default NavbarHome;
