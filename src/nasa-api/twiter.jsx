// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export function NewsList() {
//   const [articles, setArticles] = useState([]);
//   const [filteredArticles, setFilteredArticles] = useState([]); // State variable for filtered articles
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = () => {
//     axios
//       .get(
//         `https://newsapi.org/v2/everything?q=apple${
//           searchQuery ? `&q=${searchQuery}` : ""
//         }&from=${startDate}&to=${endDate}&sortBy=publishedAt&apiKey=970c97ee32a0437599efae8b3bb73f85`
//       )
//       .then((response) => {
//         setArticles(response.data.articles);
//         filterArticles(response.data.articles);
//       })
//       .catch((error) => {
//         console.error("Error fetching news data:", error);
//       });
//   };

//   const filterArticles = (articles) => {
//     // Filter articles based on title presence
//     const filtered = articles.filter(
//       (article) => article.title && article.title.trim() !== ""
//     );
//     setFilteredArticles(filtered);
//   };

//   const handleFilter = () => {
//     // Fetch and filter articles when filter button is clicked
//     fetchNews();
//   };

//   return (
//     <div>
//       {/* Your navigation bar code */}
//       <div className="container-fluid">
//         <h2 className="text-center mt-3 mb-5">Apple News API</h2>
//         <div className="row">
//           {filteredArticles.map((article, index) => {
//             // Only render the article if it has a title
//             if (article.title && article.title.trim() !== "") {
//               return (
//                 <div key={index} className="col-md-3 mb-3">
//                   <div className="card h-100">
//                     <img
//                       src={article.urlToImage}
//                       className="card-img-top"
//                       alt={article.title}
//                       style={{ height: "200px" }}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{article.title}</h5>
//                       <p className="card-text">{article.description}</p>
//                       <p className="card-text">
//                         <small className="text-muted">
//                           Published At: {article.publishedAt}
//                         </small>
//                       </p>
//                     </div>
//                     <div className="card-footer">
//                       <a
//                         href={article.url}
//                         className="btn btn-primary"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         Read More
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               );
//             } else {
//               return null; // Render nothing if the article has no title
//             }
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsList.css"; // Import CSS file for component-specific styles

export function NewsList() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]); // State variable for filtered articles
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple${
          searchQuery ? `&q=${searchQuery}` : ""
        }&from=${startDate}&to=${endDate}&sortBy=publishedAt&apiKey=970c97ee32a0437599efae8b3bb73f85`
      )
      .then((response) => {
        setArticles(response.data.articles);
        filterArticles(response.data.articles);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
      });
  };

  const filterArticles = (articles) => {
    // Filter articles based on title presence
    const filtered = articles.filter(
      (article) => article.title && article.title.trim() !== ""
    );
    setFilteredArticles(filtered);
  };

  const handleFilter = () => {
    // Fetch and filter articles when filter button is clicked
    fetchNews();
  };

  return (
    <div className="newspaper">
      {/* Your navigation bar code */}
      <div className="container-fluid">
        <h2 className="text-center mt-3 mb-5">Apple News API</h2>
        <div className="row">
          {filteredArticles.map((article, index) => {
            // Only render the article if it has a title
            if (article.title && article.title.trim() !== "") {
              return (
                <div key={index} className="col-md-3 mb-3">
                  <div className="card h-100 newspaper-article">
                    <img
                      src={article.urlToImage}
                      className="card-img-top newspaper-article-image"
                      alt={article.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title newspaper-article-title">
                        {article.title}
                      </h5>
                      <p className="card-text newspaper-article-description">
                        {article.description}
                      </p>
                      <p className="card-text newspaper-article-date">
                        <small className="text-muted">
                          Published At: {article.publishedAt}
                        </small>
                      </p>
                    </div>
                    <div className="card-footer newspaper-article-footer">
                      <a
                        href={article.url}
                        className="btn btn-primary newspaper-article-readmore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              );
            } else {
              return null; // Render nothing if the article has no title
            }
          })}
        </div>
      </div>
    </div>
  );
}
