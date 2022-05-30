import "../home/style.scss"
import { Header } from "../../components/header";
import UserPreferences from "../../components/userPreferences";
import Category from "../../components/category";
import { hits, mix, musicsHistoric } from "../../constants";

const Home = () => {

    return (
        <div className="container-home" data-testid="home-route">
            <Header/>
            <UserPreferences data-testid="user-profile"/>
            <Category categoryList={hits} text={"Hits de Hoje"}/>
            <Category categoryList={mix} text={"Mixtapes criadas para você"}/>
            <Category categoryList={musicsHistoric} text={"Ouvir novamente"}/>
        </div>
    )
}


export default Home;
