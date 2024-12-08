import React from "react";

const user = {
  name: "Xəzanə",
  age: 20,
  city: "Qəbələ",
};

function PersonalInfo() {
  return (
    <div>
      <h2>Personal Info</h2>
      <ul>
        <li>Ad: {user.name}</li>
        <li>Yaş: {user.age}</li>
        <li>Şəhər: {user.city}</li>
      </ul>
    </div>
  );
}

export default PersonalInfo;
