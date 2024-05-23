import { Link } from "react-router-dom";
const animals = [
  {
    animal: "bird",
    image: "https://pets-images.dev-apis.com/pets/bird0.jpg",
  },
  {
    animal: "cat",
    image: "https://pets-images.dev-apis.com/pets/cat9.jpg",
  },
  {
    animal: "dog",
    image: "https://pets-images.dev-apis.com/pets/dog31.jpg",
  },
  {
    animal: "rabbit",
    image: "https://pets-images.dev-apis.com/pets/rabbit3.jpg",
  },
  {
    animal: "reptile",
    image: "https://pets-images.dev-apis.com/pets/reptile1.jpg",
  },
];

const Animals = () => {
  return (
    <div className="animals">
      {animals.map((item) => {
        return (
          <div key={item.animal} className="animal">
            <img src={item.image} alt={item.animal} />
            <Link className="button" >
              {item.animal}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Animals;
