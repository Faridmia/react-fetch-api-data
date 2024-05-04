import './App.css';
import React from 'react';
import Header from './components/Header';
import { newscategory } from './news';
import Newslist from './components/Newslist';
import Pagination from './components/pagination';
import Loading from './components/Loading';
import axios from 'axios';


class App extends React.Component {

  state = {
    news: [],
    category: newscategory.technology
  }

  changeCategory = ( category ) => {
     this.setState( { category } );
  }

  

  componentDidMount() {
    let apiData = process.env.REACT_APP_NEWS_API_KEY;
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${apiData}&category=${this.state.category}&pageSize=5`;
      axios.get(url)
        .then( ( response )=> {
          this.setState({
            news: response.data.articles,
          });
        })
        .catch(( e ) => {
            console.log( e );
        });
  }

  componentDidUpdate( prevProps, prevState ) {
    if( prevState.category != this.state.category ) {
      let apiData = process.env.REACT_APP_NEWS_API_KEY;
      const url = `${process.env.REACT_APP_NEWS_URL}?apiKey=${apiData}&category=${this.state.category}&pageSize=5`;
      axios.get(url)
        .then( ( response )=> {
          this.setState({
            news: response.data.articles,
          });
        })
        .catch(( e ) => {
            console.log( e );
        });
    }
  }

  render() {
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
                <Newslist news={this.state.news} />
                <Pagination />
                <Loading />
              </div>
          </div>
      </div>
    )
  }
 
}

export default App
