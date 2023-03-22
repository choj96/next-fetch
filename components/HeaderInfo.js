import Head from "next/head";
import React from "react";

const HeaderInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

// props 의 초기값을 설정
HeaderInfo.defaultProps = {
  title: "Cats World",
  keyword: "cat,고양이,야옹이",
  contents: "이쁜 고양이들 사진 모음",
};

export default HeaderInfo;
