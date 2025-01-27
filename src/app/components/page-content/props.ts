export interface User {
    ckey: string;
    first_appearance?: string;
    last_appearance?: string;
    discord_id?: string;
  }

export interface Character {
  id: number,
  name: string,
  age: number
}

export interface UserInfo {
  user: User,
  characters?: Array<Character>
} 