import "./index.css";
import styled from "styled-components";
import { useState } from "react";
import errorImage from "/images/icon-error.svg";

export default function Intro() {
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isFilled, setIsFilled] = useState({
    name: true,
    lastName: true,
    email: true,
    password: true,
  });

  const handleClick = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    for (let key in data) {
      if (key === "email" && !emailPattern.test(data[key])) {
        setIsFilled((prevData) => ({ ...prevData, [key]: false }));
      } else if (data[key].trim() === "") {
        setIsFilled((prevData) => ({ ...prevData, [key]: false }));
      } else {
        setIsFilled((prevData) => ({ ...prevData, [key]: true }));
      }
    }
  };

  return (
    <>
      <Offer>
        <p>
          <span>Try it free 7 days</span> then $20/mo. thereafter
        </p>
      </Offer>
      <Registration>
        <InputDiv>
          <input
            value={data.name}
            onChange={(event) => {
              const value = event.target.value;
              setData((prevData) => ({ ...prevData, name: value }));
            }}
            style={!isFilled.name ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder={!isFilled.name ? "" : "First Name"}
          />
          {!isFilled.name ? <ErrorIcon src={errorImage} /> : null}
          {!isFilled.name ? <span>First Name cannot be empty</span> : null}
        </InputDiv>
        <InputDiv>
          <input
            value={data.lastName}
            onChange={(event) => {
              const value = event.target.value;
              setData((prevData) => ({ ...prevData, lastName: value }));
            }}
            style={!isFilled.lastName ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder={!isFilled.lastName ? "" : "Last Name"}
          />
          {!isFilled.lastName ? <ErrorIcon src={errorImage} /> : null}
          {!isFilled.lastName ? <span>Last Name cannot be empty</span> : null}
        </InputDiv>
        <InputDiv>
          <input
            value={data.email}
            onChange={(event) => {
              const value = event.target.value;
              setData((prevData) => ({ ...prevData, email: value }));
            }}
            style={
              !isFilled.email
                ? {
                    borderColor: "#FF7979",
                  }
                : {}
            }
            type="text"
            placeholder={
              !isFilled.email ? "email@example/com" : "Email Address"
            }
            className={!isFilled.email ? "placeholder-red" : "placeholder-gray"}
          />
          {!isFilled.email ? <ErrorIcon src={errorImage} /> : null}
          {!isFilled.email ? (
            <span>Looks like this is not an email</span>
          ) : null}
        </InputDiv>
        <InputDiv>
          <input
            value={data.password}
            onChange={(event) => {
              const value = event.target.value;
              setData((prevData) => ({ ...prevData, password: value }));
            }}
            style={!isFilled.password ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder={!isFilled.password ? "" : "Password"}
          />
          {!isFilled.password ? <ErrorIcon src={errorImage} /> : null}
          {!isFilled.password ? <span>Password cannot be empty</span> : null}
        </InputDiv>
        <StyledButton onClick={handleClick}>
          CLAIM YOUR FREE TRIAL{" "}
        </StyledButton>
        <P>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </P>
      </Registration>
    </>
  );
}

const Offer = styled.div`
  background-color: #5e54a4;
  width: 100%;
  text-align: center;
  padding: 1.8rem;
  display: flex;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  border-radius: 0.7rem;
  box-shadow: 0px 8px 0px rgba(1, 1, 1, 0.2);

  p {
    max-width: 19.4rem;

    span {
      font-weight: 700;
    }
  }

  @media only screen and (min-width: 90rem) {
    p {
      max-width: unset;
    }
  }
`;

const Registration = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  border-radius: 0.7rem;
  padding: 2.4rem;
  box-shadow: 0px 8px 0px rgba(1, 1, 1, 0.2);

  @media only screen and (min-width: 90rem) {
    padding: 4rem;
  }

  input {
    width: 100%;
    padding: 1.7rem;
    border-radius: 0.5rem;
    border: 0.5px solid #dedede;
    font-weight: 700;
    color: #3d3b48;
    font-size: 1.4rem;

    &::placeholder {
      color: #3d3b487b;
    }

    &.placeholder-red::placeholder {
      color: #ff7979;
    }
  }
`;

const StyledButton = styled.button`
  width: 100%;
  background-color: #38cc8b;
  border: none;
  border-radius: 0.5rem;
  border-bottom: 3.5px solid #2b9e6c9b;
  padding: 1.8rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;

  &:hover {
    background-color: #77e2b3;
    cursor: pointer;
    transition: 0.2s;
  }
`;

const P = styled.p`
  max-width: 24.9rem;
  font-size: 1.1rem;
  color: #bab7d4;
  text-align: center;

  span {
    color: #ff7979;
  }

  @media only screen and (min-width: 90rem) {
    max-width: unset;
  }
`;

const InputDiv = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: end;
  position: relative;

  span {
    font-style: italic;
    font-size: 1.1rem;
    color: #ff7979;
  }
`;

const ErrorIcon = styled.img`
  position: absolute;
  top: 2.7rem;
  right: 2.7rem;
  transform: translateY(-50%);
`;
