import React, { Component } from 'react'

class Pagination extends Component {

  state = {
    isEditable: false
  }

  goToPage = () => {
    this.setState({ isLoading: true });
    news.setCurrentPage( this.state.data.currentPage)
        .then( ( data) => {
            this.setState({ data, isLoading: false });
        })
        .catch((e) => {
            console.log(e);
            this.setState({ isLoading: false });
        });
  };

  handlePageChange = ( value ) => {
    this.setState({
        data: {
            ... this.state.data,
            currentPage: Number.parseInt( value )
        },
    });
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
        prev,
        handlePageChange,
        goToPage
      } = this.props;
    return (
        <div className='d-flex my-5 align-items-center'>
            <button className='btn btn-warning' disabled={!isPrevious} onClick={() => {
                prev();
            }}>Previous</button>
            <div className='flex-grow-1 text-center'> 
                {this.state.isEditable ? (
                    <input type='number' value={currentPage} 
                    onChange={(e) => handlePageChange(e.target.value )}
                    onKeyPress={( e ) => {
                        if( e.key === 'Enter') {
                            goToPage();
                            this.setState({ isEditable: false });
                        }
                    }}
                    />
                ): (
                    <p style={{ userSelect: 'none', lineHeight: '1.1' }} title= 'double tap to userSelect' 
                        onDoubleClick={ () => {
                            this.setState({isEditable: !this.state.isEditable})
                        }}
                    >
                        {currentPage} of {totalPage}
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
