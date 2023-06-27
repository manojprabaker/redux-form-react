import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateArr } from "../Store/Slice";
import { useState ,useEffect} from "react";
const List = () => {
    const [listData, setlistData] = useState();
  const state = useSelector(({ data }) => data);
  let updatedTasks = state.arr;
  //console.log(updatedTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    setlistData(updatedTasks);
  }, []);
  
  const deleteData=(index)=>{
    let temp=listData;
    let newData=temp.filter((e,i)=>{
        return i!=index;
    })
    setlistData(newData);
    dispatch(updateArr(newData));
  }
  return (
    <div>
      List
      {listData?.map((e, i) => {
        return (
          <div key={i}>
            <div>
              <h1>Task Name:{e.name}</h1>
              <h1>Description:{e.des}</h1>
              <h1>Priority:{e.prior ? "Yes" : "No"}</h1>
              <h1>Progress:{e.prgs}</h1>
              <button onClick={() =>deleteData(i)}> Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
