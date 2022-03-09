import React from 'react'
import Item from 'Item'

export default function Itemlist({Items}) {
  return (
    <section>

        {Items.map(Item=>{
            return(
                <div>
                    <Item
                        key={Item.id}
                        Item={Item}
                    />
                </div>
            )
        })}
    </section>
  )
}
