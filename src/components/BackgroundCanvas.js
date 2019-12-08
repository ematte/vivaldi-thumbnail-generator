import React, { useEffect, useRef } from "react"
import { useSettingsContext } from "./SettingsProvider"
import {
	useSizeCanvasToCssDimensions,
	StyledCanvas,
	drawBackground,
	clearCanvas
} from "./CanvasCommon"

const BackgroundCanvas = () => {
	const { bgColor } = useSettingsContext()
	const canvasRef = useRef()
	useSizeCanvasToCssDimensions(canvasRef)

	useEffect(() => {
		// clear canvas to remove previous image
		clearCanvas(canvasRef.current)
		// draw background color
		drawBackground(canvasRef.current, bgColor)
	}, [bgColor])

	return <StyledCanvas ref={canvasRef} />
}

export default BackgroundCanvas
