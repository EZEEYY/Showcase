import React from "react";
const MyContext = React.createContext()
const Provider=({children})=>{
    const data= [
        {title:'Column-A',items: ['A1','A2','A3']},
        {title:'Column-B',items:['B1','B2','B3']},
        {title:'Column-C',items:['C1','C2','C3']},
    ]

return(
    <MyContext.Provider value={data}>
        {children}
    </MyContext.Provider>
)
}
export {MyContext,Provider}
export const Usecustum=()=>{
    return React.useContext(MyContext)
}