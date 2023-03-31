export interface RickAndMorty {
   id: number,
   name: string,
   status: string,
   species: string,
   gender: string,
   image: string,
   url: string,
   favorite?: boolean
}

export interface AllDataRickAndMorty extends RickAndMorty {
   origin: {
      name: string,
      url: string
   },
   location: {
      name: string,
      url: string
   }
   episode: string[],
}