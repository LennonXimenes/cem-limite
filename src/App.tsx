import { useContext } from "react"
import { MonsterContext } from "./providers/MonsterContext/MonsterContext"

export const App = () => {
  const { boss, creature } = useContext(MonsterContext);

  return (
    <main>
      <h1>Hello, CemLimite!</h1>

      <div>
        <div>
          <img src={boss?.boostable_bosses.boosted.image_url} alt={boss?.boostable_bosses.boosted.name} />
          <p>{boss?.boostable_bosses.boosted.name}</p>
        </div>

        <div>
          <img src={creature?.creatures.boosted.image_url} alt={creature?.creatures.boosted.name} />
          <p>{creature?.creatures.boosted.name}</p>
        </div>
      </div>
    </main>
  )
}