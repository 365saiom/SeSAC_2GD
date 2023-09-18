/* 초기 state 설정 */
const initialState = {
  list: [
    {
      id: 0,
      text: '리액트 공부하기',
      done: false,
    },
    {
      id: 1,
      text: '스트레칭 하기',
      done: false,
    },
    {
      id: 2,
      text: '운동하기',
      done: false,
    },
  ],
};
// id 전역 관리를 위한 initialState.nextID
let count = initialState.list.length;
initialState['nextID'] = count;

const CREATE = 'todo/CREATE';
const DONE = 'todo/DONE';

// action obj 리턴하는 함수
// 화면을 그려주는 컴포넌트에서 import 해서 사용
export function create(payload) {
  return {
    type: CREATE,
    payload, //object
  };
}
export function done(id) {
  return {
    type: DONE,
    id, //number
  };
}

/* 리듀서
   - component(view)에서 이벤트를 이용해서 dispatch를 통해 action을 reducer의 인자로 넘겨준다.
  */
export function todo(state = initialState, action) {
  /* 
    action ={
      type:'todo/CREATE',
      payload:{
        id:3,
        text:'점심먹기'
      }
    }
  
    action ={
      type:'todo/DONE'
      id:0,
    }
    */
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: state.list.concat({
          id: action.payload.id,
          text: action.payload.text,
          done: false,
        }),
        nextID: action.payload.id + 1,
      };

    case DONE:
      // 기존 list 에서의 id와 action으로 들어온 id가 같다면
      // done:false -> true
      return {
        ...state,
        list: state.list.map(el => {
          if (el.id === action.id) {
            return {
              // id: 0,
              // text: "리액트 공부하기",
              // done: false,
              ...el,
              done: true,
            };
          } else {
            return el;
          }
        }),
      };
    default:
      return state;
  }
}
