import { useShowCaseContext } from '../context/ShowCaseContext';

export default function Title({ title }: { title: string }) {
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
            <a href="#">
                {title}
            </a>
        </h3>
    )
}