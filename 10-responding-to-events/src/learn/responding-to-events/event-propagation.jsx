// --------------------------------------------------------------------------
// ✅ 이벤트 전파
// --------------------------------------------------------------------------
// - [ ] 전파 중지
// - [ ] 전파 대안으로 핸들러 전달
// - [ ] 기본 작동 방지
// --------------------------------------------------------------------------

import LayoutBox from "./LayoutBox";



// 전파 중지
// e.stopPropagation() 


function EventPropagation() {

  const handleLayoutBox = (color)=> (e)=>{
      console.log(color, e.target);
  }

  return (
    <details>
      <summary>
        <b>이벤트 전파 &amp; 기본 작동 방지</b>
      </summary>
      <LayoutBox style={styles.cyan} onClick={handleLayoutBox('cyan')}>
        <LayoutBox style={styles.magenta} onClick={handleLayoutBox('magenta')}>
          <LayoutBox style={styles.yellow} onClick={handleLayoutBox('yellow')} />
        </LayoutBox>
      </LayoutBox>
    </details>
  );
}






const styles = {
  cyan: {
    '--color': 'var(--cyan)',
  },
  magenta: {
    '--color': 'var(--magenta)',
  },
  yellow: {
    '--color': 'var(--yellow)',
  },
};

export default EventPropagation;
