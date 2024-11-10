import React from "react";
import { useParams } from "react-router-dom";
import UserNavbar from "../../components/user/NavBar";

const MedicalPage = () => {
  // Access the userId from the URL using useParams
  const { userId } = useParams();

  // Dummy medical data for the user
  const medicalInfo = {
    hasAllergies: false,
    hasPreExistingConditions: true,
    requiresRegularMedication: false,
    requiresEmergencyTreatment: true,
  };

  return (
    <>
      <UserNavbar />
      <div className="container mt-5">
        <div className="card p-4 mt-3">
          <h4>Medical Details</h4>
          <br></br>
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Has Allergies:</strong>{" "}
                {medicalInfo.hasAllergies ? "Yes" : "No"}
              </p>
              <p>
                <strong>Has Pre-Existing Conditions:</strong>{" "}
                {medicalInfo.hasPreExistingConditions ? "Yes" : "No"}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Requires Regular Medication:</strong>{" "}
                {medicalInfo.requiresRegularMedication ? "Yes" : "No"}
              </p>
              <p>
                <strong>Requires Emergency Treatment:</strong>{" "}
                {medicalInfo.requiresEmergencyTreatment ? "Yes" : "No"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalPage;
