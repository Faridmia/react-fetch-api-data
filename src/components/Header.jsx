import React, { Component } from 'react';
import { newscategory } from '../news';

export class Header extends Component {
  state = {
    searchTerm: ''
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleKeyPress = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { category, changeCategory } = this.props;
    return (
      <div className='my-4'>
        <h1 className='mb-4' style={{ fontWeight: '300' }}>
          Blockbuster Headlines
        </h1>
        <input
          type='search'
          className='form-control'
          placeholder='Type anything & press enter to search'
          value={this.state.searchTerm}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <div className='my-4'>
          {newscategory &&
            Object.keys(newscategory).map((item, index) => {
              if (category === newscategory[item]) {
                return (
                  <button
                    key={index}
                    onClick={() => changeCategory(newscategory[item])}
                    className='btn btn-sm btn-warning mr-2 mb-2'
                  >
                    {`#${newscategory[item]}`}
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  onClick={() => changeCategory(newscategory[item])}
                  className='btn btn-sm btn-light mr-2 mb-2'
                >
                  {`#${newscategory[item]}`}
                </button>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Header;
