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
  const { user } = useParams();
  console.log(user);

  const [userVault, setUserVault] = useState([]);
  const [render, reRender] = useState(false);

  useEffect(() => {
    //get overall data
    const getFirebaseDatas = async (user) => {
      const querySnapshot = await getDocs(collection(db, user));
      const data = querySnapshot.docs.map((doc) => {
        const getData = doc.data();
        const getId = doc.id;
        const finalData = { ...getData, id: getId };
        return finalData;
      });
      setUserVault(data);
      if (querySnapshot.docs.length === 0) {
        console.log("norecord exist");
      }
    };

    getFirebaseDatas(user);
  }, [render]);

  const deleteData = async (deleteCard) => {
    await deleteDoc(doc(db, deleteCard.user, deleteCard.id));
    reRender(!render);
  };

  return (
    <div
      className={`max-w-6xl mx-auto ${
        userVault.length <= 3 ? "h-[90dvh]" : "h-auto"
      }`}
    >
      <h1 className="text-3xl font-medium capitalize">{user} VaultList</h1>

      {userVault.map((items, index) => {
        console.log(items);
        const { category, description, price, product, url, user, id } = items;
        return (
          <div className="m-4">
            <VaultCard
              deleteData={() => {
                console.log("clicked");
                deleteData({ user: user, id: id });
              }}
              key={index}
              product={product}
              category={category}
              desc={description}
              price={price}
              url={url}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ViewVaultList;
