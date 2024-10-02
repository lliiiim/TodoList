import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const btnStyles = makeStyles({
    root:{
        marginTop: '20px',
        margin: '5px'
    }
});

function DelModal({ delItem, isOpen, onClose, children }){
    if (!isOpen) return null;
    
    const btnStyle = btnStyles();

    return(
        <div onClick={onClose} className="modal-overlay">
            <div onClick={(e)=>e.stopPropagation()} className="modal">
                <button onClick={onClose} className="modal-close">❌</button>
                {children}
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Button className={btnStyle.root} variant='contained' style={{backgroundColor: '#594E4D'}} onClick={delItem}>삭제</Button>
                    <Button className={btnStyle.root} variant='contained' style={{backgroundColor: '#A6948D'}} onClick={onClose}>취소</Button>
                </div>
            </div>
        </div>
    )
}

export default DelModal;