import React, {Component} from 'react';
import './main.css';
import SearchBox from './SearchBox.js';


class Entity extends Component{
	render(){
		return(
			<div id='entityPage'>
				<header>
					<button>Add New </button>
					<SearchBox/><br/><br/>
				</header>
				<div id="table">
					<div className='row'>
						<span className="tableHead">Plan no.</span>
						<span className="tableHead">Title</span>
					</div>
					<div className='row'>
						<span className='cell'>Plan no.</span>
						<span className='cell'>Title</span>
						<strong id="showHide">v</strong>
					</div>
					<div className='row'>
						<span className='cell'>Plan no.</span>
						<span className='cell'>Title</span>
						<strong id="showHide">v</strong>
					</div>
					<div className='row'>
						<span className='cell'>Plan no.</span>
						<span className='cell'>Title</span>
						<strong id="showHide">v</strong>
					</div>
				</div>
			</div>
			);
	}
}

export default Entity;