import React from "react";

const ZipcodeByProvince = ({ province, districts }) => {
  return (
    <>
      <h1 className="text-2xl pt-3 font-bold text-center">
        รหัสไปรษณีย์ในจังหวัด {province}
      </h1>
      <div className="text-center">
        <input
          type="text"
          className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
          placeholder="ค้นหา ตำบล อำเภอ จังหวัด รหัสไปรษณีย์"
        />
      </div>
      <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
        <table className="w-full">
          <thead>
            <tr className="text-center font-bold border-collapse">
              <th className="border border-slate-300 p-2">#</th>
              <th className="border border-slate-300 p-2">อำเภอ/เขต</th>
              <th className="border border-slate-300 p-2">รหัสไปรษณีย์</th>
            </tr>
          </thead>
          <tbody>
            {districts.map((r, idx) => (
              <tr key={idx}>
                <td className="border border-slate-300 text-center p-2">
                  {idx + 1}
                </td>
                <td className="border border-slate-300 p-2">{r.district}</td>
                <td className="border border-slate-300 text-center p-2">
                  {r.zipcode}
                  {"  "}

                  <button
                    className="bg-gray-100 text-blue-500 cursor-pointer active:text-blue-300"
                    onClick={() => navigator.clipboard.writeText(r.zipcode)}
                  >
                    คัดลอก
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ZipcodeByProvince;
