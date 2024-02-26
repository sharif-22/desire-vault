import React, { useEffect, useState } from "react";
import VaultCard from "../component/UiComponents/VaultCard";
import { useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import db from "../firebase/index";

const ViewVaultList = () => {
  const { userName } = useParams();

  const [userVault, setUserVault] = useState([]);
  const [render, reRender] = useState(false);
  useEffect(() => {
    //get overall data
    const getFirebaseDatas = async () => {
      const querySnapshot = await getDocs(collection(db, userName));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        setUserVault([finalData]);
        return finalData;
      });
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
    };

    getFirebaseDatas();
  }, [render]);

  const deleteData = async (userName, id) => {
    await deleteDoc(doc(db, userName, id));
    reRender(!render);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-medium capitalize">{userName} VaultList</h1>
      <div className="m-4">
        {userVault.map((items, index) => {
          console.log(items);
          const { category, description, price, product, url, userName, id } =
            items;
          return (
            <VaultCard
              deleteData={deleteData(userName, id)}
              key={index}
              product={product}
              category={category}
              desc={description}
              price={price}
              url={url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewVaultList;
