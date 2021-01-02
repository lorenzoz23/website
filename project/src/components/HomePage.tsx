import React from "react";
import { Box, Heading, Paragraph, Avatar, ResponsiveContext } from "grommet";

import Resume from "./Resume";

const HomePage = () => {
	return (
		<ResponsiveContext.Consumer>
			{(size) => (
				<Box
					flex
					direction='row'
					align='start'
					justify='evenly'
					background='transparent'
					overflow={{ horizontal: "hidden" }}
				>
					{size === "large" ? (
						<Box style={{ zIndex: 1 }}>
							<Avatar
								border={{
									color: "brand",
									size: "small",
									style: "solid",
								}}
								round='full'
								src='/website-images/lorenzo.jpg'
								size='200px'
								alignSelf='start'
							/>
							<Box pad={{ right: "60px" }}>
								<Heading textAlign='end'>welcome!</Heading>
							</Box>
							<Paragraph
								size='large'
								textAlign='start'
								margin={{ bottom: "small" }}
							>
								My name is Lorenzo. I am a software developer (degree says
								engineer, but I'm not so sure about that one) with a love for
								all things frontend. I tend to gravitate towards the more
								outwardly artistic corners of software because I believe myself
								to naturally be more creative-minded.
							</Paragraph>
							<Paragraph
								size='large'
								textAlign='center'
								margin={{ bottom: "small", top: "small" }}
							>
								Before I decided to try my hand in software engineering, I
								originally planned on further pursuing my love of music until I
								thought it'd probably be more beneficial to add just one more
								skill to my, admittedly small, yet focused repertoire. Now, as
								an incredibly fortunate college graduate, I find that I'm
								growing more into myself as a developer, focusing on projects
								that not only allow me to satisfy my own creativity but also
								serve to help others... hopefully :)
							</Paragraph>
							<Paragraph size='large' textAlign='end' margin={{ top: "small" }}>
								Above, you will find all of my experiences in industry, all the
								various projects I've had my hands in, and all the things that
								make me... well, me. If you'd like to contact me, click on the
								contact button above and send me an email!
							</Paragraph>
						</Box>
					) : (
						<Box align='center' style={{ zIndex: 1 }}>
							<Avatar
								margin={{ top: "medium" }}
								border={{
									color: "brand",
									size: "small",
									style: "solid",
								}}
								round='full'
								src='/website-images/lorenzo.jpg'
								size={size === "medium" ? "200px" : "125px"}
								alignSelf='center'
							/>
							<Heading textAlign='center'>welcome!</Heading>
							<Paragraph
								size='large'
								textAlign='center'
								margin={{ bottom: "small", right: "medium", left: "medium" }}
							>
								My name is Lorenzo. I am a software developer (degree says
								engineer, but I'm not so sure about that one) with a love for
								all things frontend. I tend to gravitate towards the more
								outwardly artistic corners of software because I believe myself
								to naturally be more creative-minded.
							</Paragraph>
							<Paragraph
								size='large'
								textAlign='center'
								margin={{
									bottom: "small",
									right: "medium",
									left: "medium",
									top: "small",
								}}
							>
								Before I decided to try my hand in software engineering, I
								originally planned on further pursuing my love of music until I
								thought it'd probably be more beneficial to add just one more
								skill to my, admittedly small, yet focused repertoire. Now, as
								an incredibly fortunate college graduate, I find that I'm
								growing more into myself as a developer, focusing on projects
								that not only allow me to satisfy my own creativity but also
								serve to help others... hopefully :)
							</Paragraph>
							<Paragraph
								size='large'
								textAlign='center'
								margin={{
									bottom: "medium",
									top: "small",
									right: "medium",
									left: "medium",
								}}
							>
								Above, you will find all of my experiences in industry, all the
								various projects I've had my hands in, and all the things that
								make me... well, me. If you'd like to contact me, click on the
								contact button and send me an email!
							</Paragraph>
							<Resume />
						</Box>
					)}
					{size === "large" ? (
						<Box>
							<Resume />
						</Box>
					) : null}
				</Box>
			)}
		</ResponsiveContext.Consumer>
	);
};

export default HomePage;
