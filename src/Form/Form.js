import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateArr } from "../Store/Slice";
var z = [];
const Form = () => {
 // const state = useSelector(({ data }) => data);
  //console.log(state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("hehhe");
    let obj = {
      name: e.target.name.value,
      des: e.target.des.value,
      prior: e.target.check.checked,
      prgs: e.target.select.value,
    }; 
    z.push(obj);
    let aa=[...z]
    console.log(aa);
    dispatch(updateArr(aa));
  };

  let goNextPage = () => {
    navigate(`/list`);  
  };

  return (
    <div>
      Form Data
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Task Name" name="name"></input>
          </div>
          <div>
            <textarea name="des" placeholder="Enter Task Description" />
          </div>
          <div>
            <input type="checkbox" name="check"></input>
            <label> Prioritize </label>
          </div>
          <div>
            <label>Progress</label>
            <select name="select">
              <option value="ToDo">To Do</option>

              <option value="OnGoing">On Going</option>

              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
        <button onClick={goNextPage}>Go To List</button>
      </div>
    </div>
  );
};

export default Form;
