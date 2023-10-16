import React from 'react'
// import "./Hotelcomp.css";

const Card = ({ title, description, imageUrl }) => {
  return (
    <div style={styles.card}>
      <img src={imageUrl} alt="card" style={styles.image} />
      <div style={styles.cardBody}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s',
  },
  image: {
    width: '100%',
    borderRadius: '5px',
  },
  cardBody: {
    padding: '10px',
  },
  title: {
    fontSize: '1.5rem',
    margin: '5px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default Card;
