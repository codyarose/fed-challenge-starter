import React from "react"
import TrackIcon from "./icons/Track"
import TimerIcon from "./icons/Timer"
import PlaylistIcon from "./icons/Playlist"

interface Props {
	as: "timer" | "track" | "playlist"
}

const icons = {
	timer: TimerIcon,
	track: TrackIcon,
	playlist: PlaylistIcon,
}

function Icon({ as, ...props }: Props & React.SVGProps<SVGSVGElement>) {
	const Component = icons[as]
	return <Component {...props} />
}

export { Icon }
