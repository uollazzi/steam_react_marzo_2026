import type { Game, GetGamesResponse } from "@/models/rawg"
import { useEffect, useState } from "react"
import GamePreview from "./GamePreview"

const GameList = () => {
  const [games, setGames] = useState<Game[]>([])

  // versione con then e catch
  // useEffect(() => {
  //   fetch(
  //     "https://api.rawg.io/api/games?key=b1a0c8d344f940a49d704ba0e98ef6d2&ordering=-released"
  //   )
  //     .then((res: Response) => res.json())
  //     .then((data: GetGamesResponse) => setGames(data.results))
  //     .catch((err) => console.log(err))
  // }, [])

  // versione con async/await
  useEffect(() => {
    const getGames = async () => {
      try {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=b1a0c8d344f940a49d704ba0e98ef6d2&page_size=9"
        )
        const data: GetGamesResponse = await res.json()
        setGames(data.results)
      } catch (error) {
        console.log(error)
      }
    }

    getGames()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-4">
      {games.map((game) => (
        <GamePreview key={game.id} game={game} />
      ))}
    </div>
  )
}

export default GameList
