import Card from './Card.Component'

export default function List({listHeader, listI, cards,backList, nextList, add, data}) {



  return (
    <div className='List'>
    
      <h2>
      {listHeader}
      </h2>
      <button onClick={()=>add(listI)}>Add</button>
      {cards.map((card, cardI)=>(
    
        <Card cardContent={card} cardI={cardI} listI={listI} next={nextList} back={backList} key={cardI}/>

      ))}


    
    </div>
  )
}
