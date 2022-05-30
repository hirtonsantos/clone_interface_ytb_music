import "../userPreferences/style.scss"
import { FaUserCircle } from "react-icons/fa"
import { authors } from "../../constants"

const UserPreferences = () => {

    return (
        <div className="container-user" data-testid="user-profile">
           <section>
               <FaUserCircle />
                <div className="info">
                    <h2> MÚSICAS PARA VOCÊ COMEÇAR </h2>
                    <h1> Olá, Hirton Silva </h1>
                </div>
            </section>
            <section className="preferences-list">
            {
                authors.map(({image, author, subscribers}, index) => {
                    return (
                        <div key={index}>
                            <img src={image} alt={author} />
                            <span>{author}</span>
                            <span>{subscribers}</span>
                        </div>
                    )
                })
            }
            </section>
        </div>
    )
}

export default UserPreferences