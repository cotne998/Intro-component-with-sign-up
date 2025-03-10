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

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    const nameRegex = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let newErrors = {
      name: "",
      lastName: "",
      email: "",
      password: "",
    };

    if (data.name.trim() === "") {
      newErrors.name = "First Name cannot be empty";
    } else if (!nameRegex.test(data.name)) {
      newErrors.name = "Invalid first name";
    }

    if (data.lastName.trim() === "") {
      newErrors.lastName = "Last Name cannot be empty";
    } else if (!nameRegex.test(data.lastName)) {
      newErrors.lastName = "Invalid last name";
    }

    if (data.email.trim() === "") {
      newErrors.email = "Email cannot be empty";
    } else if (!emailPattern.test(data.email)) {
      newErrors.email = "Looks like this is not a valid email";
    }

    if (data.password.trim() === "") {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err !== "")) {
      return;
    }

    console.log("Form submitted successfully:", data);
  };

  const handleChange = (field) => (event) => {
    let value = event.target.value;
    if (field === "name" || field === "lastName") {
      value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    setData((prevData) => ({ ...prevData, [field]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
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
            onChange={handleChange("name")}
            style={errors.name ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder="First Name"
          />
          {errors.name && <ErrorIcon src={errorImage} />}
          {errors.name && <span>{errors.name}</span>}
        </InputDiv>
        <InputDiv>
          <input
            value={data.lastName}
            onChange={handleChange("lastName")}
            style={errors.lastName ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder="Last Name"
          />
          {errors.lastName && <ErrorIcon src={errorImage} />}
          {errors.lastName && <span>{errors.lastName}</span>}
        </InputDiv>
        <InputDiv>
          <input
            value={data.email}
            onChange={handleChange("email")}
            style={errors.email ? { borderColor: "#FF7979" } : {}}
            type="text"
            placeholder="Email Address"
          />
          {errors.email && <ErrorIcon src={errorImage} />}
          {errors.email && <span>{errors.email}</span>}
        </InputDiv>
        <InputDiv>
          <input
            value={data.password}
            onChange={handleChange("password")}
            style={errors.password ? { borderColor: "#FF7979" } : {}}
            type="password"
            placeholder="Password"
          />
          {errors.password && <ErrorIcon src={errorImage} />}
          {errors.password && <span>{errors.password}</span>}
        </InputDiv>
        <StyledButton type="submit" onClick={handleClick}>
          CLAIM YOUR FREE TRIAL
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

const Registration = styled.form`
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
