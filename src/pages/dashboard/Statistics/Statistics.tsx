import React, { useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { parse, isBefore, subDays, subMonths, subYears } from "date-fns";

import { Moods } from "../../../generated/graphql";
import { PrimaryButton } from "../../../components";
import { StatisticsModal, ModalContent } from "./Statistics.styled";
import { useGetAllEntriesQuery } from "../../../generated/graphql";

type StatisticsProps = ReactModal.Props &
  React.ComponentPropsWithoutRef<"div"> & {
    setIsOpen: (isOpen: boolean) => void;
  };

const occurences = new Map();

export const Statistics = ({ setIsOpen, ...props }: StatisticsProps) => {
  const { data, loading, error } = useGetAllEntriesQuery();

  useEffect(() => {
    if (data && data.getAllEntries) {
      data.getAllEntries.forEach((entry) => {
        if (
          entry &&
          isBefore(
            parse(entry.date, "dd-MM-yyyy", new Date()),
            subYears(new Date(), 1)
          )
        ) {
          occurences.set(
            `${entry.value}`,
            (occurences.get(`${entry.value}`) || 0) + 1
          );
        }
      });
    }
  }, [data]);

  return (
    <StatisticsModal {...props}>
      <ModalContent>
        {loading && <span>Loading...</span>}
        {error && <span>{error.message}</span>}
        {occurences.size && (
          <PieChart
            data={[
              {
                title: Moods.Good,
                value: occurences.get(Moods.Good) || 0,
                color: "#08AC00",
              },
              {
                title: Moods.Neutral,
                value: occurences.get(Moods.Neutral) || 0,
                color: "#FCBA03",
              },
              {
                title: Moods.Bad,
                value: occurences.get(Moods.Bad) || 0,
                color: "#E74C3C",
              },
            ]}
            label={({ dataEntry }) => dataEntry.value}
          />
        )}
        <PrimaryButton onClick={() => setIsOpen(false)}>Close</PrimaryButton>
      </ModalContent>
    </StatisticsModal>
  );
};
