import React from 'react';

export default function({gender, level, onChangeLevel, onChangeGender}) {

    function genderChange(e) {
        onChangeGender(e.target.value)
    }
    function levelChange(e) {
        onChangeLevel(e.target.value)
    }
    return (
        <div>
      
            <label>Choose gender</label>
             <select value = {gender} onChange={genderChange} className="form-control">
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                      <option value='devil'>Little devil</option>
                     
            </select>
            <label>Choose level</label>
            <select value = {level} onChange={levelChange} className="form-control">
                      <option value='easy'>Easy</option>
                      <option value='middle'>Middle</option>
                      <option value='hard'>Hard</option>
            </select>
           
        </div>
       
    )
}