import PageTemplate from "../templates/Page";
import styles from "./home/Home.module.scss";

const Home = () => (
	<PageTemplate className={styles.Home}>
		<h1>Hello</h1>
		<p>Hello broham</p>
	</PageTemplate>
);

export default Home;
