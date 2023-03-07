import React from "react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [keyword, setKeyword] = useState("");
  const [city, setCity] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [localDate, setLocalDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    const params = {
      ...(keyword ? { keyword } : {}),
      ...(city ? { city } : {}),
      ...(stateCode ? { state: stateCode } : {}),
      ...(localDate ? { date: localDate } : {}),
    };
    navigate(`/?${new URLSearchParams(params)}`);
    setKeyword("");
    setStateCode("");
    setCity("");
    setLocalDate("");
  };

  return (
    <div className="Form">
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="keyword">Search:</label>
        <input
          type="text"
          name="keyword"
          id="keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label htmlFor="state">State:</label>
        <input
          type="text"
          name="state"
          id="state"
          value={stateCode}
          onChange={(e) => setStateCode(e.target.value)}
        />
        <button>Submit</button>
        {/* <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        value={localDate}
        onChange={(e) => setLocalDate(e.target.value)}
      />
      <button>Submit</button> */}
      </form>
    </div>
  );
};

export default Form;
