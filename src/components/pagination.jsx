import React, { Component } from 'react'

class Pagination extends Component {

  state = {
    isEditable: false
  }
  render() {

    const {
        isPrevious,
        isNext,
        category,
        totalResults,
        currentPage,
        totalPage,
        next,
        prev
      } = this.props;
    return (
        <div className='d-flex my-5 align-items-center'>
            <button className='btn btn-warning' disabled={!isPrevious} onClick={() => {
                prev();
            }}>Previous</button>
            <div className='flex-grow-1 text-center'> 
                {this.state.isEditable ? (
                    <input type='number' value='1'/>
                ): (
                    <p style={{ userSelect: 'none', lineHeight: '1.1' }} title= 'double tap to userSelect' 
                        onDoubleClick={ () => {
                            this.setState({isEditable: !this.state.isEditable})
                        }}
                    >
                        {1} of {100}
                        <br/ >
                        <small>Double tap to edit</small>
                    </p>
                )}
            </div>
            <button className='btn btn-warning ml-auto' disabled={!isNext} onClick={() => {
                next();
            }}>Next</button>
        </div>
    )
  }
}

export default Pagination
