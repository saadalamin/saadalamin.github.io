import React, { useEffect, useState } from "react";

function Counter() {
  const [counters, setCounters] = useState([0, 0]);

  useEffect(() => {
    const targetValues = [35000, 300];
    const duration = 2000;
    const interval = 50;

    const animateCounters = () => {
      const increments = targetValues.map((value) =>
        Math.ceil(value / (duration / interval))
      );

      let currentValues = [...counters];
      const timer = setInterval(() => {
        let allCompleted = true;
        currentValues = currentValues.map((val, idx) => {
          if (val < targetValues[idx]) {
            allCompleted = false;
            return Math.min(val + increments[idx], targetValues[idx]);
          }
          return val;
        });

        setCounters(currentValues);
        if (allCompleted) clearInterval(timer);
      }, interval);
    };

    animateCounters();
  }, []);

  return (
    <>
      <div className="count shadow row row-gap-5 justify-content-center text-center ">
        <section className="col-12 col-md-3">
          <h2>{counters[0].toLocaleString("en-US")}+</h2>
          <p>Audience</p>
        </section>
        <section className="col-12 col-md-3">
          <h2>{counters[1].toLocaleString("en-US")}+</h2>
          <p>Team Member</p>
        </section>
        <section className="col-12 col-md-3">
          <h2>10M+</h2>
          <p>Reached</p>
        </section>
      </div>
      <div className="break" />
    </>
  );
}

export default Counter;
