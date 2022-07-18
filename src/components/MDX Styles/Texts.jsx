import Link from "next/link";
import React from "react";
import styled from "styled-components";

// ----------------styles --------------------------
const PlainText = styled.div`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  letter-spacing: ${(props) => props.letterSpacing};
`;

const TextLink = styled.a`
  color: #2ab4fe;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const BlockQuotesText = styled.blockquote`
  opacity: 0.7;
  padding: 0px 32px;
  margin-top: 24px;
  margin-bottom: 48px;
`;
// ----------------styles --------------------------

const Texts = {};

// ----------heading texts ---------------------
const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
// let length = headings.length;

headings.forEach((tag, index) => {
  const fontSize = `${2.375 - index * 0.375}rem`;

  Texts[tag] = (props) => (
    <PlainText as={tag} fontSize={fontSize} mt="2rem" mb="1rem" {...props} />
  );

  //   length--;
});
// ----------heading texts ---------------------

// ------------------paragraph text ---------------------
export const BlogText = (props) => (
  <PlainText
    as="p"
    mb="1.5rem"
    fontSize="1.125rem"
    letterSpacing="0.1px"
    {...props}
  />
);
// ------------------paragraph text ---------------------

// ------------------------text link------------------------------------------
export const LinkText = (props) => (
  <Link href={props.href} passHref>
    <TextLink {...props} />
  </Link>
);
// ------------------------text link------------------------------------------

// ------------------blockquotes-----------------------------------------
// export const BlockQuotes = (props) => {
//   <BlockQuotesText {...props} />;
// };
// ------------------blockquotes-----------------------------------------

Texts.p = BlogText;
Texts.a = LinkText;
Texts.blockquote = BlockQuotesText;

export default Texts;
