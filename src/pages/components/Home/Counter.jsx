import React, { useEffect, useState } from "react";
import countersData from "../../data/counters.json"

function Counter() {
  const [counters, setCounters] = useState([0, 0]);

  useEffect(() => {
    const targetValues = [countersData.audience, countersData.teamMember];
    const duration = 4000;
    const interval = 100;

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
          <h2>{countersData.reached || "20M+"}</h2>
          <p>Reached</p>
        </section>
      </div>
      <div className="break" />
    </>
  );
}

export default Counter;
