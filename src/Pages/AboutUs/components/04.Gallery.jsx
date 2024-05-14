import React, { useState } from 'react';
import styles from "../../../assets/css/About.module.css";

const ImageLoop = ({ currentPage, imagesPerPage }) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const API_KEY = process.env.REACT_APP_API_KEY;

    const images = [];
    const startIndex = currentPage * imagesPerPage + 5;
    const endIndex = Math.min(startIndex + imagesPerPage, 62);

    for (let i = startIndex; i <= endIndex; i++) {
        let paddedIndex = i < 10 ? `0${i}` : i;
        let url = `${API_URL}SLM_07${paddedIndex}.webp?apikey=${API_KEY}`;
        images.push(
            <div className={styles.item} key={i}>
                <img src={url} alt={`Image ${i}`} loading="lazy" />
            </div>
        );
    }
    return images;
}

const Gallery = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const imagesPerPage = 11;
    const totalPages = Math.ceil((62 - 5) / imagesPerPage);

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <section className={styles.gallery} id='gallery'>
            <h1>Gallery</h1>
            <div className={styles.stage}>
                <ImageLoop currentPage={currentPage} imagesPerPage={imagesPerPage} />
            </div>
            <div className={styles.pagination}>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <button key={index} onClick={() => goToPage(index)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
