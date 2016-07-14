import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import {Row,Col} from 'antd';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import Archives from './components/Archives';
import Archive from './components/Archive';
import LeftNavigation from './components/LeftNavigation';
import Candidates from './components/Candidates';
import Interview from './components/Interview';
import InterviewsList from './components/InterviewsList';
import Overview from './components/Overview';
import Postings from './components/Postings';
import Posting from './components/Posting';
import Interviews from './components/Interviews';
import Statistics from './components/Statistics';
import StatisticsOverview from './components/StatisticsOverview';
import StatisticsChannelQuality from './components/StatisticsChannelQuality';
import StatisticsResume from './components/StatisticsResume';



class App extends React.Component{
  render(){
    return(
      <div>
        <Row gutter={16}>
          <Col span='4'><LeftNavigation /></Col>

          <Col span='20'>{this.props.children}</Col>
        </Row>
    </div>

    );
  }
}


render(<Router history={browserHistory}>
         <Route path="/" component={App}>
          <IndexRoute component={Overview} />
          <Route path="dashboard" component={Overview} />
          <Route path="candidates" component={Candidates} />
          <Route path="postings" component={Postings}>
           <Route path=":id" component={Posting} />
          </Route>
          <Route path="interviews" component={Interviews}>
           {/*<IndexRoute component={InterviewsList} />*/}
           <Route path=":id" component={Interview} />
          </Route>
          <Route path="archives" component={Archives}>
           <Route path=":id" component={Archive} />
          </Route>
          <Route path="statistics" component={Statistics}>
           <IndexRoute component={StatisticsOverview} />
           <Route path="channel" component={StatisticsChannelQuality} />
           <Route path="resume" component={StatisticsResume} />
          </Route>
         </Route>
       </Router>,document.getElementById('root'));
