import { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';
import styled from "styled-components";


const CodeContainer = styled.div`
  position: relative;
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
  background-color: ${props => props.copyCode ? "rgb(44, 192, 178)" : "rgba(97, 123, 255, 1)"};
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    filter: brightness(1.5) contrast(1.5);
  }
`;

const CodeBlock = ({children}) => {
    const [copyCode, setCopyCode] = useState(false);
    
    if(!children) return null

    const {props: {className, children: code = ""}} = children;

    const language = className ? className.replace(/language-/, "") : ""

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopyCode(true);

        setTimeout(() => {
            setCopyCode(false);
        }, 2000);
    }
    
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
                            <CopyButton
                                onClick={handleCopy}
                                copyCode={copyCode}
                            >
                                {copyCode ? "Copied" : "Copy"}
                            </CopyButton>

                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </StyledPre>
                    </CodeContainer>
                </>
            )}
        </Highlight>
    )
}

export default CodeBlock;