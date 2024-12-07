import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import UserCards from "./components/USerCard";
import { auth, db } from "./components/firebase";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [userDetail, setUserDetail] = useState(null);
  const navigate = useNavigate();
  const userdata = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("User logged in:", user);
        const docRef = doc(db, "Users", user.uid);
        const docScan = await getDoc(docRef);
        if (docScan.exists()) {
          setUserDetail(docScan.data());
        } else {
          toast.error("User data not found. Redirecting to login...");
          navigate("/login");
        }
      } else {
        toast.error("Please log in to access this page.");
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    if (!userDetail) {
      userdata();
    }
  }, [userDetail]);

  async function handlelogout() {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {}
  }
  return (
    <div className="mx-8 mt-4 max-h-screen">
      <div className="flex justify-between w-full gap-2">
        <h2 className="text-2xl font-semibold p-4 bg-gray-100 w-2/12 text-start rounded-md">
          LOGO
        </h2>
        <Search />
        <div className="text-md  flex items-center justify-center font-semibold p-4 bg-blue-400 text-white w-2/12 text-start rounded-md">
          Hii ! {userDetail?.name}
        </div>
      </div>
      <div className="flex w-full gap-4 justify-between">
        <Sidebar handlelogout={handlelogout} />
        <Post />
        <div className=" mt-4 text-white w-2/12  rounded-md">
          <div className="flex gap-2">
            <button className="text-black  text-base">Articst</button>
            <button className="text-gray-500">PhotoGraphers</button>
          </div>
          <UserCards />
          <div className=" flex text-xs gap-2 text-black">
            <p className="line-clamp-1">privacy </p>
            <p className="line-clamp-1">term of service </p>
            <p className="line-clamp-1">cokkie notice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
