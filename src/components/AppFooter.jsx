import React from 'react';
import styled from 'styled-components';

const CustomFooter = styled.div`
    font-size: 0.875rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
    text-align: center;
`;

const AppFooter = () => {
  return (
    <CustomFooter>&copy; Copyright Sagar Showbazi 2022</CustomFooter>
  )
}

export default AppFooter;