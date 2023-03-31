import React from "react";

const ZipcodeNavBar = ({ province, setProvince }) => {
  return (
    <div>
      <span
        className="text-blue-500 cursor-pointer"
        onClick={() => setProvince(undefined)}
      >
        หน้าแรก
      </span>
      {province !== undefined && (
        <span className="text-gray-500"> / {province}</span>
      )}
    </div>
  );
};

export default ZipcodeNavBar;
