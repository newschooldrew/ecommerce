import {connect} from 'react-redux'
import {createStructureSelector} from 'reselect'

import {selectIsCollectionFetching} from '../../redux/shop.selector'
import WithSpinner from '../with-spinner/with-spinner.component'
import CollectionsOverview from './collections-overview.component'