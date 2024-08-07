// --------------------------------------------------------------------------
// ✅ 명령형 프로그래밍
// --------------------------------------------------------------------------
// - [ ] 체크박스 인풋이 체크 상태이면, 버튼은 활성 상태입니다.
// - [ ] 체크박스 인풋이 체크 상태가 아니면, 버튼은 비활성 상태입니다.
// - [ ] 버튼 상태 변경에 따라 레이블은 "활성 상태", "비활성 상태"로 변경되어야 합니다.
// --------------------------------------------------------------------------


// 대상 찾기
const container = document.getElementById('imperative-programming');
const checkbox = container.querySelector('[type="checkbox"]') as HTMLInputElement;
const button = container.querySelector('button');

globalThis.checkbox = checkbox;


// 찾은 대상에 이벤트 연결
checkbox.addEventListener('change', handleChange);


// 이벤트 핸들러 작성
function handleChange(e) {
  const { checked } = e.target
  // console.log(checked);  // 체크상태면 true, false
  
  if(checked) {
    // button.setAttribute('disable', 'false');  <- 이거 사용하면 안됨 1009
    button.removeAttribute('disable')
    button.textContent = '활성 상태'
  } else {
    button.setAttribute('disable', 'true');
    button.textContent = '비활성 상태'
  }
}