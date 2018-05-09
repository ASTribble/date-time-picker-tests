import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker1.css';

//this one is pretty good - the calendar does not display if there isn't enough viewport height 
//and it makes it look like it isn't working.
//also, padding on the time-list has to be manually removed, and the width of the input's 
// display container needs to be wider if you want to show a more-complete date


export default class DatePicker1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date){
    this.setState({
      startDate: date
    });
  }

  render() {
    console.log('startDate in state:',this.state.startDate);
    return (
      <section>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          timeIntervals={15}
          dateFormat='llll'
          timeCaption='Time'
        />

        {/* <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          dateFormat="LT"
          timeCaption="Time"
        /> */}

        {<p>ll: {this.state.startDate.local().format('ll')}</p>}
        {<p>lll: {this.state.startDate.local().format('lll')}</p>}
        {<p>llll: {this.state.startDate.local().format('llll')}</p>}
        {<p>LL: {this.state.startDate.local().format('LL')}</p>}
        {<p>LLL: {this.state.startDate.local().format('LLL')}</p>}
        {<p>LLLL: {this.state.startDate.local().format('LLLL')}</p>}
        {<p>LT: {this.state.startDate.local().format('LT')}</p>}
  

      </section>
    );
  }
}