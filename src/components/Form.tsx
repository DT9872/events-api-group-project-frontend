import React from "react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    navigate(`/?${new URLSearchParams({ keyword: keyword })}`);
    setKeyword("");
  };

  return (
    <form className="Form" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="keyword">Search Term</label>
      <input
        type="text"
        name="keyword"
        id="keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>Submit</button>
      <label htmlFor="date">Date</label>
      <input
        type="date"
        name="date"
        id="date"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
