import React from "react";
const photo =
  "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1733509119~exp=1733512719~hmac=d43aff730aa1514ec6295cecca9832353eecfb24cd054c92c5c5ab08ee2e9101&w=740";
const users = [
  {
    id: "rutba",
    name: "ritesh",
    photo:
      "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1733509119~exp=1733512719~hmac=d43aff730aa1514ec6295cecca9832353eecfb24cd054c92c5c5ab08ee2e9101&w=740",
    bgImage:
      "https://img.freepik.com/free-vector/flat-design-confetti-background_23-2148461991.jpg?t=st=1733509027~exp=1733512627~hmac=506e06646c875f9e2cde8a3696f844496790149ba4f476161d4977a1237fb90e&w=900",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo:
      "https://img.freepik.com/free-vector/user-blue-gradient_78370-4692.jpg?t=st=1733509119~exp=1733512719~hmac=d43aff730aa1514ec6295cecca9832353eecfb24cd054c92c5c5ab08ee2e9101&w=740",
    bgImage:
      "https://img.freepik.com/free-vector/realistic-confetti-background_23-2148456901.jpg?t=st=1733509049~exp=1733512649~hmac=5f6bb40501b7ee174b00ded3db0d519e9fe82296777a1b03c6635af60b3ba481&w=900",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: photo,
    bgImage: "https://via.placeholder.com/300x200/CCE5FF",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: photo,
    bgImage: "https://via.placeholder.com/300x200/D5FFCC",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: photo,
    bgImage:
      "https://img.freepik.com/free-vector/realistic-confetti-background_23-2148456901.jpg?t=st=1733509049~exp=1733512649~hmac=5f6bb40501b7ee174b00ded3db0d519e9fe82296777a1b03c6635af60b3ba481&w=900",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: "https://via.placeholder.com/100",
    bgImage:
      "https://img.freepik.com/free-vector/colorful-confetti-background_23-2147497482.jpg?t=st=1733508991~exp=1733512591~hmac=677c258147e573dd08e27416f55a12ccda2f5de683ca1055361cc301aa44b0cd&w=740",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: "https://via.placeholder.com/100",
    bgImage:
      "https://img.freepik.com/free-vector/realistic-confetti-background_23-2148456901.jpg?t=st=1733509049~exp=1733512649~hmac=5f6bb40501b7ee174b00ded3db0d519e9fe82296777a1b03c6635af60b3ba481&w=900",
  },
  {
    id: "rutba",
    name: "ritesh",
    photo: "https://via.placeholder.com/100",
    bgImage:
      "https://img.freepik.com/free-vector/realistic-confetti-background_23-2148456901.jpg?t=st=1733509049~exp=1733512649~hmac=5f6bb40501b7ee174b00ded3db0d519e9fe82296777a1b03c6635af60b3ba481&w=900",
  },
];

const UserCards = () => {
  return (
    <div className="flex flex-wrap justify-center mt-4 gap-6 max-h-96 overflow-hidden overflow-y-auto">
      {users.map((user) => (
        <div
          key={user.id}
          className="relative w-64 h-36 rounded-lg overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url(${user.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute bottom-0 w-full p-4 text-white bg-gradient-to-t from-black via-black/50 to-transparent">
            <div className="flex items-center gap-2">
              <img
                src={user.photo}
                alt={`${user.name}'s profile`}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div>
                <h3 className="text-sm font-bold">{user.name}</h3>
                <p className="text-xs text-gray-200">@ {user.id}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCards;
