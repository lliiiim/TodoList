import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TodoItem({item, delItem}){
    // 체크박스 상태 관리
    const [checked, setChecked] = useState(false);

    // 체크박스 상태 변경 함수
    const handleCheck = () => {
        setChecked(!checked);
    };

    return(
        <div className='todo-item'>
            <Checkbox {...label} className='item-checkbox' checked={checked} onChange={handleCheck}/>
            <span className='item-text' style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {item.text}
            </span>
            <IconButton aria-label='delete' className='item-del-button' onClick={() => delItem(item.id)}>
                <DeleteIcon />
            </IconButton>
            {/* <button onClick={() => delItem(item)}>삭제</button> */}
        </div>
    )
}
export default TodoItem