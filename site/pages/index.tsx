import PageTemplate from "../templates/Page";
import styles from "./home/Home.module.scss";

const Home = () => {
	return (
		<PageTemplate className={styles.Home}>
			<h1>Hello</h1>
		</PageTemplate>
	);
};

export default Home;
