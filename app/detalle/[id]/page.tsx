import DATA from "../../../data/data.json";


export default function Page({ params }: { params: { id: string } }) {
    return <h1>My Page id { params.id }</h1>
  }