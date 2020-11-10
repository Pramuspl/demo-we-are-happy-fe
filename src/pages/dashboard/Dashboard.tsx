import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import { PrimaryButton } from "../../components";
import {
  AddEntryMutation,
  Moods,
  Roles,
  useAddEntryMutation,
} from "../../generated/graphql";

export const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const [addEntryMutation] = useAddEntryMutation({
    onCompleted: (data: AddEntryMutation) => console.log(data),
    onError: (error: ApolloError) => console.log(error.message),
  });

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("role");
    setLoggedIn(false);
  };

  if (!loggedIn || !localStorage.getItem("access_token")) {
    return <Redirect to="/login" />;
  }
  return (
    <div id="content">
      <span>Dashboard</span>
      {localStorage.getItem("role") === Roles.Manager && (
        <>
          <PrimaryButton onClick={() => setModalOpen(!modalOpen)}>
            Open Modal
          </PrimaryButton>
          <Modal
            isOpen={modalOpen}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
            <PrimaryButton onClick={() => setModalOpen(false)}>
              Close Modal
            </PrimaryButton>
          </Modal>
        </>
      )}

      <PrimaryButton
        onClick={() =>
          addEntryMutation({
            variables: {
              date: "10-10-2002",
              value: Moods.Bad,
            },
          })
        }
      >
        Bad
      </PrimaryButton>
      <PrimaryButton
        onClick={() =>
          addEntryMutation({
            variables: {
              date: "10-10-2002",
              value: Moods.Neutral,
            },
          })
        }
      >
        Neutral
      </PrimaryButton>
      <PrimaryButton
        onClick={() =>
          addEntryMutation({
            variables: {
              date: "10-10-2002",
              value: Moods.Good,
            },
          })
        }
      >
        Good
      </PrimaryButton>
      <PrimaryButton onClick={() => logout()}>Logout</PrimaryButton>
    </div>
  );
};
