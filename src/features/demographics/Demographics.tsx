import React from "react";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateAge } from "./demographicSlice";

export function Demographics(): React.ReactElement {
  const firstName = useSelector(
    (state: RootState) => state.demographics.firstName
  );
  const age = useSelector((state: RootState) => state.demographics.age);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          value={firstName}
          onChange={(e) => dispatch(updateFirstName(e.target.value))}
          placeholder="First Name"
        />
        <input
          value={age.toString()}
          type="number"
          onChange={(e) => dispatch(updateAge(parseInt(e.target.value, 10)))}
          placeholder="Age"
        />
      </div>
    </div>
  );
}
