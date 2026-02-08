import React, { useState, useEffect } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleChange = (e) => {
    setNumbers([...numbers, Number(e.target.value)]);
  };
  
  useEffect(() => {
    setTimeout(() => {
      let total = 0;
      for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
        if(total < 0){
          total = 0;
          setNumbers([])
          return ;
        }
      }
      setSum(total);
    }, 0);
  }, [numbers]);

  return (
    <div>
      <h1>sum calculator</h1>

      <input type="number" onChange={handleChange} />

      <p>Sum: {sum}</p>
    </div>
  );
};

export default SumCalculator;
