interface ArticleProps {
    title: string;
    date: string;
    content: JSX.Element;
  }
  
  const Article: React.FC<ArticleProps> = ({ title, date, content }) => {
    return (
      <article className="mb-12">
        <h2 className="text-4xl font-bold mb-3">{title}</h2>
        <p className="text-sm text-gray-400 mb-6">Published on {date}</p>
        <div className="text-lg leading-relaxed">{content}</div>
      </article>
    );
  };
  
  export default Article;
  