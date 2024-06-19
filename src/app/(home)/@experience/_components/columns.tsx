"use client";

import { experience } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<experience>[] = [
  {
    accessorKey: "company",
    header: "Company",
  },
  {
    accessorKey: "position",
    header: "Position",
  },
  {
    accessorKey: "startDate",
    header: "From",
  },
  {
    accessorKey: "endDate",
    header: "To",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
];
