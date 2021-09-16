import { useState } from "react"
import ClientForm from "../ClientForm";

export default function Clients() {
  const [clients, setClients] = useState([
    {name: "foo"},
    {name: "bar"},
  ])
  const [newClient, setNewClient] = useState(false);
  return <div className="p-10">
    <div className="flex content-end mb-10">
      <button className="leading-8 bg-blue-500 rounded px-5 text-white"
        onClick={() => setNewClient(true)}>New</button>
    </div>
    {newClient && <ClientForm />}
    <div className="grid grid-cols-4 gap-4">
      {clients.map(client => (
        <div className="shadow bg-white p-5 rounded">
          {client.name}
        </div>
      ))}
    </div>
  </div>
}