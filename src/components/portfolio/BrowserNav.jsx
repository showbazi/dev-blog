import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { useThemeStore } from "pages/_app";
import { COLOR_CONSTANTS, TABS, THEMES } from "utils/constants";

const BrowserNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(prop) =>
    prop.theme === THEMES.LIGHT ? "#dadada" : "rgba(0, 21, 38, 1)"};
  width: 100%;
  height: 2.25rem;
  border-top-left-radius: 1.25rem;
  border-top-right-radius: 1.25rem;
  border-bottom-left-radius: 0.1rem;
  border-bottom-right-radius: 0.1rem;
  align-items: flex-end;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 0.375rem;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: 100%;
  margin-inline: 1rem;
`;

const Icon = styled.div`
  background-color: ${(prop) => (prop.iconColor ? prop.iconColor : "red")};
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  cursor: pointer;
`;

const TabListContainer = styled.ul`
  display: flex;
  height: 86%;
  list-style: none;
`;

const TabList = styled.li`
  width: max-content;
  min-width: 6rem;
`;

const Tab = styled.button`
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
  height: 100%;
  border: none;
  outline: none;
  width: max-content;
  min-width: 6rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding-inline: 0.75rem;
  cursor: pointer;

  &[data-theme="light"] {
    background-color: ${(prop) => (prop.isActive ? "white" : "#dadada")};
  }

  &[data-theme="dark"] {
    background-color: ${(prop) =>
      prop.isActive ? "black" : "rgba(0, 21, 38, 1)"};
    color: white;
  }
`;

const TabIcon = styled.div`
  background-color: #c4c4c4;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 40%;
`;

/**
 * Store to change the tab
 */
export const useStore = create(
  persist(
    (set) => ({
      activeTab: TABS.BLOG,
      setActiveTab: (tab) =>
        set(() => ({
          activeTab: tab,
        })),
    }),
    {
      name: "active-tab",
      get: (key) => localStorage.getItem(key),
    }
  )
);

/**
 * BrowserNav component
 * @returns React.ReactNode
 */
const BrowserNav = () => {
  const activeTheme = useThemeStore((state) => state.activeTheme);
  const activeTab = useStore((state) => state.activeTab);
  const setActiveTab = useStore((state) => state.setActiveTab);

  const [active, setActive] = useState(TABS.BLOG);
  const [theme, setTheme] = useState(THEMES.DARK);

  useEffect(() => {
    setTheme(activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const onClickHandler = (e, tab) => {
    e.preventDefault();
    setActiveTab(tab);
  };

  return (
    <BrowserNavContainer theme={theme}>
      <IconContainer>
        <Icon iconColor={COLOR_CONSTANTS.red} />
        <Icon iconColor={COLOR_CONSTANTS.yellow} />
        <Icon iconColor={COLOR_CONSTANTS.green} />
      </IconContainer>
      <TabListContainer>
        {Object.values(TABS).map((tab) => {
          return (
            <TabList key={tab}>
              <Tab
                theme={theme}
                isActive={active === tab}
                data-theme={theme}
                onClick={(e) => onClickHandler(e, tab)}
              >
                <TabIcon />
                {tab}
              </Tab>
            </TabList>
          );
        })}
      </TabListContainer>
    </BrowserNavContainer>
  );
};

export default BrowserNav;
