import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import  CollectionPageContainer from "../collection/collection.container";
import {fetchCollectionsStart} from '../../redux/shop/shop.actions'

class ShopPage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }

render(){    
    const { match} = this.props;
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            {/* :categoryId
            allows us to access this categoryID as a parameter on the match object */}
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
        )  
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null,mapDispatchToProps)(ShopPage);