import React from 'react'

const SearchResultItem = props => (
  <div>
    <img src="https://bit.do/demoimg" alt="demo" />
    <p>title:{props.model}</p>
    <p>
      description:{' '}
      {`description:${props.info.brand} ★ with rating:${props.info.rating}`}
    </p>
  </div>
)

export default SearchResultItem

/**
 * image: 'https://bit.do/demoimg',
                  title: res.model,
                  description: res.brand + ' ' + '★'.repeat(res.rating),
 */
