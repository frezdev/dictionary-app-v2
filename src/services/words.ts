import { APIResponse } from "@/types";

const API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en'

export class WordServices {
  static async getByQuery(query: string): Promise<[Error | null, APIResponse[] | null]> {
    try {
      const res = await fetch(`${API_URL}/${query}`)

      console.log({ res });

      if (res.status !== 200) throw new Error(`${res.status} - ${res.statusText}`);
      // if (res.status !== 200) throw new Error(`${res.status} - ${res.statusText}`);

      const data = await res.json() as APIResponse[]

      return [null, data]
    } catch (error) {
      if (error instanceof Error) return [new Error(error.message), null]
      return [new Error('Unknown Error'), null]
    }
  }
}