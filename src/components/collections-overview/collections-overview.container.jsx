import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {compose} from 'redux'

import {selectIsCollectionFetching} from '../../redux/shop/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
    // here we have to set the name of the the prop
    // to be the one that the WithSpinner (HOC) is expecting
})

// const collectionsOverviewContainer = connect(mapStateToProps)(WithSpinnger(CollectionsOverview))

// compose allows you to curry functions together

const collectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default collectionsOverviewContainer;