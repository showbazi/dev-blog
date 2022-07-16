import styled from "styled-components";

const UnOrderedList = styled.ul`
    padding-inline: 2rem 0.5rem;
    /* list-style-type: square; */
`;

const OrderedList = styled.ol`
    padding-inline: 2rem 0.5rem;
`;

const ListItems = styled.li`
    padding-left: 0.5rem;
    padding-bottom: 0.4rem;
`;

const lists = {
    ul: UnOrderedList,
    ol: OrderedList,
    li: ListItems
}

export default lists;