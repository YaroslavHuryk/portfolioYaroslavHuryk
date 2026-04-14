function Logo({imgUrl}) {
    return (
        <div className="w-fit h-fit">
            <img src={imgUrl} className="h-12" alt="Logo" />
        </div>
    );
}

export default Logo;