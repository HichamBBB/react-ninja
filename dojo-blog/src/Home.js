import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {


    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    //This is used to fetch the data whenver there is a chnge in the page
    

    return (
      <div className="home">
        { error && <div> {error} </div>}
        { isPending && <div>Loading ... </div>}
        { blogs && <BlogList blogs={blogs} title="All Blogs !" />}
      </div>
    );
  }
   
  export default Home;