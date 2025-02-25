import "./App.css";
import "./index.css";
import styled from "styled-components";
import Intro from "./Intro";

function App() {
  return (
    <Container>
      <div className="header-div">
        <StyledTitle>Learn to code by watching others</StyledTitle>
        <StyledParagraph>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.{" "}
        </StyledParagraph>
      </div>

      <main>
        <Intro />
      </main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6.4rem;

  @media only screen and (min-width: 90rem) {
    flex-direction: row;
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: white;

  @media only screen and (min-width: 90rem) {
    font-size: 5rem;
  }
`;

const StyledParagraph = styled.p`
  color: white;
  font-size: 1.6rem;
`;

export default App;
