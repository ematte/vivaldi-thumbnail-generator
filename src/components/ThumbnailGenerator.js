import React from "react"
import { Route, Switch } from "react-router-dom"
import styled from "styled-components/macro"

import SettingsProvider from "./SettingsProvider"
import SettingsEditor from "./SettingsEditor"
import FilesProvider from "./FilesProvider"
import ImageProcessor from "./ImageProcessor"
import { GenerateButton, Exporter, ExporterProvider } from "./Exporter"

const ThumbnailGenerator = () => (
	<SettingsProvider>
		<FilesProvider>
			<ExporterProvider>
				<Switch>
					<Route path="/downloads" exact>
						<Exporter />
					</Route>
					<Route path="/" exact>
						<Container>
							<ImageProcessor />
							<SettingsEditor />
						</Container>
						<GenerateButton />
					</Route>
				</Switch>
			</ExporterProvider>
		</FilesProvider>
	</SettingsProvider>
)

const Container = styled.div`
	padding: 0 20px;
	display: flex;
	justify-content: center;
	margin: 0 auto;
`

export default ThumbnailGenerator
