import React from "react";
import VaultCard from "../component/UiComponents/VaultCard";

const ViewVaultList = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-medium">My VaultList</h1>
      <VaultCard
        desc={
          "I'm excited to invest in the GT 650 for exhilarating rides and unmatched performance. It's the perfect choice for those seeking both power and style on the road."
        }
        price={15000}
        product={"playstation psp"}
      />
    </div>
  );
};

export default ViewVaultList;
