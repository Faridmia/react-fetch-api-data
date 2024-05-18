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

  
  changeCategory = ( category ) => {
    this.setState( { category } );
  };

 

  componentDidMount() {
      
      news.getNews()
        .then( ( data ) => {
            console.log( data);
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



  render() {
    const {
      article,
      isPrevious,
      isNext,
      category,
      totalResults,
      currentPage,
      totalPage
    } = this.state.data;
    return (
      <div className="container">
          <div className="row">
              <div className="col-sm-6 offset-md-3">
                <Header category={this.state.category} changeCategory={this.changeCategory}/>
                <div className='d-flex'>
                    <p className='text-black-50'>
                        About {0} results found
                    </p>
                    <p className='text-black-50 ml-auto'>
                        {1} page of {100}
                    </p>
                </div>
                { this.state.isLoading ? (
                  <Loading />
                ) : (
                  <div>
                  <Newslist news={this.state.data.article} />
                  <Pagination 
                    next={this.next} 
                    prev={this.prev}
                    isPrevious={isPrevious}
                    isNext={isNext}
                    totalPage={totalPage}
                    currentPage={currentPage}
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
