"use client";
import React, { useState, useCallback } from "react";
import { Scheduler} from "@bitnoi.se/react-scheduler";
import dayjs from "dayjs";
import "@bitnoi.se/react-scheduler/dist/style.css";
import mockedSchedulerData from "../../../public/mock_datas/datasources";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export default function ProjectGanttChart() {
  const [filterButtonState, setFilterButtonState] = useState(0);

  const [range, setRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleRangeChange = useCallback(
    (range: { startDate: Date; endDate: Date }) => {
      setRange(range);
    },
    []
  );

  const filteredMockedSchedulerData = mockedSchedulerData.map((person) => ({
    ...person,
    data: person.data.filter(
      (project) =>
        // we use "dayjs" for date calculations, but feel free to use library of your choice
        dayjs(project.startDate).isBetween(range.startDate, range.endDate) ||
        dayjs(project.endDate).isBetween(range.startDate, range.endDate) ||
        (dayjs(project.startDate).isBefore(range.startDate, "day") &&
          dayjs(project.endDate).isAfter(range.endDate, "day"))
    ),
  }));

  return (
      <Scheduler
        data={filteredMockedSchedulerData}
        // isLoading={isLoading}
        onRangeChange={handleRangeChange}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) => console.log(item)}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0)
        }}
        config={{
          zoom: 0,
          filterButtonState,
        }}
      />
  );
}
