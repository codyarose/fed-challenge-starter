import { motion } from "framer-motion"
import React, { useState } from "react"
import styled from "styled-components"
import { Icon } from "./Icon"

interface MotionProps {
	[key: string]: {
		[key: string]: number
	}
}

interface Props {
	variants: MotionProps
	title: string
	thumb: string
	trainerThumb: string
	workouts: number
	time?: string
	distance?: number
}

function Card({
	title,
	time,
	distance,
	workouts,
	thumb,
	trainerThumb,
	variants,
}: Props) {
	const [isSelected, setIsSelected] = useState(false)

	const toggleSelected = () => {
		setIsSelected(!isSelected)
	}

	return (
		<StyledCard
			onClick={toggleSelected}
			isSelected={isSelected}
			variants={variants}
		>
			<StyledThumb>
				<img src={thumb} alt='' />
				{workouts > 1 ? (
					<StyledThumbOverlay>
						<div>
							<span>{workouts}</span>
							workouts
							<Icon
								as='playlist'
								width={24}
								height={24}
								fill='currentColor'
							/>
						</div>
					</StyledThumbOverlay>
				) : null}
			</StyledThumb>
			<StyledBody>
				<div>
					<section>
						<StyledTitle>{title}</StyledTitle>
						{time || distance ? (
							<StyledStats>
								{time ? (
									<span>
										<Icon as='timer' />
										{time}
									</span>
								) : null}
								{distance ? (
									<span>
										<Icon as='track' />
										{distance.toLocaleString("en-US")} M
									</span>
								) : null}
							</StyledStats>
						) : null}
					</section>
					<StyledTrainer>
						<img src={trainerThumb} alt='' />
					</StyledTrainer>
				</div>
				<StyledButton isSelected={isSelected}>
					View details
				</StyledButton>
			</StyledBody>
		</StyledCard>
	)
}

export { Card }

const StyledCard = styled(motion.article)<{ isSelected: boolean }>`
	--border-radius: 4px;
	--box-shadow-color: rgba(46, 49, 52, 0.3);

	display: grid;
	grid-template-rows: 164px auto;
	box-shadow: ${({ isSelected }) =>
		isSelected ? "0px 7px 12px var(--box-shadow-color)" : "none"};
	transition: box-shadow 0.2s ease;
	&:hover {
		${({ isSelected }) =>
			isSelected
				? null
				: "box-shadow: 0px 0px 5px var(--box-shadow-color);"}
	}
`

const StyledThumb = styled.div`
	position: relative;
	border-radius: var(--border-radius) var(--border-radius) 0 0;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}
`

const StyledThumbOverlay = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	right: 0;
	width: 112px;
	height: 100%;
	font-size: 10px;
	background: rgba(0, 12, 40, 0.5);
	color: #fff;
	line-height: 1.2;
	letter-spacing: 0.3px;
	text-align: center;
	text-transform: uppercase;
	div {
		display: grid;
		grid-auto-rows: min-content;
		gap: 9px;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
	}
	span {
		font-size: 1.5rem;
		font-weight: 800;
	}
	svg {
		margin: 0 auto;
	}
`

const StyledBody = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	box-shadow: 0px 1px 2px var(--box-shadow-color);
	border-radius: 0 0 var(--border-radius) var(--border-radius);
	> div {
		flex-grow: 1;
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
`

const StyledTitle = styled.h2`
	font-size: 1rem;
	line-height: 1.125;
	letter-spacing: 0.3px;
	margin: 0 0 0.5rem;
`

const StyledStats = styled.div`
	display: flex;
	font-size: 10px;
	span {
		display: flex;
		align-items: center;
		margin-right: 5px;
	}
	svg {
		margin-right: 4px;
	}
`

const StyledTrainer = styled.div`
	flex: 0 0 28px;
	margin-left: 0.5rem;
	align-self: flex-start;
	img {
		width: 100%;
	}
`

const StyledButton = styled.button<{ isSelected: boolean }>`
	all: unset;
	color: #0069d2;
	font-size: 14px;
	line-height: 1.15;
	letter-spacing: 0.5px;
	text-transform: uppercase;
	text-decoration: none;
	opacity: ${({ isSelected }) => (isSelected ? 1 : 0)};
	transition: opacity 0.2s ease;
	${StyledCard}:hover & {
		opacity: 1;
	}
`
