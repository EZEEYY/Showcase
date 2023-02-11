import React, { useRef } from "react";
import { Usecustum } from "../Context";
function Drag(){
    const data = Usecustum()
    const dragitem = useRef()
    const draged = useRef()
    const [drag,dragup] = React.useState(false)
    const [datas,datasup] =React.useState(data)
    function handleDrag(e,para){
        dragitem.current = para;
        draged.current = e.target;
        draged.current.addEventListener('dragend',handleDraged)
        setTimeout(() => {
            dragup(true); 
        },0)    
    }
    
    const handleDraged=()=>{
        draged.current.removeEventListener('dragend',handleDraged)
        dragup(false)
    }
    function handleDragEnter(e,paras){
        if(e.target!==draged.current){
            console.log('not the same')
            datasup( (olddata)=>{

                let newData = JSON.parse(JSON.stringify(olddata))
                console.log(newData)
                newData[paras.grpI].items.splice(paras.membersI,0,newData[dragitem.current.grpI].items.splice(dragitem.current.membersI,1)[0])
                dragitem.current = paras
                localStorage.setItem('datas', JSON.stringify(newData));

                return newData;
            }
            )
        }

    }
    
    return(
        <div>

        <div className='all' >
            {data.map((grp,grpI)=>{
                return(
                    <div className='units' draggable >
                        <div  className='title' key={grpI}>
                            {grp.title}
                        </div>
                        <div> {grp.items.map((members,membersI)=>{
                        return(
                            <div className='members' key={membersI} 
                            draggable onDragStart={(e)=>handleDrag(e,{grpI,membersI})}
                            onDragEnter={drag?(e)=>{handleDragEnter(e,{grpI,membersI})}:null}>{members}</div>/////
                        )})}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>

    )
}
export default Drag;