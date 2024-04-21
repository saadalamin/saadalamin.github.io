import React from "react";

function Counter() {
 React.useEffect(() => {
  /**
   * @description Counting effect
   */
  var counting = function () {
   var counters = document.querySelectorAll(".count .counting");
   var countersQuantity = counters.length;
   var counter = [];

   for (let i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
   }

   var count = function (start, value, id) {
    var localStart = start;
    var interval = 50;
    var increment = Math.ceil((value - start) / (2000 / interval));

    var updateCounter = function () {
     if (localStart < value) {
      localStart += increment;
      if (localStart > value) localStart = value;
      counters[id].innerHTML = localStart.toLocaleString("en-US") + "+";
      setTimeout(updateCounter, interval);
     }
    };

    updateCounter();
   };

   for (let j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
   }
  };
  counting();
 }, []);
 return (
  <>
   <div className="count shadow row row-gap-5 justify-content-center text-center">
    <section className="col-12 col-md-3">
     <h2 className="counting">29000+</h2>
     <p>Audience</p>
    </section>
    <section className="col-12 col-md-3">
     <h2 className="counting">300+</h2>
     <p>Team Member</p>
    </section>
    <section className="col-12 col-md-3">
     <h2>6M+</h2>
     <p>Reached</p>
    </section>
   </div>
   <div className="break"></div>
  </>
 );
}

export default Counter;
