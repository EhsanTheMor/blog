import '../style/ContentSection.css'
import { useParams } from "react-router-dom"
import Image from '../components/Image'
import Title from "../components/Title";
import AuthorDescription from "../components/AuthorDescription";
import Avatar from "../components/Avatar";
import ReactMarkDown from 'react-markdown';
import { data } from '../data/data'

export default function ArticlePage() {
    const params = useParams<{ id: string }>();

    const RenderBlogPost = ({ article }: { article: typeof data.articles[0] }) => {
        return (
            <>
                <div style={{ marginTop: '50px' }} className='blog-post-holder'>

                    <div className="article-holder">
                        <Title title='Business Partners Work at Modern Office' source={article.id} />

                        <div className="auther-field">
                            <Avatar source='asdf' />

                            <AuthorDescription />
                        </div>
                    </div>

                    <div className="container">
                        <Image sx={{ borderRadius: '5px', overflow: 'hidden' }} source={`/images/${article.image}`} alt='post1' />
                    </div>

                    <div className="article-markdown w-640 m-auto">
                        {
                            article.passage.map((item: any, index: number) => (
                                <ReactMarkDown key={index}>{item}</ReactMarkDown>
                            ))
                        }
                        <div className='tags'>
                            {
                                article.tags.map((item: any, index: number) => (
                                    <a key={index}>{item}</a>
                                ))
                            }
                        </div>
                    </div>

                </div>


                <div style={{ marginBottom: '40px' }} className="share-section">
                    <span>Share</span>
                    <div className="social-media-links"></div>
                </div>
            </>
        )
    }

    const findArticle = (id: string | undefined) => {
        if (!id) return null
        const article = data.articles.find(article => article.id === params.id)
        if (!article) return null
        return article
    }

    return (
        <div>
            {
                findArticle(params.id) && RenderBlogPost({ article: findArticle(params.id)!! })
            }
        </div>
    )
}
