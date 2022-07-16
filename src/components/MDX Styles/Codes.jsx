import styled from "styled-components";
import CodeBlock from './CodeBlock';

const SingleCode = styled.code`
  background-color: #1c1c1c;
  color: whitesmoke;
  padding: 2px 4px;
  margin: 0 0.4rem;
`;

const codes = {
    pre: CodeBlock,
    code: (props) => (
        <SingleCode {...props} />
    )
}

export default codes;