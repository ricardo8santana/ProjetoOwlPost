import './PageSection.css';

const PageSection = ({ children, isStart, isEnd, hugContent, variant }) => {
    const startSection = isStart ? ' section-start': null;
    const endSection = isEnd ? ' section-end' : null;
    const sectionHeight = hugContent ? 'hug-content' : 'fill-screen'
    const variantColor = variant || 'primary'

    const className = `${startSection || endSection || ''} ${variantColor} ${sectionHeight}`;

    return(
        <section className={`page-section ${className}`}>
            { children }
        </section>
    );
};

export default PageSection;