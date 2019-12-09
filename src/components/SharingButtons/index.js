import React from "react"
import "./style.css"

const SharingButtons = () => (
	<>
		<div className="share-text">If you like this tool, consider sharing it: </div>
		<ul className="share-buttons">
			<li>
				<a
					href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvivaldi-thumbnails.netlify.com%2F&quote=Vivaldi%20Thumbnails%20Generator"
					title="Share on Facebook"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img alt="Share on Facebook" src="social_flat_rounded_rects_svg/Facebook.svg" />
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/intent/tweet?source=https%3A%2F%2Fvivaldi-thumbnails.netlify.com%2F&text=Create%20beautiful%20thumbnails%20for%20Vivaldi%20Browser%E2%80%99s%20Speed%20Dials%2C%20in%20a%20matter%20of%20seconds:%20https%3A%2F%2Fvivaldi-thumbnails.netlify.com"
					target="_blank"
					rel="noopener noreferrer"
					title="Tweet"
				>
					<img alt="Tweet" src="social_flat_rounded_rects_svg/Twitter.svg" />
				</a>
			</li>
			<li>
				<a
					href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Fvivaldi-thumbnails.netlify.com%2F&description=Create%20beautiful%20thumbnails%20for%20Vivaldi%20Browser%E2%80%99s%20Speed%20Dials%2C%20in%20a%20matter%20of%20seconds"
					target="_blank"
					rel="noopener noreferrer"
					title="Pin it"
				>
					<img alt="Pin it" src="social_flat_rounded_rects_svg/Pinterest.svg" />
				</a>
			</li>
			<li>
				<a
					href="http://www.reddit.com/submit?url=https%3A%2F%2Fvivaldi-thumbnails.netlify.com%2F&title=Vivaldi%20Thumbnails%20Generator"
					target="_blank"
					rel="noopener noreferrer"
					title="Submit to Reddit"
				>
					<img alt="Submit to Reddit" src="social_flat_rounded_rects_svg/Reddit.svg" />
				</a>
			</li>
			<li>
				<a
					href="mailto:?subject=Vivaldi%20Thumbnails%20Generator&body=Create%20beautiful%20thumbnails%20for%20Vivaldi%20Browser%E2%80%99s%20Speed%20Dials%2C%20in%20a%20matter%20of%20seconds:%20https%3A%2F%2Fvivaldi-thumbnails.netlify.com%2F"
					target="_blank"
					rel="noopener noreferrer"
					title="Send email"
				>
					<img alt="Send email" src="social_flat_rounded_rects_svg/Email.svg" />
				</a>
			</li>
		</ul>
	</>
)

export default SharingButtons
