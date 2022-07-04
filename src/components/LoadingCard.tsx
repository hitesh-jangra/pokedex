import React from 'react'

const LoadingCard = () => {
    return (
        <div className="card" aria-hidden="true">
            <p  className="card-img-top"  ></p>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-4"></span>
                    <span className="placeholder col-6"></span>
                    <span className="placeholder col-8"></span>
                </p>
                <a href="#" className="btn btn-primary disabled placeholder col-6"></a>
            </div>
        </div>
    )
}

export default LoadingCard