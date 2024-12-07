import React from "react";

const ProductCard = () => {
  const products = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?t=st=1733506967~exp=1733510567~hmac=97e768362de8e0c50e434ed5d46bebfd98023da1ec44b7e0b15d187c1825ee1f&w=900",
      name: "Product 1",
      price: "$25",
      rating: "4.5",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-photo/seascape-view-with-green-water-surface-hills-covered-with-lush-greenery-sides_181624-48517.jpg?t=st=1733506920~exp=1733510520~hmac=075fc4917c766ce3647951b22e6895f59c3bc8d500b4b7edae51ac4620cafe2b&w=826",

      name: "Product 2",
      price: "$30",
      rating: "4.7",
    },
    {
      id: 3,
      img: "https://img.freepik.com/free-photo/silhouette-person-standing-top-hill-beautiful-colorful-sky-morning_181624-24501.jpg?t=st=1733506945~exp=1733510545~hmac=f059310485a9542445fb17fd27edc2ff56921c570e9bf6b43859241a71afeb8c&w=900",

      name: "Product 3",
      price: "$20",
      rating: "4.2",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?t=st=1733506967~exp=1733510567~hmac=97e768362de8e0c50e434ed5d46bebfd98023da1ec44b7e0b15d187c1825ee1f&w=900",

      name: "Product 4",
      price: "$15",
      rating: "4.0",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-photo/high-angle-shot-beautiful-forest-with-lot-green-trees-enveloped-fog-new-zealand_181624-19717.jpg?t=st=1733506967~exp=1733510567~hmac=97e768362de8e0c50e434ed5d46bebfd98023da1ec44b7e0b15d187c1825ee1f&w=900",

      name: "Product 5",
      price: "$15",
      rating: "4.0",
    },
  ];

  return (
    <div className="overflow-x-auto  whitespace-nowrap py-4 px-2">
      <div className="flex space-x-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[250px] bg-white border rounded-lg shadow-md flex flex-col "
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-36 w-full object-cover rounded"
            />
            <div className="px-2">
              {" "}
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <div className="flex justify-between items-center mb-2">
                {" "}
                <p className="text-sm text-gray-600 mt-1">{product.price}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 mr-1">★</span>
                  <p className="text-sm text-gray-600">{product.rating}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
