import { Box, Container, Flex } from "@chakra-ui/react";
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import SuggestedUsers from "../../components/SuggestedUsers/SuggestedUsers";
import NewSuggest from '../../components/SuggestedUsers/NewSuggest'

const HomePage = () => {
	return (
		<Container maxW={"container.lg"}  >
			<Flex gap={20} >
				<Box flex={2} py={10} bg={"#cfe3ff"} border={"1px solid black"}>
					<FeedPosts />
					<NewSuggest />
				</Box>
				<Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
					<SuggestedUsers />
				</Box>
			</Flex>
		</Container>
	);
};

export default HomePage;
