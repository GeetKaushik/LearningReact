import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*_+-=:"
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1))
    }
    setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword])

  const copytoClip = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <div className="bg-zinc-800 w-full h-screen flex justify-center items-center">
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-blue-200 bg-zinc-700 text-center">
        <h1 className="text-white text-3xl mb-4">Password Genenrator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            name=""
            id=""
            value={password}
            className="outline-none w-full py-1 px-3 text-blue-500"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="px-3 py-1 outline-none shadow text-white bg-blue-500"
            onClick={copytoClip}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mb-4">
          <div className="flex items-center gap-x-1  bg-zinc-600 rounded-2xl p-1 shadow">
            <input
              type="range"
              min={8}
              max={50}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>Length ({length})</label>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer bg-zinc-600 rounded-2xl p-1 shadow">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev)
              }}
              className="cursor-pointer"
            />
            <label htmlFor="numInput" className="cursor-pointer">
              Number
            </label>
          </div>
          <div className="flex items-center gap-x-1 cursor-pointer bg-zinc-600 rounded-2xl p-1 shadow">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
              className="cursor-pointer"
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Special Character
            </label>
          </div>
        </div>
        <div>
          <button
            className="px-3 py-1 outline-none shadow text-white bg-blue-500 mb-4 rounded-full"
            onClick={passwordGenerator}
          >
            Generate
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
