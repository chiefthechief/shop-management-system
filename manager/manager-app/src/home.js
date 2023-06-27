import {useState, useEffect} from "react";
import BlogList  from "./blog-list";

const Home = () => {
    // let name = "louigi";
    const [blogs, setBlogs] = useState([
        {title:"Nice beach", body:"jfjmvkdm", author:"Albert", id:1},
        {title:"Nice Head", body:"jfjmvkdm", author:"Albert", id:2},
        {title:"Nice legs", body:"jfjmvkdm", author:"Albert", id:3}
    ]);

    const handleDelete = (id) =>{
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() =>{
        console.log("use effect ran");
    }, [])

    return(
        <div className="home">
          <BlogList blogs={blogs} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;