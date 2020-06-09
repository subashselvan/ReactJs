import React, { Component } from 'react'

class TrendingShows extends Component {

  state = {
    showsList: [
      { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false },
      { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
      { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
      { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
    ]
  };

  // when attaching event in an element, .bind(this) is needed to get the context of 'this' keyword
  addToWatchlistHandler(index){
    console.log(index);
    // make use of the index 
    // duplicating arr using spread operator 
    // changing isInWatchList based on index 
    
    // the best solution would be the following...
    // working with state immutably -- approach #1
    let items = [...this.state.showsList]; // duplicating array -- spread operator
    items[index].isInWatchList = !items[index].isInWatchList;
    this.setState( { showsList: items });
  }

  render() {

    let trendingShowList = null;
    if(this.state.showsList && this.state.showsList.length > 0 ){

      // loop thru state showsList one by one 
      trendingShowList = this.state.showsList.map( ( show, index ) =>{
        // compile the li's with state's data
        // return the li's 
        return (
          <li className='list-group-item' key={show.id}>
            #{show.id}. {show.name} - hosted by {show.host}
            <button type="button" 
              className="btn btn-primary btn-sm float-right" 
              onClick={this.addToWatchlistHandler.bind(this, index)}>
               { show.isInWatchList?  'In Watchlist': 'Add to Watchlist' }
            </button>
          </li>
        )
      });
    }

    return (
      <div>
        <h2>Trending Shows | Lists and Keys Example</h2>
        <ul className="list-group">
          { /* Will have conditionals */ }
          { this.state.showsList && this.state.showsList.length > 0 ? 
              trendingShowList
              :
              <div className='alert alert-danger'>
                No Trending shows found!
              </div>
          }
        </ul>
      </div>
    )
  }
}

export default TrendingShows;