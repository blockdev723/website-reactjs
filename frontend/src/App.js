import React from 'react';
import Banner from './components/Banner'
import IdiomList from './components/IdiomList';
import Tags from './components/Tags';

import './App.css';

const tags_data = ['greeting', 'say thanks', 'say sorry'];

function App() {
  return (
    <div className="home-page">

        <Banner />  
        {/* token={this.props.token} appName={this.props.appName} */}

        <div className="container page">
          <div className="row">
            <div className="col-md-3">
              <div className="sidebar">

                <p>Popular Tags</p>
                {/* Tags (Classify) */}                
                <Tags
                  tags={tags_data}
                  onClickTag={null} />

              </div>
            </div> 
            <div className="col-md-9">
              <IdiomList/>  
            </div>                  
          </div>
        </div>

      </div>
  );
}

export default App;
