import React, { useState } from "react";
import axios from "axios";

function DataEntry() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState([]);

  const handleInsert = async () => {
    try {
      if (!name || !address) {
        alert("Add name and address");
        return;
      }
      const response = await axios.get(
        `https://data-entry-b4csbwfraed9g4bp.canadacentral-01.azurewebsites.net/insert?name=${name}&address=${address}`
      );
      console.log(response.data);
      alert("Data inserted successfully!");
    } catch (error) {
      console.error("Error inserting data:", error);
      alert("Failed to insert data");
    }
  };

  const handleSelect = async () => {
    try {
      const response = await axios.get(
        `https://data-entry-b4csbwfraed9g4bp.canadacentral-01.azurewebsites.net/select`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  return (
    <>
      <p>Author: Ahmed Abdulghaney</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <h1>Data Entry</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
            width: "300px",
          }}
        />
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter address"
          style={{
            padding: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            width: "300px",
          }}
        />
        <button
          onClick={handleInsert}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Insert Data
        </button>
        <button
          onClick={handleSelect}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "20px",
          }}
        >
          Get Data
        </button>
        <div style={{ marginTop: "20px", width: "100%", textAlign: "center" }}>
          {data.map((entry, index) => (
            <div
              key={index}
              style={{
                background: "#f0f0f0",
                padding: "10px",
                margin: "10px",
                borderRadius: "5px",
              }}
            >
              <p>
                <strong>Name:</strong> {entry.name} <strong>Address:</strong>{" "}
                {entry.address}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DataEntry;
