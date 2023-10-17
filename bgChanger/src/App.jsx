import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="w-full h-screen duration-2000" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 px2 inset-x-0">
          <div className="flex flex-wrap justify-center px-3 shadow-lg py-2 bg-white rounded-2xl gap-3">
          <button className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "Green"}} onClick={() => setColor("green")}>Green</button>
          <button className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>yellow</button>
          <button className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "gray"}} onClick={() => setColor("blue")}>blue</button>
          <button className="outline-none px-4 py-1 text-white rounded-full shadow-lg" style={{backgroundColor: "Pink"}} onClick={() => setColor("pink")}>Pink</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
