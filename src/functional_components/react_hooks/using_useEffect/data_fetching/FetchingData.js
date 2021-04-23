import React, { useState, useEffect } from "react";
import axios from "axios";

export function FetchingData() {
  // initializing texts state variable with an empty array
  let [texts, setTexts] = useState([]);

  // just to show a single item on DOM
  let [text, setText] = useState({});
  
  // another state variable to control re rendering on button click not just input change
  let [valueFromButtonClick, setValueFromButtonClick] = useState(1);
  
  // just to show a single item on DOM
  let [text2, setText2] = useState({});
  
  // creating another controlled state variable responsible for rendering numb er of texts on DOM
  let [num, setNum] = useState(1);

  // useEffect is a place for any kind of side effects such as event handlers or http calls
  useEffect(() => {
    // without using another controled state variable
    let url = "https://fakerapi.it/api/v1/texts?_quantity=4&_characters=500";
    axios
      .get(url)
      .then((res) => {
        console.log("data:", res.data.data);
        // setTexts(texts.push(res.data.data));
        setTexts(res.data.data);
        console.log("state:", texts);
      })
      .catch((err) => console.log(err));

    // do notice this empty array as we want this setState variable to be run just once otherwise it'll keep making requests infinitely
  }, []);

  // another useEffect for displaying user specefic number of data only
  useEffect(() => {
    // with using another controlled state variable
    let url = `https://fakerapi.it/api/v1/texts?_quantity=${num}&_characters=500`;
    axios
      .get(url)
      .then((res) => {
        console.log("data:", res.data.data);
        // setTexts(texts.push(res.data.data));
        setText(res.data.data);
        console.log("state:", text);
      })
      .catch((err) => console.log(err));
    // we are rendering DOM based on change of num state variable
  }, [num]);

  // another useEffect for displaying content on Button click not just input change
  useEffect(() => {
    // with using another controlled state variable
    let url = `https://fakerapi.it/api/v1/texts?_quantity=${num}&_characters=500`;
    axios
      .get(url)
      .then((res) => {
        console.log("data:", res.data.data);
        // setTexts(texts.push(res.data.data));
        setText2(res.data.data);
        console.log("state:", text);
      })
      .catch((err) => console.log(err));
    // we are rendering DOM based on change of valueFromButtonClick state variable
  }, [valueFromButtonClick]);

  let renderData = texts.map((item) => <li key={item.id}>{item.title}</li>);

  let changeHandler = (evt) => setNum(evt.target.value);

  let clickHandler = () => setValueFromButtonClick(num);

  return (
    <div>
      <h4>HTTP Request Using Get</h4>

      <ul>{renderData}</ul>
      <fieldset>
        <label>How many text do you want to display?!</label>
        <input
          type="number"
          placeholder="enter any valid number"
          value={num}
          onChange={changeHandler}
        />
        <button onClick={clickHandler}>show text</button>
      </fieldset>

      <br />
      <span>text on input change</span>
      <p>{text[0].title}</p>

      <br />
      <span>text on button click</span>
      <p>{text2[0].title}</p>
    </div>
  );
}
