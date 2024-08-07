import { node, func } from 'prop-types';

// PropTypes.node
// 리액트 컴포넌트가 반환할 수 있는 모든 타입 (element, string, number, null, undefined)
LayoutBox.propTypes = {
  children: node, // [TS] React.ReactNode
  onClick: func,
};

function LayoutBox({ children, onClick, ...restProps }) {
  console.log({ restProps });

  const handleClick = (e) =>{
    e.stopPropagation(); //이벤트 전파 차단
    onClick?.(e);
  }

  return <div className="box" onClick={handleClick} {...restProps} >{children}</div>;
}

export default LayoutBox;