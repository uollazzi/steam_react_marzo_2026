import type { Developer } from "@/models/developer"
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Link } from "react-router"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"

interface Props {
  developer: Developer
}
const DeveloperPreview = ({ developer }: Props) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <img
        src={developer.image_background}
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction className="flex gap-1">
          {developer.games.map((g) => (
            <Badge key={g.id} variant="secondary">
              {g.name}
            </Badge>
          ))}
        </CardAction>
        <CardTitle>{developer.name}</CardTitle>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to={`/developers/${developer.slug}`}>Vai al dettaglio</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default DeveloperPreview
