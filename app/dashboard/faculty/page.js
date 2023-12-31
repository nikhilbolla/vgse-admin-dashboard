import React from "react";
import { DataTable } from "@/components/DataTable/DataTable";
import { fetchFaculty } from "@/lib/data";

export const revalidate = 0

export default async function page() {
  const type = {
    name: "faculty",
    tableheaders: [
      {
        name: "Photo",
      },
      {
        name: "Name",
      },
      {
        name: "Department",
      },
      {
        name: "Designation",
      },
      {
        name: "Experience",
      },
      {
        name: "Qualification",
      },
      {
        name: "Research Areas",
      },
      {
        name: "Action",
      },
    ],
  };

  const tabledata = await JSON.parse(JSON.stringify(await fetchFaculty()));


  return (
    <div>
      <DataTable type={type} data={tabledata} />
    </div>
  );
}
