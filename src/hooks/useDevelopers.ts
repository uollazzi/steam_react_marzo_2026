import type { GetDevelopersResponse } from "@/models/developer"
import { useQuery } from "@tanstack/react-query"

const getDevelopers = (): Promise<GetDevelopersResponse> => {
    return fetch(
        "https://api.rawg.io/api/developers?key=b1a0c8d344f940a49d704ba0e98ef6d2"
    ).then((res) => res.json())
}

const useDevelopers = () => {
    return useQuery<GetDevelopersResponse, Error>({
        queryKey: ["rawg_developers"],
        queryFn: getDevelopers,
    })
}

export default useDevelopers