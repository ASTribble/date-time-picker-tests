import React from 'react';
import Results from './Results';
import Button from './Button';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      input1: '',
      input2:'',
      content: [],
    };
  }

  handleClick(){
    this.setState({content: 
      [this.state.input1, this.state.input2]
    }); 
  }

  resetState(){
    this.setState({
      input1:'',
      input2:'',
      content: []
    });
  }

  handleChange(e, inputNum){
    this.setState({content: []});
    if(inputNum === 1) this.setState({ input1: e.target.value });
    if(inputNum === 2) this.setState({ input2: e.target.value});
  }

  render (){
    let results, inputs, button;
    if (this.state.content.length > 0){
      results = <Results content={this.state.content}/>
      button = 
        <Button
          handleClick={() => this.resetState()}
          name='Reset'
        />

    }else {
      inputs =
        <form>

          <input
            type='text'
            value={this.state.input1}
            onChange={e => this.handleChange(e, 1)}
          />

          <input
            type='text'
            value={this.state.input2}
            onChange={e => this.handleChange(e, 2)}
          />

        </form>;

      button =
        <Button
          handleClick={() => this.handleClick()}
          name='Print Value'
        />;

    }

    return (
      <section>
        {inputs}
        {results}
        {button}
      </section>
    );
  }
}