import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions'
import {CollectionItemContainer, BackgroundImage,CollectionFooterContainer,NameItem,PriceItem,CustomButtonContainer} from './collection-item.styles.jsx'
const collectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer className='collection-item'>
        <BackgroundImage imageUrl={imageUrl} className='image'/>
        <CollectionFooterContainer>
            <NameItem>{name}</NameItem>
            <PriceItem>{price}</PriceItem>
        </CollectionFooterContainer>
        <CustomButtonContainer onClick={()=> addItem(item)} inverted>ADD TO CART</CustomButtonContainer>
    </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch =>({
        addItem:item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(collectionItem)