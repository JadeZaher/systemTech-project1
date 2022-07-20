import React, {useState} from 'react'
import List from './List.Component' 

export default function Board({data}) {
  const [currentPositions, setPositions] = useState(data)

  function nextList(cardI, listI){
    console.log('move '+cardI+' in list '+listI+' to the end of list '+ (listI+1) + 'if from list N do not move')
    //get value of selected item

    if(listI<3){

      //append value of selected item to listI+1 
      setPositions(previous => {
        var currentPositions = [...previous]

        console.log(currentPositions[listI])
        currentPositions[listI+1].cards.push(currentPositions[listI].cards[cardI])
        
        return currentPositions

      })

      //remove currentVal from current list
      setPositions(previous => {
        var currentPositions = [...previous]

        currentPositions[listI].cards.splice(cardI, 1)
        
        return currentPositions

      })

    } else{
      alert('last list reached')
    }
  }

  function backList(cardI, listI){
    console.log('move '+cardI+ 'in list '+ listI + 'to the end of list'+ (listI-1) + 'if from list 0 do not move' )
    //append value of selected item to listI+1 
    if(listI>0){
      setPositions(previous => {
        var currentPositions = [...previous]

        console.log(currentPositions[listI])
        currentPositions[listI-1].cards.push(currentPositions[listI].cards[cardI])

        return currentPositions
        
      })
      //remove currentVal from current list
      setPositions(previous => {
        var currentPositions = [...previous]

        currentPositions[listI].cards.splice(cardI, 1)
      
        return currentPositions
      })
        
    }else{
      alert('last list reached')
    }
  }
  //add a card
  function add(listI){
    var cardContentInput = prompt('Card Content')

   
      setPositions(previous => {
        var newList = [...previous] 
  
        console.log(newList[listI])
        newList[listI].cards = [...previous[listI].cards, cardContentInput] 
  
        return newList 
      });
    
  }
  return (
  <>

      <h2>
      Board
      </h2>
    <div className='Board'> 
      
      
      {data.map((list, listI) => (
        
        <List 
        listHeader= {list.listHeader}
        cards={list.cards}
        listI={listI} 
        data={data} 
        backList={backList} 
        nextList={nextList}
        add={add} 
        key={listI}
        />  
      ))}

    </div>

  </>
  )
}
