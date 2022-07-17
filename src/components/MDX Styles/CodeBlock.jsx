import { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";

const CodeContainer = styled.div`
  position: relative;
  margin-block: 3rem 5rem;
`;

const StyledPre = styled.pre`
  overflow-x: auto;
  padding: 1rem;
  padding-top: 1.5rem;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.copyCode ? "rgb(44, 192, 178)" : "rgba(97, 123, 255, 1)"};
  padding: 2px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  border: none;

  &:hover {
    filter: brightness(1.5) contrast(1.5);
  }
`;

const CodeBlock = ({ children }) => {
  const [copyCode, setCopyCode] = useState(false);

  if (!children) return null;

  const {
    props: { className, children: code = "" },
  } = children;

  const language = className ? className.replace(/language-/, "") : null;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopyCode(true);

    setTimeout(() => {
      setCopyCode(false);
    }, 2000);
  };

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <CodeContainer>
            <StyledPre className={className} style={style}>
              <CopyButton onClick={handleCopy} copyCode={copyCode}>
                {copyCode ? "Copied" : "Copy"}
              </CopyButton>

              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </StyledPre>
          </CodeContainer>
        </>
      )}
    </Highlight>
  );
};

export default CodeBlock;
