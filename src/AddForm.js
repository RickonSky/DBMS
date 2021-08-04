import React, {Component} from 'react';
import './main.css';

class AddForm extends Component{
	render(){
		return(
			<form>
				<input type='text' name='client' placeholder='Enter client name'/>
				<input type='tel' name='client' placeholder='Phone'/>
				<input type='text' name='client' placeholder='Enter plan Title'/>
				<input type='text' name='client' placeholder='Enter plan no.'/>
				<input type='number' name='client' placeholder='Input plot size in sq.m'/>
				<input type='date' name='client' placeholder='Enter date'/>
				<input type='text' name='client' placeholder='Enter Address'/>
				<input type='number' name='client' placeholder='Enter perimeter value'/>
				<input type='text' name='client' placeholder='Job type/description'/>
				<input type='submit' />
			</form>
			);
	}
}
export default AddForm;