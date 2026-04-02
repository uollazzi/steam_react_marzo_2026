import {
  FaAndroid,
  FaApple,
  FaGamepad,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa"

interface Props {
  platform: string
  size?: number
}

const PlatformIcon = ({ platform, size = 18 }: Props) => {
  switch (platform) {
    case "pc":
      return <FaWindows size={size} />
    case "playstation":
      return <FaPlaystation size={size} />
    case "xbox":
      return <FaXbox size={size} />
    case "android":
      return <FaAndroid size={size} />
    case "linux":
      return <FaLinux size={size} />
    case "mac":
      return <FaApple size={size} />
    case "nintendo":
      return <FaGamepad size={size} />
    default:
      return <div>{platform}</div>
  }
}

export default PlatformIcon
