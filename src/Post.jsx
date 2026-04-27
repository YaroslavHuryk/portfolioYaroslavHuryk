function Post({ title, description, imageUrl, date }) {
    return (
        <div className="h-min-64 h-fit pt-15 w-full md:p-20 p-10 bg-orange-500 bg-opacity-50 rounded-lg">
            <img src={imageUrl} alt={title} className="mx-auto mb-4 max-h-96 float-left rounded-xl mr-10" />
            <h2 className="text-gray-200 mt-4 font-bold">{title}</h2>
            <p className="text-gray-300 mt-2">{description}</p>
            <p className="text-gray-400 mt-2">{new Date(date).toLocaleDateString()}</p>
        </div>
    )
}

export default Post;