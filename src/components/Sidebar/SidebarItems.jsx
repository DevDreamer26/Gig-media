import CreatePost from "./CreatePost";
import Home from "./Home";
import About from "./About";
import ProfileLink from "./ProfileLink";
import Search from "./Search";


const SidebarItems = () => {
	return (
		<>
			<Home />
			<Search />
			<CreatePost />
			<ProfileLink />
			<About />
		</>
	);
};

export default SidebarItems;
