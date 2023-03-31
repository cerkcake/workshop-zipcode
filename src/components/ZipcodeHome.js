import React from 'react'

const ZipcodeHome = ({
  provinces,
  setProvince,
  showSuggestBox,
  setSearchInput,
  searchSuggestions,
}) => {
  return (
    <div className="w-full text-center">
    <h1 className="text-2xl pt-3 font-bold">ค้นหารหัสไปรษณีย์</h1>
    <div>
      <input
        type="text"
        className="border-2 border-gray-400 rounded-lg p-2 mt-4 w-1/3"
        placeholder="Search here"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      {showSuggestBox && (
        <div className="rounded-lg w-1/3 mx-auto mt-1 relative">
          <div className="w-full h-64 overflow-auto bg-red-200  shadow text-left rounded-lg absolute top-0">
            <div className="font-bold px-4 pt-4">
              ผลลัพธ์การค้นหา {searchSuggestions.length} รายการ
            </div>
            <div className="text-sm text-gray-600">
              {searchSuggestions?.map((result, index) => (
                <div
                  key={index}
                  className=" border-b border-gray-400 py-1 hover:cursor-pointer hover:bg-blue-100 active:bg-blue-200"
                  onClick={() => navigator.clipboard.writeText(result.zipcode)}
                >
                  <span className="px-4">
                    {" "}
                    ต.{result.subdistrict} อ.{result.district} จ.
                    {result.province} {result.zipcode}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    <div className="w-2/3 mx-auto bg-gray-100 p-4 mt-8 rounded-lg text-left">
      <h2 className="text-xl mt-4 font-bold">Select Province</h2>
      <div className="grid grid-cols-4 mt-4">
        {provinces.map((province) => (
          <div
            onClick={() => setProvince(province)}
            className="cursor-pointer text-blue-500"
          >
            {province}
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default ZipcodeHome