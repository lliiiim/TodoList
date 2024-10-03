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
    
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}.${currentDate.getMonth() + 1}.${currentDate.getDate()}`;
    
    const newItem = {
      id: nextId.current,
      text: inputValue,
      date: formattedDate,
      complete: false
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
  
  // 삭제
  const delItem = (id) => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== id))
  }

  // complete 상태 업데이트
  const updateComplete = (id, complete) => {
    setTodoList(todoList.map(item => item.id === id ? { ...item, complete } : item));
  };

  const incompleteCount = todoList.filter(item => !item.complete).length;

  return (
    <div className='box-line'>
      <h1>{incompleteCount > 0 ? `오늘의 할 일은 ${incompleteCount}개 입니다. 🤓` : '오늘의 할 일은 뭔가요? 🤔'}</h1>
      <div className='input-container'>
        {/* <input type='text' onChange={(event)=>console.log(event.target.value)}/> */}
        <input className='todo-input' value={inputValue} type='text' placeholder='오늘도 화이팅!' onChange={(e)=>setInputValue(e.target.value)} onKeyDown={(e)=>enterKey(e)}/>
        {/* <button onClick={addItem}>추가</button> */}
        <Button variant='contained' style={{backgroundColor: '#A6948D'}} onClick={addItem}>추가</Button>
      </div>
      <div className='list-container'>
        <TodoBoard todoList={todoList} delItem={delItem} updateComplete={updateComplete}/>
      </div>
    </div>
  );
}

export default App;
