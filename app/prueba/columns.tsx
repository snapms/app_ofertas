"use client"

import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  empresa: string
  tipo_de_cargo: string
  ubicacion: string
  postular: string
}

export const columns: ColumnDef<Payment>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
  {
    accessorKey: "empresa",
    header: "Empresa",
  },
  {
    accessorKey: "tipo_de_cargo",
    header: "Tipo de cargo",
  },
  {
    accessorKey: "ubicacion",
    header: "Ubicación",
  },
  {
    accessorKey: "postular",
    header: "Postular",
    cell: ({ row }) => {
      const id = row.getValue("id") as string;

      // Retorna un enlace que redirige a /oferta/tipo_de_cargo
      return (
        <Link href={`/detalle/${id}`} className="text-blue-500 underline">
          Postular
        </Link>
      );
    },
  },
]
