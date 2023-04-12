import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return <h1>Xin chào, {props.name}!</h1>;
}

export default Greeting;