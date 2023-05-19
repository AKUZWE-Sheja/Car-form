import React, { useState, useRef } from 'react';

function Form() {
  const [carMakeValue, setCarMakeValue] = useState('');
  const [carModelValue, setCarModelValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [mileageValue, setMileageValue] = useState('');
  const [conditionValue, setConditionValue] = useState('');
  const [featuresValue, setFeaturesValue] = useState([]);
  const [transmissionValue, setTransmissionValue] = useState('');
  const [priceRangeValue, setPriceRangeValue] = useState(100000);
  const [numberValue, setNumberValue] = useState('');
  const [errors, setErrors] = useState({});

  const formRef = useRef(null);

  const validateForm = () => {
    const errors = {};

    // Validate car make
    if (!carMakeValue.trim()) {
      errors.carMake = 'Car Make is required';
    }
    // Validate car model
    if (!carModelValue.trim()) {
      errors.carModel = 'Car Model is required';
    }
    // Validate year
    if (!yearValue.trim()) {
      errors.year = 'Year is required';
    }
    // Validate mileage
    if (!mileageValue.trim()) {
      errors.mileage = 'Mileage is required';
    }
    // Validate condition
    if (!conditionValue.trim()) {
      errors.condition = 'Condition is required';
    }
    // Validate features
    if (featuresValue.length === 0) {
      errors.features = 'At least one feature must be selected';
    }
    // Validate transmission
    if (!transmissionValue.trim()) {
      errors.transmission = 'Transmission is required';
    }
    // Validate price range
    if (!priceRangeValue === 999999) {
      errors.priceRange = 'Price Range is required';
    }
    // Validate number
    if (!numberValue.trim()) {
      errors.number = 'Number is required';
    }
    setErrors(errors);
    // Return true if there are no errors
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Form is valid');
      console.log('Submitted values:', {
        carMakeValue,
        carModelValue,
        yearValue,
        mileageValue,
        conditionValue,
        featuresValue,
        transmissionValue,
        priceRangeValue,
        numberValue,
      });
    } else {
      console.log('Form has errors');
    }
  };

  const handleFeatureChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setFeaturesValue((prevFeatures) => [...prevFeatures, value]);
    } else {
      setFeaturesValue((prevFeatures) =>
        prevFeatures.filter((feature) => feature !== value)
      );
    }
  };

  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setErrors({});
      setCarMakeValue('');
      setCarModelValue('');
      setYearValue('');
      setMileageValue('');
      setConditionValue('');
      setFeaturesValue([]);
      setTransmissionValue('');
      setPriceRangeValue(100000);
      setNumberValue('');
    }
  };
  
  
  
  return (
    <>
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='pb-4'>
          <label htmlFor="car-make" className='pr-2'>Car Make:</label>
          <input
            type="text"
            value={carMakeValue}
            placeholder="Enter car type"
            onChange={(e) => setCarMakeValue(e.target.value)}
            className="rounded outline-0"
          />
        <div className='text-red-700'>{errors.carMake}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="car-model" className='pr-2'>Car Model:</label>
          <input
            type="text"
            value={carModelValue}
            onChange={(e) => setCarModelValue(e.target.value)}
            placeholder="Enter car model"
            className="rounded outline-0"
          />
        <div className='text-red-700'>{errors.carModel}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="year" className='pr-2'>Year:</label>
          <input
            type="date"
            value={yearValue}
            onChange={(e) => setYearValue(e.target.value)}
            className="rounded outline-0"
          />
        <div className='text-red-700'>{errors.year}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="mileage" className='pr-2'>Mileage:</label>
          <input
            type="number"
            value={mileageValue}
            placeholder="Desired mileage..."
            onChange={(e) => setMileageValue(e.target.value)}
            className="rounded outline-0"
          />
        <div className='text-red-700'>{errors.mileage}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="condition" className='pr-2'>Condition:</label>
          <input
            type="radio"
            name="radio"
            value="excellent"
            checked={conditionValue === 'excellent'}
            onChange={(e) => setConditionValue(e.target.value)}
            className=" mr-1"
          />
          <label htmlFor="condition">Excellent</label>
          <br />
          <input
            type="radio"
            name="radio"
            value="good"
            checked={conditionValue === 'good'}
            onChange={(e) => setConditionValue(e.target.value)}
            className="ml-14 mr-1"
          />
          <label htmlFor="condition">Good</label>
          <br />
          <input
            type="radio"
            name="radio"
            value="fair"
            checked={conditionValue === 'fair'}
            onChange={(e) => setConditionValue(e.target.value)}
            className="ml-12 mr-1"
          />
          <label htmlFor="condition">Fair</label>
          <br />
          <input
            type="radio"
            name="radio"
            value="poor"
            checked={conditionValue === 'poor'}
            onChange={(e) => setConditionValue(e.target.value)}
            className="ml-14 mr-1"
          />
          <label htmlFor="condition">Poor</label>
          <div className='text-red-700'>{errors.condition}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="features">Features:</label>
          <div>
            <label htmlFor="air-conditioning">Air Conditioning</label>
            <input
              type="checkbox"
              id="air-conditioning"
              value="air-conditioning"
              checked={featuresValue.includes('air-conditioning')}
              onChange={handleFeatureChange}
              className="ml-2"
            />
          </div>
          <div>
            <label htmlFor="power-steering">Power Steering</label>
            <input
              type="checkbox"
              id="power-steering"
              value="power-steering"
              checked={featuresValue.includes('power-steering')}
              onChange={handleFeatureChange}
              className="ml-2"
            />
          </div>
          <div>
            <label htmlFor="power-windows">Power Windows</label>
            <input
              type="checkbox"
              id="power-windows"
              value="power-windows"
              checked={featuresValue.includes('power-windows')}
              onChange={handleFeatureChange}
              className="ml-2"
            />
          </div>
          <div>
            <label htmlFor="abs">ABS</label>
            <input
              type="checkbox"
              id="abs"
              value="abs"
              checked={featuresValue.includes('abs')}
              onChange={handleFeatureChange}
              className="ml-2"
            />
          </div>
          <div>
            <label htmlFor="navigation-system">Navigation System</label>
            <input
              type="checkbox"
              id="navigation-system"
              value="navigation-system"
              checked={featuresValue.includes('navigation-system')}
              onChange={handleFeatureChange}
              className="ml-2"
            />
          </div>
          <div className='text-red-700'>{errors.features}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="transmission" className='pr-2'>Transmission:</label>
          <select
            value={transmissionValue}
            name="transmit"
            id="transmit"
            onChange={(e) => setTransmissionValue(e.target.value)}
            className="rounded p-1 outline-0"
          >
            <option value="">Please select</option>
            <option value="option1">Automatic</option>
            <option value="option2">Manual</option>
          </select>
          <div className='text-red-700'>{errors.transmission}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="price-range" className='pr-2'>Price Range:</label>
          <input
            type="range"
            min="999999"
            max="30000000"
            value={priceRangeValue}
            onChange={(e) => setPriceRangeValue(e.target.value)}
          />
          <span>{priceRangeValue}</span>
          <div className='text-red-700'>{errors.priceRange}</div>
        </div>
        <div className='pb-4'>
          <label htmlFor="number" className='pr-2'>Number:</label>
          <input
            type="text"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
            className="rounded outline-0"
          />
          <div className='text-red-700'>{errors.number}</div>
        </div>
        <button type="submit" className='bg-teal-900 p-2 rounded my-8'>Submit</button>
        <button type="reset" className='bg-teal-900 p-2 rounded ml-8' onClick={handleReset}>Cancel</button>
      </form>
    </>
  );
}

export default Form;
