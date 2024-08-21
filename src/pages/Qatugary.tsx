import Cardcatagry from "../Componenets/Cardcatagry";

const data = [
  {
    id: 0,
    name: "Fresh Fruit",
    count: "9 Product",
    image: "  /category__1.webp",
  },

  {
    id: 1,
    name: "Fresh veg",
    count: "9 Product",
    image: "/category__2.webp",
  },

  {
    id: 2,
    name: "Fresh Bread",
    count: "14 Product",
    image: "/category__4.webp",
  },
  {
    id: 3,
    name: " fresh agg ",
    count: "9 Product",
    image: "/category__6.webp",
  },

  {
    id: 4,
    name: "Fresh cola",
    count: "12 Product",
    image: "/category__7.webp",
  },
  {
    id: 5,
    name: "Fresh Fish",
    count: "17 Product",
    image: "/category__5.webp",
  },
];

function Qatugary() {
  return (
    <div className="w-full">
      <div className="grid   md:grid-cols-3 lg-grid-cols-4 gap-4">
        {data.map((goods) => (
          <Cardcatagry
            key={goods.id}
            name={goods.name}
            image={goods.image}
            count={goods.count}
          />
        ))}
      </div>
    </div>
  );
}

export default Qatugary;
