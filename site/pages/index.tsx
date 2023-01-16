import Button from "@/components/Button";
import HighlightCards from "@/components/HighlightCards";
import Review from "@/components/Review";
import Section from "@/components/Section";
import Title from "@/components/Title";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import PageTemplate from "../templates/Page";
import styles from "./home/Home.module.scss";

const Home = () => (
	<PageTemplate className={styles.Home}>
		<Flex
			backgroundImage="/home_bg.png"
			backgroundRepeat="no-repeat"
			backgroundSize="cover"
			backgroundPosition="center"
			borderRadius={8}
			height={400}
			paddingX={{ base: 8, md: 16 }}
			alignItems="center"
			marginBottom="24px"
		>
			<Box>
				<Title
					textAlign={{ base: "center", md: "left" }}
				>{`Let's Eat.`}</Title>
				<Text fontSize="2xl" fontWeight="bold" marginBottom="4">
					Catch the latest game and the best grub!
				</Text>
				<Button href="/menu">View Menu</Button>
			</Box>
		</Flex>
		<HighlightCards />
		<Flex
			paddingY="80px"
			display="flex"
			justifyContent="center"
			borderStyle="solid"
			borderColor="brand.secondary.hover"
			borderBottomWidth="1px"
		>
			<Text textAlign="center" maxWidth={{ base: "90%", md: "60%" }}>
				The ultimate sports bar & grill with delicious food and an
				amazing atmosphere. Chow down on a big and juicy angus
				cheeseburger or enjoy any of our daily drink specials. Watch
				parties, tournament brackets for cash prizes and so much more.
				Come join us!
			</Text>
		</Flex>
		<Section
			title="Reviews"
			borderStyle="solid"
			borderBottomWidth="1px"
			borderColor="brand.secondary.hover"
		>
			<Flex wrap="wrap">
				<Review
					author="Nick"
					review="Really great place! I had the prime rib sandwich and that thing is out of this world! Highly recommend. The starter bread had rosemary and, I think, olive oil? Really good start. My spouse had the chicken melt and says it was worth it."
				/>
				<Review
					author="Billy N."
					review="Great sports bar! We showed up with 10 people and were seated immediately! Our waiter was great, very attentive and memorized our drinks and brought them back perfectly! The food is super sized so come hungry! Beer and spirits menu is abundant. Really great atmosphere."
				/>
				<Review
					author="Linda H."
					review="Excellent food and service! We took a large group for dinner at Guru's. Jesse, our waiter, did a perfect job in taking our orders and making sure everything was delicious and everyone was served at the same time. The restaurant was nicely decorated and a great place for holding conversations while dining. We will definitely return!"
				/>
				<Review
					author="Scott G."
					review="Great food at Guru’s Sports Bar & Grill! Service was friendly and attentive. Good selection of sports bar food options. The fried pickles were on point! I would definitely come back."
				/>
			</Flex>
			<Flex justifyContent="center">
				<Button href="https://g.page/r/Cb1sS_M1nbxgEB0/review">
					Leave a Review
				</Button>
			</Flex>
		</Section>
		<Flex gap={{ base: 4, md: 8 }} paddingTop="48px" flexWrap="wrap">
			<Image
				flex={1}
				flexBasis={{ base: "45%", md: "auto" }}
				src="/gallery/gallery_image1.png"
				alt="Guru's Sports Bar & Grill Gallery Image"
			/>
			<Image
				flex={1}
				flexBasis={{ base: "45%", md: "auto" }}
				src="/gallery/gallery_image2.png"
				alt="Guru's Sports Bar & Grill Gallery Image"
			/>
			<Image
				flex={1}
				flexBasis={{ base: "45%", md: "auto" }}
				src="/gallery/gallery_image3.png"
				alt="Guru's Sports Bar & Grill Gallery Image"
			/>
			<Image
				flex={1}
				flexBasis={{ base: "45%", md: "auto" }}
				src="/gallery/gallery_image4.png"
				alt="Guru's Sports Bar & Grill Gallery Image"
			/>
			<Image
				flex={1}
				flexBasis={{ base: "45%", md: "auto" }}
				src="/gallery/gallery_image5.png"
				alt="Guru's Sports Bar & Grill Gallery Image"
			/>
		</Flex>
	</PageTemplate>
);

export default Home;
