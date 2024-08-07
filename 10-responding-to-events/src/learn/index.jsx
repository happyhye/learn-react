// --------------------------------------------------------------------------
// ✅ 사용자와의 상호작용
// --------------------------------------------------------------------------
// - [ ] 이벤트에 응답
// - [ ] 이벤트 핸들러 추가
//    - [ ] 이벤트 핸들러에서 props 읽기
//    - [ ] 이벤트 핸들러 prop으로 전달
//    - [ ] 이벤트 핸들러 prop 이름 설정
// --------------------------------------------------------------------------

import View from './View';
import NavContents from './NavContents';
import ScrollUpAndDown from './responding-to-events/scroll-up-and-down';

let mountCount=0;

function Learn() {

  // console.log('count: ', ++mountCount);
  
  return (
    <div className="Learn">
      <NavContents />
      <View.HTMLvsJSX />
      <View.RespondingToEvents mountCount={mountCount} />
      <ScrollUpAndDown />
    </div>
  );
}

export default Learn;
