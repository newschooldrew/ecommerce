import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectDirectoryCategories} from '../../redux/directory/directory.selector'

const Directory = ({categories}) => (
    // since we dont need local state
    // we can just use functional component
        <div className='directory-menu'>
            {
                categories.map(({id, ...otherCategoryProps}) => (
                    <MenuItem key={id} {...otherCategoryProps} />
                ))
            }
        </div>
        )

const mapStateToProps = createStructuredSelector({
  categories:selectDirectoryCategories
})

export default connect(mapStateToProps)(Directory);