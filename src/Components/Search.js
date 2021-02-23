import React, {useState} from 'react';

const Search = ({getQuary}) => {
  const [text, setText] = useState();
  const onChange = (q) => {
    setText(q);
    getQuary(q);
    setText(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholer="Serch characters"
          value={text}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </form>
    </section>
  );
};

export default Search;
