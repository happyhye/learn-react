// --------------------------------------------------------------------------
// ✅ 컴포넌트 로직 재구성
// --------------------------------------------------------------------------
// - [x] 데이터 분리
// - [x] 리스트 렌더링
// - [x] 컴포넌트 속성 검사
// - [ ] 컴포넌트 순수성 진단
// --------------------------------------------------------------------------
import { arrayOf } from 'prop-types';
import Avatar from '@/components/Avatar';
import { UserType } from '@/@types/globals.d';

AvatarListPage.propTypes = {
  list: arrayOf(UserType).isRequired,
};



const anotherData = {
  count:10
}


function AvatarListPage(props) {

  // 컴포넌트 내부 공간에서의 코드 로직은
  // 동일 입력 => 동일 출력이 되어야 한다.

  // pop 메서드 사용
  // props.list.pop()

  const myList = [...props.list];
  //myList.pop()


  // let renderCount=0;
  // setInterval(()=>{
  //   console.log(renderCount);
  //   document.getElementById('react-app').dataset.render = ++renderCount;
  // },1000)


  return (
    <ul className="AvatarList">
      {myList.map((user) => (
        <li key={user.id}>
          <Avatar user={user} /> {anotherData.count++}
        </li>
      ))}
    </ul>
  );
}

export default AvatarListPage;
