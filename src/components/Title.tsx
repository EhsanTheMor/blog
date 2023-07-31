import { useShowCaseContext } from '../context/ShowCaseContext';

export default function Title({ title, source }: { title: string, source: string }) {
    const { state } = useShowCaseContext()

    const headerClass = () => {
        switch (state) {
            case 'Default':
                return 'article-header';
            case 'list':
                return 'article-header article-header-list';
            default:
                return 'article-header';
        }
    }

    return (
        <h3 className={headerClass()}>
            <a href={`/article/${source}`}>
                {title}
            </a>
        </h3>
    )
}