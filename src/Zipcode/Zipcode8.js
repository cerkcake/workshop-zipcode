import { useState, useEffect } from "react";
import thailandZipCodeDatas from "./thailand-zipcode.json";
import ZipcodeHome from "../components/ZipcodeHome";
import ZipcodeByProvince from "../components/ZipcodeByProvince";
import ZipcodeNavBar from "../components/ZipcodeNavBar";

const Zipcode8 = () => {
  const provinces = [
    ...new Set(thailandZipCodeDatas.map((_province) => _province.province)),
  ];

  const [province, setProvince] = useState();
  const [districts, setDistricts] = useState([]);

  const [searchInput, setSearchInput] = useState();
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestBox, setShowSuggestBox] = useState(false);

  useEffect(() => {
    const _dist = thailandZipCodeDatas
      .filter((r) => r.province === province)
      .map((r) => [r.district, r]);
    console.log("distx : ", _dist);

    const _districts = [
      ...new Map(
        thailandZipCodeDatas
          .filter((r) => r.province === province)
          .map((r) => [r.district, r])
      ).values(),
    ];

    setDistricts(_districts);
  }, [province]);

  useEffect(() => {
    if (searchInput?.length >= 3) {
      const _searchSuggestions = thailandZipCodeDatas.filter(
        (r) =>
          r.province.includes(searchInput) ||
          r.district.includes(searchInput) ||
          r.subdistrict.includes(searchInput) ||
          String(r.zipcode).includes(searchInput)
      );
      setSearchSuggestions(_searchSuggestions);

      setShowSuggestBox(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestBox(false);
    }
  }, [searchInput]);

  return (
    <>
      <div className="w-full text-center">
        <div className="mt-4">
          <ZipcodeNavBar province={province} setProvince={setProvince} />
        </div>
        {province === undefined && (
          <ZipcodeHome
            provinces={provinces}
            setProvince={setProvince}
            setSearchInput={setSearchInput}
            searchSuggestions={searchSuggestions}
            showSuggestBox={showSuggestBox}
          />
        )}
        {province !== undefined && (
          <ZipcodeByProvince province={province} districts={districts} />
        )}
      </div>
    </>
  );
};

export default Zipcode8;
