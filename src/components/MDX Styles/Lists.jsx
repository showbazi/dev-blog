import styled from "styled-components";
import { device } from "utils/ResponsiveBreakpoints";

const UnOrderedList = styled.ul`
  padding-inline: 1.5rem 0.5rem;
  /* list-style-type: square; */
  font-size: calc(1.1875rem);
  margin-bottom: 2.5rem;

  @media ${device.mobileXL} {
    font-size: calc(1.125rem);
    margin-bottom: 1.5rem;
  }
`;

const OrderedList = styled.ol`
  /* padding-inline: 1rem 0.5rem; */
  font-size: calc(1.1875rem);
  margin-bottom: 2.5rem;
  counter-reset: counts;
  list-style: none;

  @media ${device.mobileXL} {
    font-size: calc(1.125rem);
    margin-bottom: 1.5rem;
  }

  li {
    counter-increment: counts;
    -webkit-box-align: baseline;
    align-items: baseline;
    display: flex;
    align-items: flex-start;
  }

  li::before {
    content: counters(counts, ".") ". ";
    font-feature-settings: "tnum";
    color: rgba(97, 123, 255, 1);
    font-weight: 500;
    min-width: 26px;
    padding-right: 12px;
  }
`;

const ListItems = styled.li`
  padding-left: 0.5rem;
  /* padding-bottom: 0.4rem; */
  margin-bottom: 1rem;
  /* display: flex;
  align-items: flex-start; */
`;

const lists = {
  ul: UnOrderedList,
  ol: OrderedList,
  li: ListItems,
};

export default lists;
