import React, { useEffect } from 'react';

function CompleteModal({ onClose }){
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 500);

        return () => clearTimeout(timer);
        
    }, [onClose]);
    
    return(
        <div onClick={onClose} className='modal-overlay'>
            <div onClick={(e)=>e.stopPropagation()} className='modal' style={{display: 'flex', justifyContent: 'center', width: '150px', height: '5px'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>고생하셨습니다. 👏</div>
            </div>
        </div>
    )
}

export default CompleteModal;