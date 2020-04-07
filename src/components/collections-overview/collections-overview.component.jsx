import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PreviewCollection from '../preview-collection/preview-collection.component'
import {selectCollections} from '../../redux/shop/shop.selector'
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => {
console.log(collections)
return (
    <div className='collections-overview'>
            {
                collections.map(collection => (
                    <PreviewCollection key={collection.id} title={collection.title}items={collection.items} />
                ))}
    </div>
)
                }
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)