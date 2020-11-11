import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Modal from "react-modal";
import {
  ImageCard,
  PrimaryButton,
  SecondaryButton,
  TopBar,
} from "../../components";
import {
  AddEntryMutation,
  Moods,
  Roles,
  useAddEntryMutation,
} from "../../generated/graphql";
import { DashboardContainer } from "./Dashboard.styled";
import happyFace from "../../img/happy-face.png";
import neutralFace from "../../img/neutral-face.png";
import sadFace from "../../img/sad-face.png";

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
    <>
      <TopBar>
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
        <SecondaryButton onClick={() => logout()}>Logout</SecondaryButton>
      </TopBar>
      <DashboardContainer>
        <ImageCard
          imgSrc={happyFace}
          shadowColor="#08AC00"
          onClick={() =>
            addEntryMutation({
              variables: {
                date: "10-10-2002",
                value: Moods.Bad,
              },
            })
          }
        />
        <ImageCard
          imgSrc={neutralFace}
          shadowColor="#FCBA03"
          onClick={() =>
            addEntryMutation({
              variables: {
                date: "10-10-2002",
                value: Moods.Neutral,
              },
            })
          }
        />
        <ImageCard
          imgSrc={sadFace}
          shadowColor="#E74C3C"
          onClick={() =>
            addEntryMutation({
              variables: {
                date: "10-10-2002",
                value: Moods.Good,
              },
            })
          }
        />
      </DashboardContainer>
    </>
  );
};
