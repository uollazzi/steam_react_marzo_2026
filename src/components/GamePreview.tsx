import type { Game } from "@/models/rawg"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import PlatformIcon from "./PlatformIcon"
import { Link } from "react-router"

interface Props {
  game: Game
}

const GamePreview = ({ game }: Props) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={game.background_image}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction className="flex gap-1">
          {game.genres.map((g) => (
            <Badge key={g.id} variant="secondary">
              {g.name}
            </Badge>
          ))}
        </CardAction>
        <CardTitle>{game.name}</CardTitle>
        <CardDescription>
          <p>{game.released}</p>
          <div className="flex gap-2">
            {game.parent_platforms.map((p) => (
              <PlatformIcon key={p.platform.id} platform={p.platform.slug} />
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">
          <Link to={`/giochi/${game.id}`}>Vai al dettaglio</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default GamePreview
