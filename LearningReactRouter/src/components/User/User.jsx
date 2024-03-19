import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="flex justify-center text-orange-700">
      <h1 className="font-semibold text-3xl p-4">User: {userid}</h1>
    </div>
  );
}

export default User;
