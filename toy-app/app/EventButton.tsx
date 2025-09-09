//this is needed to specify this file as FE-code: https://react.dev/reference/rsc/use-client
//the event-handlers section, would not work without it
'use client';

import { useState } from 'react';


/* This section show how to work with events and states*/
export function EventButton(){
  //state gives possibility to save a value, first item of array is the value, second a setter
const [likes, setLikes] = useState(0);

  return(
    <div>
      <button onClick={handleClick}>Like: {likes}</button>
    </div>
  );

  //note: this gets called at every Button click -> component gets recreated after every event?
  console.log("the state at current state:", likes);
  //note: logic for updating state should live inside respective component
  function handleClick(){
    console.log("Like clicked");
    setLikes(likes +1);
  }
}