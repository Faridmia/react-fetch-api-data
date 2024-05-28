import './App.css';
import React from 'react';
import Header from './components/Header';
import News, { newscategory } from './news';
import  Newslist from './components/Newslist';
import Pagination from './components/pagination';
import Loading from './components/Loading';

const news = new News( newscategory.technology);


class App extends React.Component {

  state = {
    data: {},
    isLoading: true
  }

  
  changeCategory2 = ( category ) => {
    this.setState( { category } );
  };

 

  componentDidMount() {
      
      news.getNews()
        .then( ( data ) => {
           
            this.setState( { data,isLoading: false } );
        })
        .catch( ( e ) => {
          this.setState({ isLoading: false });
          console.log( e)

      });
      
  }


  next = () => {
      if( this.state.data.isNext) {
          this.setState({
            isLoading: true
          })
      }

      news.next()
        .then( ( data ) => {
          this.setState( { data,isLoading: false } );
      })
      .catch( ( e ) => {
        this.setState({ isLoading: false });
        console.log( e)
      });
  }

  prev = () => {
    if( this.state.data.isPrevious) {
        this.setState({
          isLoading: true
        })
    }

    news.prev()
      .then( ( data ) => {
        this.setState( { data,isLoading: false } );
    })
    .catch( ( e ) => {
      this.setState({ isLoading: false });
      console.log( e)
    });
}



search = ( searchTerm ) => {
  this.setState({ isLoading: true })

  news.search(searchTerm)
    .then( ( data ) => {
        this.setState({ data, isLoading: false })
    })
    .catch( ( e ) => {
      this.setState({ isLoading: false });
      console.log( e)
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

changeCategory = ( category ) => {
  this.setState({ isLoading: true });

  news.changeCategory(category)
    .then( ( data ) => {
      console.log( data);
        this.setState({ data, isLoading: false })
    })
    .catch( ( e ) => {
      this.setState({ isLoading: false });
      console.log( e)
    });
};

  render() {
    const {
      article,
      isPrevious,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage,
    } = this.state.data;
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 offset-md-3">
                <Header 
                  category={category} 
                  changeCategory={this.changeCategory}
                  search={this.search}
                  />
                <div className='d-flex'>
                    <p className='text-black-50'>
                        About {totalResults} results found
                    </p>
                    <p className='text-black-50 ml-auto'>
                        {currentPage} page of {totalPage}
                    </p>
                </div>
                { this.state.isLoading ? (
                  <Loading />
                ) : (
                  <div>
                  <Newslist news={article} />
                  <Pagination 
                    next={this.next} 
                    prev={this.prev}
                    isPrevious={isPrevious}
                    isNext={isNext}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    handlePageChange={this.handlePageChange}
                    goToPage={this.goToPage}
                     />
                  </div>
                )}
                <Loading />
              </div>
          </div>
      </div>
    )
  }
 
}

export default App
