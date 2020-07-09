import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector'
import {CollectionsOverviewContainer} from './collections-overview.styles.jsx';

const CollectionsOverview = ({collections}) => {
console.log(collections)
return (
    <CollectionsOverviewContainer>
            {
                collections.map(collection => (
                    <PreviewCollection key={collection.id} title={collection.title}items={collection.items} />
                ))}
    </CollectionsOverviewContainer>
)
                }
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)