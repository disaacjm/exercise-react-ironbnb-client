import { useEffect, useState } from "react";
import axios from "axios";

function ApartmentsList() {
  const [apartmentsList, setApartmentsList] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/apartments`)
      .then((response) => {
        console.log(response.data);
        setApartmentsList(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
        
      {apartmentsList.map((apartment) => {
        return <div key={apartment._id}>
            <img src={apartment.img} alt={apartment.title} />
        </div>;

      })}
    </div>
  );
}

export default ApartmentsList;
