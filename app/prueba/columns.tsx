"use client";

import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import { JobData } from "@/interfaces/jobData";
import { Button } from "@/components/ui/button";

// Definimos las columnas según la estructura de la interfaz JobData
export const columns: ColumnDef<JobData>[] = [
    {
        accessorKey: "correlativo",
        header: "Correlativo",
    },
    {
        accessorKey: "id_job",
        header: "ID de trabajo",
    },
    {
        accessorKey: "nombre_empresa",
        header: "Empresa",
    },
    {
        accessorKey: "tipo_de_cargo",
        header: "Tipo de cargo",
    },
    {
        accessorKey: "region",
        header: "Región",
    },
    {
        accessorKey: "comuna",
        header: "Comuna",
    },
    {
        accessorKey: "sueldo",
        header: "Sueldo",
    },
    {
        accessorKey: "fecha",
        header: "Fecha de publicación",
    },
    {
        accessorKey: "link",
        header: "Postular",
        cell: ({ row }) => {
            const id = row.getValue("correlativo") as string;

            // Retorna un enlace que redirige a /detalle/id_job
            return (
                <Link
                    href={`/detalle/${id}`}
                    className="text-blue-500 underline"
                >
                    <Button variant={"duoc"}>Detalle</Button>
                </Link>
            );
        },
    },
];
