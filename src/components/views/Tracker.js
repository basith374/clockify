import { useRef, useState } from "react";

function calculateDiff(start, now) {
  const diff = now - start;
  const hrs = parseInt(diff / 1000 / 60 / 60, 10);
  const hrsT = hrs * 1000 * 60 * 60;
  const min = parseInt((diff - hrsT) / 1000 / 60);
  const minT = hrsT + min * 1000 * 60;
  const sec = parseInt((diff - minT) / 1000);
  return [
    hrs.toString().padStart(2, "0"),
    min.toString().padStart(2, "0"),
    sec.toString().padStart(2, "0")
  ].join(":");
}

function Timer() {
  const [running, setRunning] = useState(false);
  const [timer, setTimer] = useState("00:00:00");
  const timerInterval = useRef();
  function startTimer() {
    if (running) {
      clearInterval(timerInterval.current);
      setRunning(false);
    } else {
      const startTimer = Date.now();
      setRunning(true);
      timerInterval.current = setInterval(() => {
        setTimer(calculateDiff(startTimer, Date.now()))
      }, 1000);
    }
  }
  return <div className="flex">
    <div className="flex-1">
      <input type="text w-full outline-none" />
    </div>
    <div className="w-1/5">
      Project
    </div>
    <div className="w-1/5">
      {timer}
    </div>
    <div>
      <button className={"px-5 rounded text-white " + (running ? "bg-red-500" : "bg-blue-500")}
        onClick={startTimer}>
        {running ? "Stop" : "Start"}
      </button>
    </div>
  </div>
}

export default function Tracker() {
  const items = [
    {
      name: "foo"
    }
  ]
  return <div className="p-10">
    {items.map(item => <Timer key={item.name} />)}
  </div>
}