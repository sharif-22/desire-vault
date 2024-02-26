import React from "react";
import { useLocation } from "react-router-dom";

const Read = () => {
  const location = useLocation();
  const formData = location.state?.formData || {}; // Access formData from location state

  return (
    <div>
      <h1>Form Data</h1>
      <table>
        <tbody>
          {Object.entries(formData).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Read;