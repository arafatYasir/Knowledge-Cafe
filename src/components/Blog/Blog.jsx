import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog }) => {
    const { id, title, author, date, readingTime, content, imageUrl, tags } = blog;
    return (
        <div className="max-w-[845px] mx-auto mt-16 border">
            <div>
                <img className="w-full h-[485px]" src={imageUrl} alt="" />
            </div>
            <div className="px-6 py-5">
                {/* Profile */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        {/* Author Image */}
                        <div>
                            <img src="./images/author_image.svg" alt="" />
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold exo text-black">{author}</h4>
                            <p className="exo text-[#2c2b2b] mt-1">{date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className=" exo text-xl font-medium text-[#464646]">{readingTime} min read</p>
                        <button className="text-2xl">
                            <CiBookmark />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h2 className="mt-4 mb-4 max-w-[735px] exo text-[40px] font-bold leading-[64px]">{title}</h2>

                <p className="max-w-[735px] text-[22px] overflow-hidden whitespace-nowrap text-ellipsis">{content}</p>

                <div className="flex gap-4 mb-5">
                    {
                        tags.map(tag => <a className="text-xl font-medium text-[#464646]" href="#">#{tag}</a>)
                    }
                </div>

                <button className="btn btn-info text-white font-medium text-[16px]">Read Blog</button>
            </div>
        </div>
    );
};

export default Blog;