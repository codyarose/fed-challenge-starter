import { motion } from "framer-motion"
import React from "react"
import styled from "styled-components"
import { Card } from "./components/Card"
import data from "./seed.json"

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const child = {
	hidden: { opacity: 0, scale: 0.9 },
	show: { opacity: 1, scale: 1 },
}

function App() {
	return (
		<StyledContainer>
			<StyledGrid variants={container} initial='hidden' animate='show'>
				{data.catalog.map((item) => {
					const {
						title,
						thumb,
						trainerThumb,
						time,
						distance,
						workouts,
					} = item
					return (
						<Card
							key={title}
							variants={child}
							title={title}
							thumb={`${process.env.PUBLIC_URL}/img/${thumb}`}
							trainerThumb={`${process.env.PUBLIC_URL}/img/${trainerThumb}`}
							time={time}
							distance={distance}
							workouts={workouts}
						/>
					)
				})}
			</StyledGrid>
		</StyledContainer>
	)
}

export default App

const StyledContainer = styled.section`
	max-width: 1224px;
	padding: 4rem 2rem;
	margin: 0 auto;
`

const StyledGrid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
	gap: 1.5rem;
	opacity: 0;
`
