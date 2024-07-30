import { VIRTUAL_ELEMENT_TYPE } from "./createElement.js";

/**
 * 
 * @param {(node: any)=> boolean} node 
 */
export default function isValidElement(node) {
  // 전달받은 node는 가상 요소인가? 를 반환

  if('$$typeof' in node && node?.$$typeof === VIRTUAL_ELEMENT_TYPE) {
    return true
  } else {
    return false;
  }
}

