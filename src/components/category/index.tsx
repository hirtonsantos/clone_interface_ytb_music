import "../category/style.scss"
import {AiOutlineMore} from "react-icons/ai"
import {BsFillPlayCircleFill} from "react-icons/bs"

interface ListProps {
    categoryList: category[]
    text: string;
    style?: Object;
}

interface category {
    img: string;
    title: string;
    artists: string
    link: string
}

const Category = ({categoryList, text, style = {}}: ListProps) => {

  return (
  <div className="container-category" style={style}> 
        <span>
            <h1>
                {text}
            </h1>
        </span>

        <section className="category-list">
        {
            categoryList.map((item, index) => {
                return (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.img} alt="teste" />
                        <span className="title">{item.title}</span>
                        {/* <span className="artists">{item.artists}</span> */}
                        <AiOutlineMore/>
                        <BsFillPlayCircleFill className="play-svg"/>
                    </a>
                )
            })
        }
        </section>

  </div>
  )
};

export default Category;
