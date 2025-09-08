//this is needed to specify this file as FE-code: https://react.dev/reference/rsc/use-client
//the event-handlers section, would not work without it
'use client';

import Image from "next/image";
import React from "react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useState } from 'react';

//export default -> main component of page
export default function Home() {
const PRODUCTS: Array<String>= ["Apple", "Orange", "Banana", "guave", "Pineapple", "Grapes"]
 
    return (
 <div>
  <Header/>

  <h6>inline fixed HTML</h6>
  <AcceptsProps content="hello"/>
  <DivwithContent content="world"/>
  <DivwithContentFallback/>
  <DivwithContentFallback content="Fallback not needed"/>
  <br/>
  <ProductList products={PRODUCTS}/>
  <EventButton/>

  <Footer/>
  </div>

  );
}

/* This section show how to work with events and states*/

function EventButton(){
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


/* This section shows how to handle properties */

//note: there seems to bee an TS Error regarding the passing of generics as attrbutes
function ProductList({products}: Array<String>){

return(
<>
  <div>We currrently offer these products:</div>
  <ul>
    {
      products.map(
        (productName) => (<li key={productName}>{productName}</li>) 
      )
    }
  </ul>
</>
);

}

//Question: should props be declared as type any? Better solutions?
//Especially be carefull when working with data from outside sources
function AcceptsProps(props: any){
  console.log(props);
  let stringObject = props.toString();
   return(
    <>
    <div>Trying out props:</div>
    <div>string Object: {stringObject} </div>
    <div>inlineFunction: {props.toString()} </div>
    <div>Acces attributes: {props.content}</div>
    </>
  );
}

  function DivwithContent({content}: any){
     return(
     <div>directly derefered attribute: {content}</div>
     );
  }

    function DivwithContentFallback({content}: any){
     return(
     <div>Fallback-safe: {content ? content : "Default if prop is null"}</div>
     );
  }

/* This section shows how to use static html*/
function Header(){
return(
    <header>
        <h1>I am the header.</h1>
  </header>
);
}

function Footer(){
  return(
    <>
    <footer>
      <h6>This is the Footer</h6>
    </footer>
    </>
  );
}

