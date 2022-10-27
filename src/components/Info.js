import "./Info.css";
import { useState } from 'react';
// import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
function Info({planInput}) {
 
 const [plan, setPlan] = useState('');
  const handleSubmit=(e)=>{
    // e.preventDefault();
   planInput(e.target.value)
  }
  return (
    <div className="cont">
      <div className="boxOne">
        <h1>Todo App</h1>
        <h3>Make a plan have a productive day</h3>
        <form className="myInput" onSubmit={planInput}>
          <label> Enter your plan:
          <input
          type ='text'
          id="plan"
          name='Plan'
          placeholder="plan"
          value = {plan}
          onChange ={handleSubmit}
          />
          <select>
            <option value>High</option>
            <option value>High</option>
            <option value>High</option>
          </select>
          </label>
          {/* <input onSubmit={handleSubmit} /> */}
        <button  onClick={handleSubmit}>button</button>
        </form>
      </div>
    </div>
  );
}
export default Info;
