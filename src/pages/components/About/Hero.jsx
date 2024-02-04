import React from "react";

function Hero() {
 React.useEffect(() => {
  if (document.getElementById("ageOfSaad")) {
   var age = Math.floor((new Date() - new Date(2005, 7, 3)) / 3.15576e10);
   document.getElementById("ageOfSaad").innerHTML = age;
  }
 }, []);
 return (
  <>
   <div className="row gap-5 mb-5 pb-5">
    <div className="col-lg-7">
     <div className="card bg-transparent text-white border-0">
      <div className="card-body ps-0">
       <h2 className="card-title">Saad Al Amin</h2>
       <h5 className="card-subtitle small mb-2">
        Artist, Graphic Designer, Leader
       </h5>
       <br />
       <hr />
       <br />
       <p className="card-text">
        Saad Al Amin is a Bangladeshi artist, film maker and graphics designer
        born 3 August 2005 in Dhaka, Bangladesh. He is now working as a leading
        personality in tons of activities. Saad is also a very well known
        personality in Bangladesh who has been working hard to make a difference
        in Bangladesh. He is also very passionate about working with youth. He
        founded Muktir Ghonta and Videophics in 2018. Muktir Ghonta is an
        organization that helps youth to develop their potential through
        Creative Works. He has also founded Creative Youth Community - CYC which
        helps to develop the skills of the youth through arts & culture related
        activities.
        <br />
        <br />
        At present, he is also serving as Campus Ambassador at English Olympiad
        and as Photography & Design Artist at 100 Million Mindset. As a Graphics
        Design Artist he has worked on more than 300 projects with international
        Companies & Individuals. He has been recognized for his work both
        nationally and internationally. He was chosen as one of the top six
        finalists of the Glocal Teen Hero Award as an Artist in 2022 and he was
        also awarded the Elan Record USA Best Designer Award in 2020.
        <br />
        <br />
       </p>
       <br />
      </div>
     </div>
    </div>
    <div className="col-lg-4 text-center">
     <div
      className="card bg-transparent text-white"
      style={{ border: "2px solid #ff7f00" }}
     >
      <div className="card-body">
       <img
        src="/images/persons/saad1.jpg"
        alt="Saad Al Amin"
        style={{
         objectFit: "cover",
         borderRadius: "100rem",
         border: "4px solid #fff",
        }}
        width="200"
        height="200"
       />
       <p className="card-text mt-4 text-start">
        <strong>Born:</strong> 3 August 2005 (age <span id="ageOfSaad"></span>)
        <br />
        <strong>Residence:</strong> Dhaka, Bangladesh
        <br />
        <strong>Nationality:</strong> Bangladeshi
        <br />
        <strong>Education:</strong> Tamirul Millat Kamil Madrasha
        <br />
        <strong>Religion:</strong> Islam
        <br />
        <strong>Parents:</strong> Ruhul Amin, Saioda Swada
       </p>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}

export default Hero;
