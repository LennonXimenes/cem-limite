import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { IMonsterContext, IMonsterProviderProps, IBoostedBoss, IBoostedCreatures } from "./@types";

export const MonsterContext = createContext({} as IMonsterContext)

export const MonsterProvider = ({ children }: IMonsterProviderProps) => {
    const [boss, setBoss] = useState<IBoostedBoss>();
    const [creature, setCreature] = useState<IBoostedCreatures>();

    useEffect(() => {
        const renderBoss = async () => {
            try {
                const { data } = await api.get("/v4/boostablebosses")
                setBoss(data)
            } catch (error) {
                console.error(error)
            }
        }
        renderBoss();
    }, [])

    useEffect(() => {
        const renderCreature = async () => {
            try {
                const { data } = await api.get("/v4/creatures")
                setCreature(data)
            } catch (error) {
                console.error(error)
            }
        }
        renderCreature();
    }, [])


    return (
        <MonsterContext.Provider value={{ boss, creature }}>
            {children}
        </MonsterContext.Provider>
    )
}