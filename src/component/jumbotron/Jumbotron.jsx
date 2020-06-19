import React from 'react'
import Button from '../button/Button';
import './Jumbotron.css';
const Jumbotron = () => {
    return (
        <div className="jumbo">
            <div className="text">
                <h1>React Bootstrap</h1>
                <p>The most popular front-end framework <br/><strong>Rebuilt</strong> for React.</p>
            </div>
            <div className="button">
                <Button Name="Get Started" />
                <Button Name="Components" />
            </div>
        </div>
    )
}

export default Jumbotron
