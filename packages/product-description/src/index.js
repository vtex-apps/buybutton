import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { injectIntl, intlShape, addLocaleData } from 'react-intl'

import VTEXClasses from './CustomClasses'

import ptLocale from './locales/pt-BR.json'
import enLocale from './locales/en-US.json'

addLocaleData([
  { ...ptLocale, locale: 'pt-BR' },
  { ...enLocale, locale: 'en-US' },
])

class ProductDescription extends Component {
  render() {
    console.log(this.props.intl)
    return (
      <div className={`${VTEXClasses.PRODUCT_DESCRIPTION} ma2`}>
        <div className="f4 b ttu mb3">
          { this.props.intl.formatMessage({ id: 'product-description' }) }
        </div>
        { this.props.children }
      </div>
    )
  }
}

ProductDescription.propTypes = {
  /** Children component which contains the product description */
  children: PropTypes.node.isRequired,
  /** Internacionalization */
  intl: intlShape.isRequired,
}

ProductDescription.defaultProps = {
  children: {},
}

export default injectIntl(ProductDescription)