import React, { Component } from 'react'
import {
  ReactiveBase,
  CategorySearch,
  SingleRange,
  ResultCard,
} from '@appbaseio/reactivesearch'
import initReactivesearch from '@appbaseio/reactivesearch/lib/server'
import './reactivesearcher.css'
const reactiveSearchSettings = {
  settings: {
    app: 'carstore-dataset',
    credentials: '4HWI27QmA:58c731f7-79ab-4f55-a590-7e15c7e36721',
  },
  dataSearcher: {
    componentId: 'searchbox',
    dataField: 'model',
    categoryField: 'brand.keyword',
    placeholder: 'Search for cars',
    className: 'search',
    highlight: true,
  },
  searchSingleRange: {
    componentId: 'ratingsfilter',
    title: 'Filter by ratings',
    dataField: 'rating',
    data: [
      { start: 4, end: 5, label: '4 stars and up' },
      { start: 3, end: 5, label: '3 stars and up' },
    ],
    defaultSelected: '4 stars and up',
  },
  resultsCard: {
    className: 'right-col',
    componentId: 'result',
    title: 'Results',
    dataField: 'model',
    size: 12,
    from: 0,
    size: 5,
    pagination: true,
    onData: data => ({
      image:data.image,
      description:(
        <div>
          <div className="price">${data.price}</div>
					<p className="info">{data.brand} · {data.model}</p>
          <p>year:{data.year} . {data.fuelType}</p>
        </div>
      )      
    }),
    react: { and: ['searchbox', 'ratingsfilter'] },
    innerClass: {
			resultStats: 'result-stats',
			list: 'list',
			listItem: 'list-item',
			image: 'image',
		},
  },
}

class SearchReactive extends Component {
  state = {
    reactivedata: null,
  }
  async componentDidMount() {
    const result = await initReactivesearch(
      [
        {
          ...reactiveSearchSettings.dataSearcher,
          type: 'CategorySearch',
          source: CategorySearch,
        },
        
        {
          ...reactiveSearchSettings.resultsCard,
          type: 'ResultCard',
          source: ResultCard,
        },
      ],
      null,
      reactiveSearchSettings.settings
    )
    this.setState({reactivedata:result})
  }
  render() {
    const {reactivedata}= this.state
    return (
      <div className="container">
        <ReactiveBase {...reactiveSearchSettings.settings} initialState={reactivedata}>
          <nav className="nav">
            <div className="title">
              <CategorySearch {...reactiveSearchSettings.dataSearcher} />
            </div>
            <ResultCard {...reactiveSearchSettings.resultsCard}/>
          </nav>
        </ReactiveBase>
      </div>
    )
  }
}

export default SearchReactive
