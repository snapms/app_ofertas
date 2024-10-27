import { JobData } from "@/interfaces/jobData";
import JobDetailPage from "./job-detail-page";

export default async function Page({ params }: { params: { id: string } }) {
    // Fetch the jobs data from the CSV
    const response = await fetch(
"https://docs.google.com/spreadsheets/d/e/2PACX-1vQgn_9HO-_hTGCGpfEjbgQ57kx3vS2Wcr9SraS7XICQ7WOiznH34cY7v0C8T47Cyw/pub?output=csv"    ).then((res) => res.text());

    // Parse the CSV data
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

    // Find the job that matches the correlativo with the id from params
    const job = jobs_list.find((job) => job.correlativo === params.id);

    // Check if job is found
    if (!job) {
        return <div>No se encontró la oferta de trabajo.</div>;
    }

    return <JobDetailPage job={job} />;
}
