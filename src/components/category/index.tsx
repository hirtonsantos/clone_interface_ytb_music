import "../category/style.scss"
import {AiOutlineMore} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"

interface ListProps {
    categoryList: category[]
    text: string;
}

interface category {
    img: string;
    title: string;
    artists: string
}

const Category = ({categoryList, text}: ListProps) => {

  return (
  <div className="container-category"> 
        <span>
            <h1>
                {text}
            </h1>
        </span>

        <section className="category-list">
        {
            categoryList.map((item, index) => {
                return (
                    <div key={index}>
                        <img src={item.img} alt="teste" />
                        <span className="title">{item.title}</span>
                        <span className="artists">{item.artists}</span>
                        <AiOutlineMore/>
                        <BsFillPlayCircleFill className="play-svg"/>
                    </div>
                )
            })
        }
        </section>

  </div>
  )
};

export default Category;
