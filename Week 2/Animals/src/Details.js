import useBreedList from "./useBreedList";
import { useParams } from "react-router-dom";
const Details = () => {
  let { id } = useParams();
  const [data, status, error] = useBreedList(id);
  return (
    <div className="details">
      <h1 data-testid="Breeds">{id}</h1>
      {data.map((item) => {
        return <p key={item}>{item}</p>;
      })}
    </div>
  );
};

export default Details;
