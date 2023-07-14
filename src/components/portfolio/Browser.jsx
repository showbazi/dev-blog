import React, { useEffect, useState } from "react";
import BrowserNav, { useTabStore } from "./BrowserNav";
import styled from "styled-components";
import BlogTab from "./BlogTab";
import ContactTab from "./ContactTab";
import { TABS } from "utils/constants";

const BrowserContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 4rem;
  border: 3px solid #dadada;
  box-sizing: border-box;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const Browser = ({ posts }) => {
  const activeTab = useTabStore((state) => state.activeTab);

  const [active, setActive] = useState(TABS.BLOG);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  return (
    <BrowserContainer>
      <BrowserNav />
      {active === TABS.BLOG && <BlogTab posts={posts} />}
      {active === TABS.CONTACT && <ContactTab />}
      {active === TABS.PROJECTS && <ContactTab />}
    </BrowserContainer>
  );
};

export default Browser;
