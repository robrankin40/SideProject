export interface PokemonList {
  count: number;
  next?: string | null;
  previous?: string | null;
  results?: APIResult[];
}

export interface APIResult {
  name: string;
  url: string;
}

export interface PokemonAbility {
  name: string;
  url: string;
}

export interface PokemonSprites {
  back_default: string;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  back_gray?: string | null;
  back_transparent?: string | null;
  front_default: string;
  front_gray?: string | null;
  front_transparent?: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
}

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  weight: number;
  abilities: {
    slot: number;
    is_hidden: boolean;
    ability: PokemonAbility;
  }[];
  forms: {
    name: string;
    url: string;
  }[];
  game_indices: {
    game_index: number;
    version: APIResult[];
  };
  past_abilities: {
    slot: number;
    is_hidden: boolean;
    ability: PokemonAbility;
  }[];
  moves: {
    move: APIResult;
    version_group_details: {
      level_learned_at: number;
      move_learn_method: APIResult;
      version_group: APIResult;
    }[];
  }[];
  past_types: {
    slot: number;
    type: APIResult;
  }[];
  types: {
    slot: number;
    type: APIResult;
  }[];
  species: APIResult;
  states?: {
    base_stat: number;
    effort: number;
    stat: APIResult;
  }[];
  sprites: {
    other: {
      dream_world: Partial<PokemonSprites>;
      home: Partial<PokemonSprites>;
      ['official-artwork']: Partial<PokemonSprites>;
    };
    versions: {
      ['generation-i']: {
        ['red-blue']: Partial<PokemonSprites>;
        yellow: Partial<PokemonSprites>;
      };
      ['generation-ii']: {
        crystal: Partial<PokemonSprites>;
        gold: Partial<PokemonSprites>;
        silver: Partial<PokemonSprites>;
      };
      ['generation-iii']: {
        emerald: Partial<PokemonSprites>;
        ['firered-leafgreen']: Partial<PokemonSprites>;
        ['ruby-sapphire']: Partial<PokemonSprites>;
      };
      ['generation-iv']: {
        ['diamond-pearl']: Partial<PokemonSprites>;
        ['heartgold-soulsilver']: Partial<PokemonSprites>;
        ['platinum']: Partial<PokemonSprites>;
      };
      ['generation-v']: {
        ['black-white']: Partial<PokemonSprites>;
      };
      ['generation-vi']: {
        ['omegaruby-alphasapphire']: Partial<PokemonSprites>;
        ['x-y']: Partial<PokemonSprites>;
      };
      ['generation-vii']: {
        icons: Partial<PokemonSprites>;
        ['ultra-sun-ultra-moon']: Partial<PokemonSprites>;
      };
    };
  } & Partial<PokemonSprites>;
}
