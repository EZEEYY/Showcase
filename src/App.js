import './App.css';

function App(){
  const data= [
    {title:'Column-A',items: ['A1','A2','A3']},
    {title:'Column-B',items:['B1','B2','B3']},
    {title:'Column-C',items:['C1','C2','C3']},
  ]

  
  return(
    <div>

        <div className='all'>
          {data.map((grp)=>{
              return(
                <div className='units'>
                  <div draggable className='title'>
                  {grp.title}
                  </div>

                <div> {grp.items.map((members)=>{
                  return(
                    <div className='members' draggable >{members}</div>
                    )
                  })}</div>
                  </div>
      
              )
              })}

        </div>
    </div>
  )
}
export default App;