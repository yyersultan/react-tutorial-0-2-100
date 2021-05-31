import React from 'react'

const  ProfileStatus = (props) => {
    const[showStatus,setShowStatus] = React.useState(false);
    const[statusText,setStatusText] = React.useState(props.status);
    
    const activeStatus = () => {setShowStatus(true);}
    const deavtiveStatus = () => {setShowStatus(false);}
    
    const onStatusInpChange = (e) => {
        setStatusText(e.target.value);
    }
    
    return (
        <div>
            {!showStatus ? <div onDoubleClick = {activeStatus}> {props.status} </div>
            :<div>
                <input type="text" value = {statusText}
                    autoFocus
                    onBlur = {deavtiveStatus} 
                    onChange = {onStatusInpChange}/>
            </div>}
        </div>
    )
}

export default ProfileStatus
