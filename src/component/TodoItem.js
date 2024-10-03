import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import DelModal from './DelModal';
import CompleteModal from './CompleteModal';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function TodoItem({item, delItem}){
    // 체크박스
    const [checked, setChecked] = useState(false);
    
    const handleCheck = () => {
        setChecked(!checked);
        setOpenCheckModal(!checked);
        
        item.complete = !checked;
    };

    // 체크 모달창
    const [opeCheckModal, setOpenCheckModal] = useState(false);

    // 삭제 모달창
    const [openDelModal, setOpenDelModal] = useState(false);

    return(
        <div className='todo-item'>
            <Checkbox {...label} className='item-checkbox' checked={checked} onChange={handleCheck}/>
            {checked && opeCheckModal && (<CompleteModal onClose={()=>setOpenCheckModal(false)}/>)}

            <span className='item-text-container'>
                <div className='item-text' style={{ textDecoration: checked ? 'line-through' : 'none' }}>{item.text}</div>
                <div className='item-date'>{item.date}</div>
            </span>

            {/* <button onClick={() => delItem(item)}>삭제</button> */}
            <IconButton onClick={()=>setOpenDelModal(true)} aria-label='delete' className='item-del-button'>
                <DeleteIcon/>
            </IconButton>
            {openDelModal && (<DelModal delItem={()=>delItem(item.id)} onClose={()=>setOpenDelModal(false)} children={'진짜 삭제 하실 건가요? 🧐'}/>)}
        </div>
    )
}
export default TodoItem