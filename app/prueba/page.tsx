import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"
import DATA from '../../data/data.json';


async function getData(): Promise<Payment[]> {

    const data_tabla: Payment[] = DATA.map(({ oferta, Id }) => {
        return {
          id: Id,
          empresa: oferta,
          postular: oferta,
          tipo_de_cargo: oferta,
          ubicacion: oferta
        };
      });
    return data_tabla
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
