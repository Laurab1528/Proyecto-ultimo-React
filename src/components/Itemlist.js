import React from 'react'
import Items from './Items'

const Itemlist= ({items}) =>{
  return (
    <section>

        {items.map (element=>{
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