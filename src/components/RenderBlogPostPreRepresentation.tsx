import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";
import { useShowCaseContext } from "../context/ShowCaseContext";
import Image from './Image'
import ReadMoreLinkWithArrow from "./ReadMoreLinkWithArrow";
import { BsPinterest, BsTelegram } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import Avatar from "./Avatar";
import Title from "./Title";
import AuthorDescription from "./AuthorDescription";

export default function RenderBlogPostPreRepresentation({ article }: { article: any }) {
    const { state } = useShowCaseContext()

    const imgWidth = () => {
        switch (state) {
            case 'Default':
                return '100%';
            case 'list':
                return '460px';
            default:
                return '100%';
        }
    }

    return (
        <div className={`blog-post-holder ${state === 'Default' ? '' : 'blog-post-holder-list'}`}>

            {/* This classless div and the div below are for different kind of show */}
            <div>

                <Image
                    sx={{
                        borderRadius: '5px',
                        overflow: 'hidden',
                        width: imgWidth()
                    }}
                    source={`/images/${article.image}`} alt='post1'
                />

            </div>

            <div style={{ padding: state === 'Default' ? '20px 10px' : '' }}>

                <div
                    className={`${state === 'Default' ?
                        'article-holder' :
                        'article-holder article-holder-list'}`}
                >

                    <Title title={article.title} source={article.id} />

                    <div className="auther-field">
                        <Avatar source='asdf' />

                        <AuthorDescription />
                    </div>

                </div>

                <div
                    className={`${state === 'Default' ?
                        'article-description' :
                        'article-description article-description-list'}`}
                >

                    {state === 'Default' ?
                        (article.description) :
                        article.description.slice(0, 100)}...

                    <div
                        style={{ paddingTop: '12px' }}
                        className="read-more"
                    >

                        <ReadMoreLinkWithArrow link={`/article/${article.id}`} />

                        <ul>
                            <li>
                                <AiFillFacebook />
                            </li>
                            <li>
                                <AiOutlineTwitter />
                            </li>
                            <li>
                                <BsPinterest />
                            </li>
                            <li>
                                <BsTelegram />
                            </li>
                            <li>
                                <GoComment />
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    )
}