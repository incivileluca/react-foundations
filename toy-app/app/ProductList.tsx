/* This section shows how to handle properties */

//note: there seems to bee an TS Error regarding the passing of generics as attrbutes
export function ProductList({products}: Array<String>){

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