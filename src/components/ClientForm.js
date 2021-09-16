import { useRef } from "react"

export default function ClientForm({ submit }) {
  const name = useRef();
  return <div className="pb-5">
    <label for="name">
      <input name="name" ref={name} type="text" className="outline-none" placeholder="Client name" />
    </label>
    <button onClick={submit}>Add</button>
  </div>
}