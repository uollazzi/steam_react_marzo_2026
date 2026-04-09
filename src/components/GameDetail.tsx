import { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import { Button } from "./ui/button"
import type { RawgGameDetail } from "@/models/game-detail"

const GameDetail = () => {
  const params = useParams()
  const [game, setGame] = useState<RawgGameDetail | undefined>(undefined)

  useEffect(() => {
    const getGameById = async (id: number) => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games/${id}?key=b1a0c8d344f940a49d704ba0e98ef6d2`
        )
        const gioco: RawgGameDetail = await res.json()

        setGame(gioco)
        console.log(gioco)
      } catch (error) {
        console.log(error)
      }
    }

    getGameById(Number(params.codice))
  }, [params.codice])

  return (
    <>
      <h1 className="text-4xl font-bold">{game?.name}</h1>
      <p>{game?.description_raw}</p>
      <Button>
        <Link to="/">Torna alla home</Link>
      </Button>
    </>
  )
}

export default GameDetail
