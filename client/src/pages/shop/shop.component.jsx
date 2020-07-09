import React, {useEffect, lazy, Suspense} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/spinner.component'

const CollectionsOverviewContainer = lazy(()=>import('../../components/collections-overview/collections-overview.container'))
const CollectionPageContainer = lazy(() => import('../collection/collection.container'))

const ShopPage = ({fetchCollectionsStart, match}) => {

    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])

// we dont want use useEffect again so
// we add fetchCollectionsStart as a dependency bc
// we know that fetchCollectionsStart is not going to re-render
    return(
        <div className='shop-page'>
            <Suspense fallback={<Spinner />}>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
                {/* :categoryId
            allows us to access this categoryID as a parameter on the match object */}
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
        </div>
        )  
    }


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);