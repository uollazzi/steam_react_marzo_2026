// import type { GetDevelopersResponse } from "@/models/developer"
// import { useQuery } from "@tanstack/react-query"
import useDevelopers from "@/hooks/useDevelopers"
import { Spinner } from "./ui/spinner"
import DeveloperPreview from "./DeveloperPreview"

const DeveloperList = () => {
  const { data, error, isLoading } = useDevelopers()
  // const getDevelopers = (): Promise<GetDevelopersResponse> => {
  //   return fetch(
  //     "https://api.rawg.io/api/developers?key=b1a0c8d344f940a49d704ba0e98ef6d2"
  //   ).then((res) => res.json())
  // }

  // const { data, error, isLoading } = useQuery<GetDevelopersResponse, Error>({
  //   queryKey: ["rawg_developers"],
  //   queryFn: getDevelopers,
  // })

  // if (error) return <p>{error.message}</p>
  if (isLoading) return <Spinner />

  return (
    <div>
      <img />
      {error && <p>{error.message}</p>}
      {data?.results.map((d) => (
        <DeveloperPreview key={d.id} developer={d} />
      ))}
    </div>
  )
}

export default DeveloperList
