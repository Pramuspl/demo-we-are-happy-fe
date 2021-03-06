import { ApolloError } from "@apollo/client";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
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
import {
  DashboardContainer,
  VoteConfirmation,
  VoteContainer,
  Logo,
  VoteCardsContainer,
  Text,
} from "./Dashboard.styled";
import happyFace from "../../img/happy-face.png";
import neutralFace from "../../img/neutral-face.png";
import sadFace from "../../img/sad-face.png";
import logo from "../../img/logo.png";
import { Statistics } from "./Statistics";

const today = new Date().toISOString();

export const Dashboard = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [voted, setVoted] = useState(false);

  const [addEntryMutation] = useAddEntryMutation({
    onCompleted: (data: AddEntryMutation) => setVoted(true),
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
              Statistics
            </PrimaryButton>
            <Statistics isOpen={modalOpen} setIsOpen={setModalOpen} />
          </>
        )}
        <SecondaryButton onClick={() => logout()}>Logout</SecondaryButton>
      </TopBar>
      <DashboardContainer>
        <VoteConfirmation className={voted ? "voted" : ""}>
          <Logo src={logo} alt="logo" />
          Thank you for your vote!
        </VoteConfirmation>
        <VoteContainer className={voted ? "voted" : ""}>
          <Text>How did you feel today?</Text>
          <VoteCardsContainer>
            <ImageCard
              imgSrc={happyFace}
              shadowColor="#08AC00"
              onClick={() =>
                addEntryMutation({
                  variables: {
                    date: today,
                    value: Moods.Good,
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
                    date: today,
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
                    date: today,
                    value: Moods.Bad,
                  },
                })
              }
            />
          </VoteCardsContainer>
        </VoteContainer>
      </DashboardContainer>
    </>
  );
};
