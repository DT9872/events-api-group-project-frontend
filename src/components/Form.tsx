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
        <h2>Let's Make Memories!</h2>
        <label htmlFor="keyword"></label>
        <input
          type="text"
          name="keyword"
          id="keyword"
          placeholder="Search artist, team, venue, or event"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <div className="cityContainer">
          <label htmlFor="city"></label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="City: ex. Detroit"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state"></label>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="State: ex. MI"
            value={stateCode}
            onChange={(e) => setStateCode(e.target.value)}
          />
        </div>
        <button>Find your event</button>
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
