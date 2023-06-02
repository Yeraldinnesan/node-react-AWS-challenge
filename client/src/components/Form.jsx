import { useEffect, useState } from "react";
import { Input, Select, initTE } from "tw-elements";
import { getCountries, getCities, getStates } from "../utils/api";
import { formValidation } from "../utils/formValidations";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    placeOfBirth: {
      country: "",
      state: "",
      city: "",
    },
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  // console.log("stateeeeeeeeee", states);

  const [errors, setErrors] = useState({});

  const pobChangeHandler = async (name, e) => {
    setFormData((prevData) => ({
      ...prevData,
      placeOfBirth: {
        ...prevData.placeOfBirth,
        [name]: e.target.value,
      },
    }));
    if (name === "country") {
      fetchStates(e.target.value);
    } else if (name === "state") {
      fetchCities(e.target.value);
    }
  };

  const fetchStates = async (country) => {
    try {
      const encodedCountry = encodeURIComponent(country);
      const response = await getStates(encodedCountry);
      setStates(response.data);
      // console.log("Response states:", response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCities = async (state) => {
    const encodedState = encodeURIComponent(state);
    const statesData = await getCities(encodedState);
    setCities(statesData.data);
    // console.log("Response cities:", statesData.data); // Check the response data
  };

  const fetchCountries = async () => {
    const countriesData = await getCountries();
    // console.log(countriesData);
    setCountries(countriesData);
  };
  // console.log("ddddddd", countries);
  useEffect(() => {
    initTE({ Input, Select });
    fetchCountries();
  }, []);

  const onClickHandler = (e) => {
    e.preventDefault();
    const validationErrors = formValidation(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});
    }
  };

  // const onSubmitHandler = (e) => {

  // };

  return (
    <div>
      {console.log(formData)}
      <form className="w-ful ">
        <div className="relative mb-" data-te-input-wrapper-init>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            className="input_texto peer"
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                fullName: e.target.value,
              }))
            }
          />
          <label className="label-class">
            <span className="text-red-500">*</span> Full name
          </label>
        </div>
        {errors.fullName && (
          <p className="text-red-700 px-3">{errors.fullName}</p>
        )}
        <h1 className="font-bold text-lg py-2">Place of birth:</h1>
        {/*  */}
        <div className="mt-2">
          <select
            data-te-select-init
            name="country"
            value={formData.placeOfBirth.country}
            onChange={(e) => pobChangeHandler("country", e)}
          >
            <option value="" hidden></option>
            {countries?.map((el) => (
              <option key={el.country_short_name} value={el.country_name}>
                {el.country_name}
              </option>
            ))}
          </select>
          <label data-te-select-label-ref>
            <span className="text-red-500">*</span> Select a Country
          </label>
          {errors.country && (
            <p className="text-red-700 px-3">{errors.country}</p>
          )}
        </div>
        <div className="mt-4">
          <select
            data-te-select-init
            name="state"
            value={formData.placeOfBirth.state}
            onChange={(e) => pobChangeHandler("state", e)}
          >
            <option value="" hidden></option>
            {states?.map((el) => (
              <option key={el.state_name} value={el.state_name}>
                {el.state_name}
              </option>
            ))}
          </select>
          <label data-te-select-label-ref>
            <span className="text-red-500">*</span> Select a State
          </label>
        </div>
        {errors.state && <p className="text-red-700 px-3">{errors.state}</p>}
        <div className="mt-4">
          <select
            data-te-select-init
            name="city"
            value={formData.placeOfBirth.city}
            onChange={(e) => pobChangeHandler("city", e)}
          >
            <option value="" hidden></option>
            {cities?.map((el) => (
              <option key={el.city_name} value={el.city_name}>
                {el.city_name}
              </option>
            ))}
          </select>
          <label data-te-select-label-ref>
            <span className="text-red-500">*</span> Select a City
          </label>
        </div>
        {errors.city && <p className="text-red-700 px-3">{errors.city}</p>}
        <button
          onClick={onClickHandler}
          className="w-full bg-slate-600 py-2 px-3 mt-6 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
