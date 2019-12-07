import React from "react"
import styled from "styled-components/macro"
import { Link } from "react-router-dom"

import Button from "../Button"
import { useExporter } from "."
import LoadingOverlay from "../LoadingOverlay"
import { cover } from "polished"

const Exporter = () => {
	const [{ isLoading, isError, data }] = useExporter()

	// TODO: if I make renaming thumbnails possible, the names will have to be lifted here

	const downloadAll = () => {
		data.forEach((url, i) => downloadImage(url, `thumbnail-${i + 1}.png`))
	}

	const isEmpty = !data || data.length === 0

	return (
		<OuterContainer>
			<Container>
				<Header>
					<h2>Downloads</h2>
					<Button as={Link} to={"/"}>
						Back
					</Button>
				</Header>
				<ContentContainer>
					{isLoading ? (
						<LoadingOverlay>Loading...</LoadingOverlay>
					) : isEmpty ? (
						<EmptyState>
							There is nothing here,&nbsp;<Link to="/">go back</Link>&nbsp;to add some
							icons and try again
						</EmptyState>
					) : (
						<ListContainer>
							{data.map((url, i) => (
								<ExporterItem key={url} name={`thumbnail-${i + 1}`} url={url} />
							))}
						</ListContainer>
					)}
				</ContentContainer>

				{!isEmpty && (
					<Footer>
						<Disclaimer>
							Make sure to allow this site to download multiple files at once, by clicking
							the 'i' icon in your browser's address bar and changing the appropriate
							settings.
						</Disclaimer>
						<Button
							variant="primary"
							onClick={downloadAll}
							disabled={isLoading || isError || !data || data.length === 0}
						>
							Download All
						</Button>
					</Footer>
				)}
			</Container>
			<ShareButtonsContainer>
				<div className="sharethis-inline-share-buttons" />
			</ShareButtonsContainer>
		</OuterContainer>
	)
}

const ExporterItem = ({ name, url }) => {
	const handleClick = () => {
		downloadImage(url, name)
	}

	return (
		<ItemContainer>
			<Preview url={url} />
			<Data>{name}</Data>
			<Actions>
				<Button onClick={handleClick} variant="text-only">
					Download
				</Button>
			</Actions>
		</ItemContainer>
	)
}

const downloadImage = (url, filename) => {
	filename += ".png"
	const a = document.createElement("a")
	a.href = url
	a.download = filename
	a.style.display = "none"
	document.body.appendChild(a)
	a.click()
	a.remove()
}

const ShareButtonsContainer = styled.div`
	margin: 36px auto;
`

const Footer = styled.div`
	display: flex;
	align-items: center;
	height: 72px;
	border-top: 2px solid #f5f5f5;
`

const Disclaimer = styled.div`
	color: #747474;
	font-size: 12px;
	line-height: 20px;
	max-width: 410px;
	margin-right: auto;
`

const OuterContainer = styled.div`
	margin: 0 auto;
	max-width: 732px;
`

const Container = styled.div`
	width: 732px;
	background: white;
	padding: 0 24px;
	position: relative;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 3px 16px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
`

const ContentContainer = styled.div`
	flex: 1 0 100px;
	position: relative;
`

const ListContainer = styled.div`
	max-height: 640px;
	overflow-y: auto;
`

const ItemContainer = styled.div`
	margin: 24px 0;
	display: flex;
	align-items: center;
`

const EmptyState = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 12px;
	color: #747474;
	${cover()}

	a {
		color: black;
		text-decoration: underline;
	}
`

const Preview = styled.div`
	background-color: #f2f2f2;
	background-image: url(${(p) => p.url});
	background-position: center;
	background-size: cover;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.1) inset;
	border-radius: 5px;
	height: 60px;
	width: 73px;
	margin-right: 16px;
`

const Data = styled.div`
	font-weight: bold;
	margin-right: auto;
`

const Actions = styled.div``

const Header = styled.div`
	height: 72px;
	display: flex;
	justify-content: center;
	align-items: center;

	border-bottom: 2px solid #f5f5f5;

	h2 {
		font-weight: 900;
		font-size: 24px;
		line-height: 40px;
		color: #383838;
		margin-right: auto;
		letter-spacing: 0.03em;
	}
`

export default Exporter
