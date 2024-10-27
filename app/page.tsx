import { JobData } from "@/interfaces/jobData";
import HomeTable from "./home-table";

export default async function Home() {
    const response = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjfMrMzIfokjzMLiVIbLZsTlGBHUDBqQ1xSHAeX_lAnNqIpCvRrs3RhYcyQT-s0g/pub?output=csv"
    ).then((res) => res.text());

    const jobs_list: JobData[] = response
        .split("\n")
        .slice(1)
        .map((row) => {
            const [
                correlativo,
                id_job,
                titulo_oferta,
                creacion,
                publicacion,
                fecha,
                id_empresa,
                nombre_empresa,
                empresa,
                rubro,
                fono,
                mail_contacto,
                area_de_trabajo,
                tipo_de_cargo,
                modalidad,
                region,
                comuna,
                inclusiva,
                sueldo,
                postulantes,
                oferta,
                link,
            ] = row.split(",").map((field) => field.replace(/;/g, ","));

            return {
                correlativo,
                id_job,
                titulo_oferta,
                creacion,
                publicacion,
                fecha,
                id_empresa,
                nombre_empresa,
                empresa,
                rubro,
                fono,
                mail_contacto,
                area_de_trabajo,
                tipo_de_cargo,
                modalidad,
                region,
                comuna,
                inclusiva,
                sueldo,
                postulantes,
                oferta,
                link,
            };
        });

    return (
        <div className="bg-backgroundDuoc text-textDuoc min-h-[100vh]">
            <HomeTable data={jobs_list} />
        </div>
    );
}
