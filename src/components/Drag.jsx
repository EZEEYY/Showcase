import React, { useRef } from "react";
import { Usecustum } from "../Context";
function Drag(){
    const data = Usecustum()
    const [order, setOrder] = React.useState(data);
    const [drag,dragup] = React.useState(false)

    const onDragStart = (grpI, membersI, event) => {
        dragup(true)
        event.dataTransfer.setData("grpI", grpI);
        event.dataTransfer.setData("membersI", membersI);
    };

    const onDrop = (grpI, membersI, event) => {
        const sourcegrpI = event.dataTransfer.getData("grpI");
        const sourcemembersI = event.dataTransfer.getData("membersI");

        const sourceGroup = order[sourcegrpI];
        const targetGroup = order[grpI];

        const [draggedItem] = sourceGroup.items.splice(sourcemembersI, 1);
        targetGroup.items.splice(membersI, 0, draggedItem);

        setOrder([...order]);

    }
    
    
    return(
        <div>

        <div className='all'  dra>
            {data.map((grp,grpI)=>{
                return(
                    <div className='units'  draggable>
                        <div  className='title' key={grpI} >
                            {grp.title}
                        </div>
                        <div> {grp.items.map((members,membersI)=>{
                        return(
                            <div className="members" key={membersI} 
                            draggable
                            onDragStart={(event) => onDragStart(grpI, membersI, event)}
                            onDrop={(event) => onDrop(grpI, membersI, event)}
                            onDragOver={(event) => event.preventDefault()}>{members}</div>/////
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