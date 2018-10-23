import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import getSearchResult from './services/bingImageSearch';

import './styles/App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      lastSearchKeybord: ''
    };
  }

  handleOnKeyDown = (e) => {
    const { value } = this.state;
    if (e.keyCode === 13) {
      getSearchResult(value, '');
      this.setState({ lastSearchKeybord: value });
      this.setState({ value: '' });
    }
  }

  handlOnChange = (e) => {
    this.setState({ value: e.target.value });
  }

  showNextPage = () => {
    const { lastSearchKeybord } = this.state;
    const { bingImages } = this.props;
    getSearchResult(lastSearchKeybord, bingImages.get('nextOffset'));
  }

  render() {
    const { value } = this.state;
    const { bingImages } = this.props;
    return (
      <div className="App">
        <h1>ARM - Bing Images Search API</h1>
        <input
          type="text"
          placeholder="Search images"
          value={value}
          onKeyDown={this.handleOnKeyDown}
          onChange={this.handlOnChange}
        />
        <div className="container">
          {
            bingImages.get('data').length > 0
            && <div className="nextPage" onKeyDown={this.showNextPage} onClick={this.showNextPage} role="button" tabIndex={0}>Next Page</div>
          }
          <div className="photos">
            {
              bingImages.get('data').map(item => (
                <img key={item.imageId} src={item.thumbnailUrl} alt={item.name} />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  bingImages: PropTypes.shape(),
};
App.defaultProps = {
  bingImages: []
};

function mapStateToProps(state) {
  return {
    bingImages: state.bingImages
  };
}

export default connect(mapStateToProps, null)(App);
