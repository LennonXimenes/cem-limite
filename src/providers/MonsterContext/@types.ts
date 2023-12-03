export interface IMonsterContext {
    boss: IBoostedBoss | undefined;
    creature: IBoostedCreatures | undefined
}

export interface IMonsterProviderProps {
    children: React.ReactNode;
}

export interface IBoostedBoss {
    boostable_bosses: BoostableBosses
}

export interface BoostableBosses {
    boostable_boss_list: BoostableBossList[]
    boosted: Boosted
}

export interface BoostableBossList {
    featured: boolean
    image_url: string
    name: string
}

export interface Boosted {
    featured: boolean
    image_url: string
    name: string
}

export interface IBoostedCreatures {
    creatures: Creatures
}

export interface Creatures {
    boosted: Boosted
    creature_list: CreatureList[]
}

export interface Boosted {
    featured: boolean
    image_url: string
    name: string
    race: string
}

export interface CreatureList {
    featured: boolean
    image_url: string
    name: string
    race: string
}
