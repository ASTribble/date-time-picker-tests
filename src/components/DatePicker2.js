import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

//this one is simple.  It states that one of it's benefits is 
//no use of moment.js, but that's in the code I'm looking for..
export default class DatePicker2 extends React.Component {
  state = {
    date: new Date()
  }

  onChange = date => this.setState({date})

  render() {
    console.log(this.state.date);
    return (
      <div>
        <DateTimePicker
          onChange={this.onChange}
          value={this.state.date}
        />

        <p>{this.state.date.toLocaleTimeString()}</p>
        <p>{this.state.date.toDateString()}</p>
        <p>{this.state.date.toLocaleDateString()}</p>
      </div>
    );
  }
}