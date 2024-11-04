import React  from "react";

const GenderCheckbox =()=>{
    return(
        <div className="flex">
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="text-base-100 label-text">Male</span>
                    <input type="checkbox" className="checkbox border-slate-200"/>
                </label>
            </div>
            <div className="form-control">
                <label className={`label gap-2 cursor-pointer`}>
                    <span className="text-base-100 label-text">Female</span>
                    <input type="checkbox" className="checkbox border-slate-200"/>
                </label>
            </div>
        </div>
    );
}


export default GenderCheckbox;