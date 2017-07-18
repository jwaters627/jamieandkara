import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './components/main';
import WeekendEvents from './components/WeekendEvents/weekendEvents';

module.exports = (
	<BrowserRouter >
		<div style={{'backgroundColor':'#777'}}>
			<Route path="/" component={Main} />
			<Route path="/weekend_events" component={WeekendEvents} />
			<Route path="/where_to_stay" component={WeekendEvents} />
			<Route path="/things_to_do" component={WeekendEvents} />
			<Route path="/registry" component={WeekendEvents} />
			<Route path="/wedding_party" component={WeekendEvents} />
			<Route path="/about_us" component={WeekendEvents} />
		</div>
	</BrowserRouter>

);