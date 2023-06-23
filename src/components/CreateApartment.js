import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function CreateApartment() {
  const [img, setImg] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [title, setTItle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApartmentDetails = {
        img: img,
        pricePerDay: pricePerDay,
        title: title,
      };
      createApartment(newApartmentDetails)
  };

 

  const createApartment = (newApartmentDetails) => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/apartments`, newApartmentDetails)
      .then((response) => {
        console.log(response.data);
        navigate("/apartments");
      })
      .catch((e) => console.log(e));
  };

  return (
    <section className="AddApartment">
      <form onSubmit={handleSubmit}>
        <label>
          Image
          <input
            type="url"
            name="img"
            placeholder="enter the URL image"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </label>

        <label>
          Price Per Day
          <input
            type="number"
            name="pricePerDay"
            value={pricePerDay}
            onChange={(e) => {
              setPricePerDay(e.target.value);
            }}
          />
        </label>

        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => {
              setTItle(e.target.value);
            }}
          />
        </label>

        <button onClick={createApartment}>Create</button>
      </form>
    </section>
  );
}

export default CreateApartment;
