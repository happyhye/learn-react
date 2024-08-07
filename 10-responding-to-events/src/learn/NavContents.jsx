function NavContents() {

  // 사이드 이펙트 코드 작성
  // ! 여기서 쓰면 안됨
  // const firstLink = document.querySelector('[href="#jsx-markup"]');
  // console.log(firstLink);
  // firstLink.dataset.element = 'a'



  // 이벤트 핸들러
  const handleClickFirstLink = (e) => {
    e.preventDefault();
    console.log('이벤트 속성(prop)에 정의된 이벤트 핸들러 연결 (함수이름 참조)');

    const firstLink = document.querySelector('[href="#jsx-markup"]');
    console.log(firstLink);
    firstLink.dataset.element = 'a'
  }

  
  const handleClickLastLink = (e) => {
    e.preventDefault();
    console.log('이벤트 속성(prop)에 정의된 이벤트 핸들러 연결 (함수이름 참조)');

    const lastLink = document.querySelector('[href="#responding-to-events"]');
    console.log(lastLink);
    lastLink.dataset.element = 'a'
  }

  return (
    <nav className="NavContents" aria-label="학습 주제 탐색">
      <a href="#jsx-markup" onClick={handleClickFirstLink}>
        JSX 마크업
        </a>
      <a href="#responding-to-events" className="active" onClick={handleClickLastLink}>
        이벤트 응답
      </a>
    </nav>
  );
}

export default NavContents;
