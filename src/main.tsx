import React from "react"
import ReactDOM from "react-dom/client"
import { App } from "./App.tsx"
import { MonsterProvider } from "./providers/MonsterContext/MonsterContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MonsterProvider>
      <App />
    </MonsterProvider>
  </React.StrictMode>,
)