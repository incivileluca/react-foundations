import Image from "next/image";

export default function Home() {
  return (
 <div>
  <Header/>
  <h6>this is the HOME</h6>
  <Footer/>
  </div>

  );
}

function Header(){
return(
    <header>
        <h1>Develop. Preview. Ship.</h1>
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
  )
}

