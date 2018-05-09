import React from 'react';

export default function Results(props) {

    const results = props.content.map((c,i) => {
      return (
        <li key={i}> The value of input {i+1} was: {c}</li>);
    });
    
  return (
    <ul style={{listStyle: 'none'}}>
      {results}
    </ul>
  );
}