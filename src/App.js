import React, {useState} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';

// 1. input창, 추가 버튼
// 2. 값 입력 후 클릭하면 값 추가
// 3. 삭제 버튼 누르면 삭제

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])
  
  // 추가
  const addItem = () =>{
    console.log('inputValue : ', inputValue)
    setTodoList([...todoList, inputValue]) // 기존 todoList + inputValue
    setInputValue(''); // 입력창 초기화
  }
  
  //삭제
  const delItem = (item) => {
    setTodoList(todoList.filter(todoItem => todoItem !== item))
  }
  return (
    <>
      {/* <input type='text' onChange={(event)=>console.log(event.target.value)}/> */}
      <input value={inputValue} type='text' onChange={(event)=>setInputValue(event.target.value)}/>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} delItem={delItem}/>
    </>
  );
}

export default App;
