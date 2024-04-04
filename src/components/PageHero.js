import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const PageHero = ({ title, product }) => {
  return (
    <Wrapper
      style={{
        backgroundColor: "currentColor",
        // backgroundColor: "#5d5d9c",
        minHeight: "20vh",
        margin: "2rem 0",
      }}>
      <div>
        <Helmet>
          <title>{`${title} | The Alchemy Drip`}</title>
          <meta name="description" content="The Alchemy Drip" />
        </Helmet>
        <div className="section-center">
          <h3
            className="path-heading"
            style={{
              marginBottom: "0px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}>
            <Link to="/" style={{ color: "#b2b2d1" }}>
              HOME
            </Link>

            {product && (
              <Link to="/products" style={{ color: "#b2b2d1" }}>
                / PRODUCTS
              </Link>
            )}

            <div
              style={{
                fontWeight: "600",
                color: "#fff",
                textTransform: "uppercase",
              }}>
              / {title}
            </div>
          </h3>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  min-height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  color: var(--clr-heading-main);
  a {
    padding: 0.5rem;
    font-weight: 600;
    transition: var(--transition);
  }
  a:hover {
    ${"" /* color: #9b98ee; */}
    color:  var(--clr-white);
  }
  @media screen and (max-width: 420px) {
    .path-heading {
    }
  }
`;

export default PageHero;
