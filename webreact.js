import React, { useState } from 'react';

function CalculatorForm() {
  const [systemCapacity, setSystemCapacity] = useState('');
  const [solarIrradiance, setSolarIrradiance] = useState('');
  const [electricityRate, setElectricityRate] = useState('');
  const [state, setState] = useState('');
  const [customerType, setCustomerType] = useState('');
  const [monthlyEnergyBill, setMonthlyEnergyBill] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Call the API endpoint
    const response = await fetch(`/calculate?systemCapacity=${systemCapacity}&solarIrradiance=${solarIrradiance}&electricityRate=${electricityRate}&state=${state}&customerType=${customerType}&monthlyEnergyBill=${monthlyEnergyBill}`);
    const data = await response.json();

    // Set the result state
    setResult(data.result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={systemCapacity} onChange={e => setSystemCapacity(e.target.value)} placeholder="System Capacity" />
      <input type="text" value={solarIrradiance} onChange={e => setSolarIrradiance(e.target.value)} placeholder="Solar Irradiance" />
      <input type="text" value={electricityRate} onChange={e => setElectricityRate(e.target.value)} placeholder="Electricity Rate" />
      <input type="text" value={state} onChange={e => setState(e.target.value)} placeholder="State" />
      <input type="text" value={customerType} onChange={e => setCustomerType(e.target.value)} placeholder="Customer Type" />
      <input type="text" value={monthlyEnergyBill} onChange={e => setMonthlyEnergyBill(e.target.value)} placeholder="Monthly Energy Bill" />
      <button type="submit">Calculate</button>
      {result && <p>Result: {result}</p>}
    </form>
  );
}

export default CalculatorForm;