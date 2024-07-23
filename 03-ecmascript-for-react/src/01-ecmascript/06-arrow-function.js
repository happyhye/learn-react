// --------------------------------------------------------------------------
// arrow function

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
// 참고: https://mzl.la/3Uej8M3

// Coffeescript ->
// ECMAScript =>

const currencyKR = (value) => {
  if (typeof value !== 'number' || Number.isNaN(value)) {
    throw new Error('currencyKR 함수에는 숫자 값만 전달해야 합니다.');
  }
  let price = numberWithComma(value);
  return `${price}원`;
}

// 🔶 일반 함수 선언을 화살표 함수 표현식으로 변경합니다.
// 매개변수가 하나만 존재할 경우, 괄호 생략 가능
const numberWithComma = (value) => value.toString().replace?.(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');



function run() {
  let price = currencyKR(2_107_000);
  return price;
}

console.log(run());
