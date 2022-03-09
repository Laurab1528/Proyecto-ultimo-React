import React from 'react'
import Items from 'Items'

export default function Itemlist({Items}) {
  return (
    <section>

        {Items.map(Items=>{
            return(
                <div>
                    <Items
                        key={Items.id}
                        Item={Items}
                    />
                </div>
            )
        })}
    </section>
  )
}
