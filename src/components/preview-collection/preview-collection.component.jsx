import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './preview-collection.styles.scss'

const PreviewCollection = ({title,items}) =>(
    <div className='preview-collection'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {
                items
                .filter((item,i) => i <4)
                .map(item =>(
                    <CollectionItem key={item.id} item={item} price={item.price} name={item.name} imageUrl={item.imageUrl}/>
                ))
            }
        </div>
    </div>
)

export default PreviewCollection;