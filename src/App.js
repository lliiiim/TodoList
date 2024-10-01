import React, {useState, useRef} from 'react';
import './App.css';
import TodoBoard from './component/TodoBoard';
import Button from '@mui/material/Button';

// 1. input창, 추가 버튼
// 2. 값 입력 후 클릭하면 값 추가
// 3. 삭제 버튼 누르면 삭제

function App() {
  const [inputValue, setInputValue] = useState('')
  const [todoList, setTodoList] = useState([])

  // ref 안의 값이 바뀌어도 컴포넌트는 렌더링이 일어나지 않기 때문에 렌더링과 관련이 없는 값을 관리할 때 사용
  const nextId = useRef(0);

  // 추가
  const addItem = () =>{
    console.log('inputValue : ', inputValue)
    
    if (inputValue.trim() === '') return; // 빈값 추가 안 함
    
    const newItem = {
      id: nextId.current,
      text: inputValue
    };
    
    setTodoList([...todoList, newItem]) // 기존 todoList + inputValue
    setInputValue(''); // 입력창 초기화
    
    nextId.current += 1; 
  }

  const enterKey = (e) => {
    if(e.key === 'Enter'){
      addItem();
    }
  }
  
  //삭제
  const delItem = (id) => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== id))
  }
  return (
    <div className='box-line'>
      <h1>Todo List</h1>
      <div className="input-container">
        {/* <input type='text' onChange={(event)=>console.log(event.target.value)}/> */}
        <input className='todo-input' value={inputValue} type='text' placeholder='여기에 작성하삼' onChange={(e)=>setInputValue(e.target.value)} onKeyDown={(e)=>enterKey(e)}/>
        {/* <button onClick={addItem}>추가</button> */}
        <Button variant='contained' style={{backgroundColor: '#A6948D'}} onClick={addItem}>추가</Button>
      </div>
      <TodoBoard todoList={todoList} delItem={delItem}/>
    </div>
  );
}

export default App;
