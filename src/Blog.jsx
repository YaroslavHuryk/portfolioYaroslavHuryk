import React, { useEffect, useState} from 'react'; 
import Post from './Post';
import Loader from './Loader';



function Blog() {
    const [posts, setPosts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const VITE_API_URL = import.meta.env.VITE_API_URL;

    useEffect(() => {
        
        const queryParams = new URLSearchParams({
        type: "post"
        }).toString();
        setIsLoading(true);
        fetch(`${VITE_API_URL}/api/announcements?${queryParams}`)
        .then(response => response.json())
        .then(data => {
            setPosts(data);
            setIsLoading(false);
        }).catch(err => {
                console.error(err);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="pt-36 w-full md:p-20 md:pt-36 p-10">
            <h1 className="pb-8 font-sans text-center font-bold text-4xl text-white">Blog</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 gap-20 md:grid-cols-1">
                    {posts.map((post) => (
                        <Post
                            key={post._id}    
                            title={post.title}
                            description={post.description}
                            imageUrl={post.content}
                            date={post.createdAt}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Blog;