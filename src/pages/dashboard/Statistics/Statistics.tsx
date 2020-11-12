import React, { useEffect } from "react";
import {
  isAfter,
  subMonths,
  subWeeks,
  subDays,
  startOfDay,
  endOfDay,
  parseISO,
} from "date-fns";
import { PieChart } from "react-minimal-pie-chart";

import { Entry } from "../../../generated/graphql";
import { PrimaryButton } from "../../../components";
import {
  StatisticsModal,
  ModalContent,
  ChartsContainer,
  MoodChartContainer,
  ChartTitle,
} from "./Statistics.styled";
import { useGetAllEntriesQuery } from "../../../generated/graphql";

type StatisticsProps = ReactModal.Props &
  React.ComponentPropsWithoutRef<"div"> & {
    setIsOpen: (isOpen: boolean) => void;
  };

const Colors = new Map([
  ["GOOD", "#08AC00"],
  ["NEUTRAL", "#FCBA03"],
  ["BAD", "#E74C3C"],
]);

const dailyOccurences = new Map<string, number>();
const weeklyOccurences = new Map<string, number>();
const monthlyOccurences = new Map<string, number>();

const updateMap = (map: any, value: string) => {
  map.set(`${value}`, (map.get(`${value}`) || 0) + 1);
};

const processEntry = (
  entry: { __typename?: "Entry" | undefined } & Pick<Entry, "date" | "value">
) => {
  const today = startOfDay(new Date());
  if (isAfter(endOfDay(parseISO(entry.date)), subMonths(today, 1))) {
    updateMap(monthlyOccurences, entry.value);
    if (isAfter(endOfDay(parseISO(entry.date)), subWeeks(today, 1))) {
      updateMap(weeklyOccurences, entry.value);
      if (isAfter(endOfDay(parseISO(entry.date)), subDays(today, 1))) {
        updateMap(dailyOccurences, entry.value);
      }
    }
  }
};

const MoodChart = ({
  map,
  title,
  ...props
}: {
  map: Map<string, number>;
  title: string;
}) => {
  const data = Array.from(Colors.keys()).map((mood) => {
    return {
      title: mood,
      value: map.get(mood) || 0,
      color: Colors.get(mood) || "#555555",
    };
  });
  return (
    <MoodChartContainer>
      <ChartTitle>{title}</ChartTitle>
      <PieChart
        data={data}
        label={({ dataEntry }) => dataEntry.value}
        lineWidth={50}
        segmentsShift={1}
        labelPosition={75}
        animate={true}
        radius={45}
      />
    </MoodChartContainer>
  );
};

export const Statistics = ({ setIsOpen, ...props }: StatisticsProps) => {
  const { data } = useGetAllEntriesQuery();

  useEffect(() => {
    if (data && data.getAllEntries) {
      data.getAllEntries.forEach((entry) => {
        if (entry?.value) {
          processEntry(entry);
        }
      });
    }
  }, [data]);

  return (
    <StatisticsModal {...props}>
      <ModalContent>
        {data && data.getAllEntries && (
          <ChartsContainer>
            <MoodChart map={monthlyOccurences} title="Monthly" />
            <MoodChart map={weeklyOccurences} title="Weekly" />
            <MoodChart map={dailyOccurences} title="Daily" />
          </ChartsContainer>
        )}
        <PrimaryButton onClick={() => setIsOpen(false)}>Close</PrimaryButton>
      </ModalContent>
    </StatisticsModal>
  );
};
