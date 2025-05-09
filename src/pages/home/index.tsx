import "../home/style.scss";
import { useState } from "react";
import { Header } from "../../components/header";
import UserPreferences from "../../components/userPreferences";
import Category from "../../components/category";
import { catolicism, javaCourses, jsCourses, pythonCourses } from "../../constants";
import { ChevronLeft, ChevronRight } from "lucide-react"; // ou use ícones próprios

const categories = [
  { list: pythonCourses, label: "Python Courses" },
  { list: javaCourses, label: "Java Courses" },
  { list: jsCourses, label: "Javascript Courses" },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <div className="container-home" data-testid="home-route">
        <Header />
        <UserPreferences data-testid="user-profile" />

        <div className="category-carousel" style={{alignItems: 'flex-start', width: '80%'}}>
            <Category categoryList={catolicism} text="Catolicismo" style={{height: 'auto'}} />
        </div>

        <div className="category-carousel">
            <button onClick={handlePrev} className="arrow-button">
                <ChevronLeft />
            </button>

            <Category
                categoryList={categories[currentIndex].list}
                text={categories[currentIndex].label}
            />

            <button onClick={handleNext} className="arrow-button">
                <ChevronRight />
            </button>
        </div>
    </div>
  );
};

export default Home;
