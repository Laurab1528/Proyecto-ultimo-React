import React from 'react'
import Items from './Items'

const Itemlist= ({item}) =>{
  return (
    <section>

        {item.map (element=>{
            return(
               
                <Items
                    key={element.id}
                    item={element}
                />
                
            )
        })}
    </section>
  )
}

export default Itemlist