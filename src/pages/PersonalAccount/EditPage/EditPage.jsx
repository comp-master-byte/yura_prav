import React from "react";
import { ToastContainer } from "react-toastify";
import PersonalAccountContent from "../../../components/Layout/PersonalAccountContent/PersonalAccountContent";
import EditLawyerModule from "../../../modules/EditLawyerModule";

const EditPage = () => {
  return (
    <PersonalAccountContent>
      <EditLawyerModule />
    </PersonalAccountContent>
  );
};

export default EditPage;