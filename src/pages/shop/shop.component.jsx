import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import  CollectionPage from "../collection/collection.component";
const ShopPage = ({match}) => {
    console.log(match)
   return (
                <div className='shop-page'>
                    <Route exact path={`${match.path}`} component={CollectionsOverview} />
                    {/* :categoryId
                    allows us to access this categoryID as a parameter on the match object */}
                    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>)
    }

export default ShopPage;