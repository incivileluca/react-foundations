import Image from "next/image";
import React from "react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

import {EventButton} from './EventButton';
import {ProductList} from './ProductList';
import {DivwithContent, DivwithContentFallback} from "@/CustomDivs";


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

