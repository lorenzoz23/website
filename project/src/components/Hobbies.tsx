import React, { useEffect } from "react";
import {
	Box,
	Heading,
	//Paragraph,
	ResponsiveContext,
	Anchor,
	Nav,
} from "grommet";
import { Youtube, Multimedia, Favorite } from "grommet-icons";

import Trello from "./Trello";

const Hobbies = (props: any) => {
	useEffect(() => {
		document.title = "hobbies | lorenzo zenitsky";
	}, []);
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<Box direction='row' background='transparent'>
					<Box flex align='center' justify='start' fill gap='medium'>
						<Heading textAlign='center' margin='none'>
							my interests
						</Heading>
						<Nav direction='row' gap='small' alignContent='center'>
							<Anchor
								title='YouTube'
								icon={<Youtube color='plain' />}
								target='_blank'
								href='https://www.youtube.com/user/gdzenitsky'
							/>
							<Anchor
								icon={<Favorite color='status-warning' />}
								target='_blank'
								href='https://www.youtube.com/watch?v=Tw0zYd0eIlk'
								title='quarantined in a bad dream'
							/>
							<Anchor
								title='letterboxd'
								icon={
									<Multimedia
										color={props.mode === "light" ? "plain" : "accent-3"}
									/>
								}
								target='_blank'
								href='https://letterboxd.com/lorenzoz/'
							/>
						</Nav>
						{/* <Paragraph
							size='large'
							textAlign='center'
							margin={{ bottom: "small", right: "medium", left: "medium" }}
							fill
						>
							Whenever I've escaped from the cold, unforgiving clutches of
							school work, I mainly fill up my days with music and film. I love
							playing guitar (tip: visit my long-forgotten YouTube channel for a
							good laugh) as a creative outlet and beating away at my e-drum kit
							for some always-needed stress relief. I love watching and
							analyzing movies with friends and family and taking advantage of
							my odd reviewer-like mentality by trying to go and see every new
							movie out under the sun at my favorite theaters. Be sure to check
							out my letterboxd link above for more of my unwanted opinions! 
						</Paragraph>
						<Paragraph
							size='large'
							textAlign='center'
							margin={{ top: "small", right: "medium", left: "medium" }}
						>
							I'm also a proudly compulsive listmaker, so I've recently started
							keeping track of my favorite indie/alternative and metal releases
							of the year through some publically viewable Trello boards that
							I've linked below. Check 'em out if you are so inclined and feel
							free to shoot me an email with any suggestions of albums, or
							movies for that matter, that you think I'd like but may have
							missed! For total transparency, I also linked my scrum-style
							Trello board for this website so you can see any and all upcoming
							and future updates!
						</Paragraph>
						<Heading level={2} margin={{ bottom: "small" }}>
							Trello Boards
						</Heading> */}
						<Box
							direction={size !== "small" ? "row" : "column"}
							gap={size !== "small" ? "large" : "250px"}
							style={{ zIndex: 1 }}
						>
							<Trello id='H4MoerPA' divLabel='best of metal 2021' />
							<Trello id='nZXJxSHB' divLabel='best of alt/indie 2021' />
							<Trello id='KKDGm1Bx' divLabel='website' />
						</Box>
					</Box>
				</Box>
			)}
		</ResponsiveContext.Consumer>
	);
};

export default Hobbies;
