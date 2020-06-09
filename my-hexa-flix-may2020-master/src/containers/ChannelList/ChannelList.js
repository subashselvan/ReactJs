// Class Component
import React, { Component } from 'react';

class ChannelList extends Component {

  constructor() {
    super();
    // component level data -- states 
    // states are available only to class components 
    this.state = {
      channelList: [
        { channelName: 'Star Sports', desc: '#1 Sports Channel' },
        { channelName: 'HBO', desc: 'Entertainment Channel' },
        { channelName: 'NatGeo', desc: 'Infotainment Channel' }
      ],
      channelManager: 'Arun'
    }
  }

  addToFavHandler = () => {
    console.log('Before changing state');
    //this.state.channelList[0].channelName = 'Star Sports 2'; // not a recommended one -- wont re-render
    // setState will re-render the component UI
    // setState is expensive  -- because it will result in re-render of the UI
    // only if needed you have to use setState
    // setState will merge the changes with the properties of state obj. 
    this.setState( {
      channelList: [
        { channelName: 'Star Sports [Added]', desc: '#1 Sports Channel' },
        { channelName: 'HBO', desc: 'Entertainment Channel' },
        { channelName: 'NatGeo', desc: 'Infotainment Channel' }
      ]
    }, () => {
      console.log('After changing state');
      console.log(this.state.channelList[0].channelName);
    });
  }

  render() {
    console.log('Inside Render()');

    console.log(this.props);
    return (
      <div className='text-left'>
        <h2>{this.props.children}</h2>

        <div className="row">

          <div className='col-md-3'>
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[0].channelName}</h5>
                <p className="card-text">{this.state.channelList[0].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right" 
                  onClick={this.addToFavHandler}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>
          
          <div className='col-md-3'>
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[1].channelName}</h5>
                <p className="card-text">{this.state.channelList[1].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className='col-md-3'>
            <div className="card">
              <div className="card-body">
                <img className="card-img-top" alt="..." />
                <h5 className="card-title">{this.state.channelList[2].channelName}</h5>
                <p className="card-text">{this.state.channelList[2].desc}</p>
                <button type="button"
                  className="btn btn-primary float-right">
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    )
  }
}

export default ChannelList;