import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DelModal from './DelModal';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TodoItem({item, delItem}){
    // 체크박스
    const [checked, setChecked] = useState(false);

    const handleCheck = () => {
        setChecked(!checked);
    };

    // 삭제 모달창
    const [open, setOpen] = useState(false);

    return(
        <div className='todo-item'>
            <Checkbox {...label} className='item-checkbox' checked={checked} onChange={handleCheck}/>
            <span className='item-text-container'>
                <div className='item-text' style={{ textDecoration: checked ? 'line-through' : 'none' }}>{item.text}</div>
                <div className='item-date'>{item.date}</div>
            </span>
            {/* <button onClick={() => delItem(item)}>삭제</button> */}
            <IconButton onClick={()=>setOpen(true)} aria-label='delete' className='item-del-button'>
                <DeleteIcon/>
            </IconButton>
            <DelModal delItem={()=>delItem(item.id)} isOpen={open} onClose={()=>setOpen(false)} children={'진짜 삭제 하실 건가요? 🧐'}/>
        </div>
    )
}
export default TodoItem