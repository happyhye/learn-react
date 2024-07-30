// React 함수 컴포넌트

import React from 'https://esm.sh/react';


// 컴포넌트는 props 를 전달받을 수 있다!!
function ArchitectureListF(props){

  const {lang, children} = props;
  
  // 리액트 엘리먼트 반환
  return React.createElement(
    'ul',
    { className: 'architectures', lang },
    children
  );
}

export default ArchitectureListF;