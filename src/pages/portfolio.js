import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { gsap } from "utils/gsapModules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainPrimary = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100vh;
  background: black;
`;

const MainSecondary = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100vh;
  /* background: black; */
  position: relative;

  && h1 {
    font-size: 22vw;
    font-family: "Founder", sans-serif;
  }
`;

const TopSubContainer = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-color: black;
  position: absolute;
  overflow: hidden;
`;

const CenterSubContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
`;

const BottomSubContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: black;
  position: absolute;
  bottom: 0%;
  overflow: hidden;
`;

const TopHeading = styled.h1`
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
`;

const BottomHeading = styled.h1`
  position: absolute;
  left: 50%;
  top: 0%;
  transform: translate(-50%, -50%);
`;

const Portfolio = ({ theme }) => {
  const mainRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const topRefText = useRef();
  const bottomRefText = useRef();

  useEffect(() => {
    const ctx = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2,
        pin: true,
      },
    });

    ctx
      .to(
        topRef.current,
        {
          top: "-74%",
        },
        "abc"
      ) // here "abc" name is provided so that the animation should start at the same time and this name can be anything but it should be the same in other animation as well
      .to(
        bottomRef.current,
        {
          bottom: "-68%",
          // height: "10vh",
        },
        "abc"
      )
      .to(
        topRefText.current,
        {
          top: "82%",
        },
        "abc"
      )
      .to(
        bottomRefText.current,
        {
          top: "-55%",
        },
        "abc"
      );

    return () => ctx.revert();
  }, []);

  return (
    <Container>
      <MainPrimary></MainPrimary>
      <MainSecondary ref={mainRef}>
        <TopSubContainer ref={topRef} id="top">
          <TopHeading ref={topRefText}>SHOWBAZI</TopHeading>
        </TopSubContainer>
        <CenterSubContainer />
        <BottomSubContainer ref={bottomRef} id="bottom">
          <BottomHeading ref={bottomRefText}>SHOWBAZI</BottomHeading>
        </BottomSubContainer>
      </MainSecondary>
    </Container>
  );
};

export default Portfolio;
