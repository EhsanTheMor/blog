import { useParams } from "react-router-dom"

export default function ArticlePage() {
    const params = useParams<{ id: string }>();

    const RenderBlogPost = ({ articles }: { articles: any[] }) => {
        return (
            <>
                <div className='blog-post-holder'>

                    <div className="article-holder">
                        <Title title='Business Partners Work at Modern Office' />

                        <div className="auther-field">
                            <Avatar source='asdf' />

                            <AuthorDescription />
                        </div>
                    </div>

                    <Image sx={{ borderRadius: '5px', overflow: 'hidden' }} source='/images/post1.jpg' alt='post1' />

                    <div className="article-markdown w-640 m-auto">
                        {
                            articles.length > 0 && articles[0].passage.map((item: any, index: number) => (
                                <ReactMarkDown key={index}>{item}</ReactMarkDown>
                            ))
                        }
                        <div className='tags'>
                            {
                                articles.length > 0 && articles[0].tags.map((item: any, index: number) => (
                                    <a key={index}>{item}</a>
                                ))
                            }
                        </div>
                    </div>

                </div>


                <div className="share-section">
                    <span>Share</span>
                    <div className="social-media-links"></div>
                </div>
            </>
        )
    }

    return (
        <div>
            <h1>This is for the article {params.id}</h1>
        </div>
    )
}
