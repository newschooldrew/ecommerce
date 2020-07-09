import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import {PreviewCollectionContainer,TitleItem,PreviewItem} from './preview-collection.styles'

const PreviewCollection = ({title,items}) =>(
    <PreviewCollectionContainer>
        <TitleItem>{title}</TitleItem>
        <PreviewItem>
            {
                items
                .filter((item,i) => i <4)
                .map(item =>(
                    <CollectionItem key={item.id} item={item} price={item.price} name={item.name} imageUrl={item.imageUrl}/>
                ))
            }
        </PreviewItem>
    </PreviewCollectionContainer>
)

export default PreviewCollection;