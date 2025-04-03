import React from 'react';
import styled from 'styled-components';

const SkeleCart = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card_load" />
        <div className="card_load_extreme_title" />
        <div className="card_load_extreme_title" />
        <div className="card_load_extreme_descripion" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    width: 250px; /* Adjust width for better grid fitting */
    height: 250px;
    background: #ffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 1px 25px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 15px 10px;
  }

  .card_load {
    width: 90%;
    height: 70%;
    border-radius: 10px;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load89234 2s infinite;
  }

  .card_load_extreme_title {
    width: 90%;
    height: 10px;
    margin-top: 10px;
    border-radius: 5px;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load89234 2s infinite;
  }

  .card_load_extreme_descripion {
    width: 90%;
    height: 47px;
    margin-top: 10px;
    border-radius: 5px;
    background: linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%);
    background-size: 200% 100%;
    background-position: 100% 0;
    animation: load89234 2s infinite;
  }

  @keyframes load89234 {
    100% {
      background-position: -100% 0;
    }
  }
`;

export default SkeleCart;
