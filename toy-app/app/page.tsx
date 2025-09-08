import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Home() {
const PRODUCTS: Array<String>= ["Apple", "Orange", "Banana", "Kiwi", "Pineapple", "Grapes"]

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

  <Footer/>
  </div>

  );
}

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

