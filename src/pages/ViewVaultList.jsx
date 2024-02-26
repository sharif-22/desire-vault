import React, { useEffect } from "react";
import VaultCard from "../component/UiComponents/VaultCard";

import { collection, getDocs, addDoc } from "firebase/firestore";

import db from "../firebase/index";

const ViewVaultList = () => {
  useEffect(() => {
    //get overall data
    const getFirebaseDatas = async () => {
      const querySnapshot = await getDocs(collection(db, "wishlist"));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        return finalData;
      });
      console.log(data);
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
    };
    getFirebaseDatas();
  }, []);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-medium ">My VaultList</h1>
      <div className="m-4">
        <VaultCard
          desc={
            "I'm excited to invest in the GT 650 for exhilarating rides and unmatched performance. It's the perfect choice for those seeking both power and style on the road."
          }
          price={15000}
          product={"playstation psp"}
        />
      </div>
    </div>
  );
};

export default ViewVaultList;
