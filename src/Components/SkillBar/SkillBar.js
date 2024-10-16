import React, { useEffect, useState } from 'react'

const SkillBar = ({ skill, percentage }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);    
        useEffect(() => {
            setCurrentPercentage(0);
            const animationDuration = 1000; 
            const incrementTime = 10; 
            const incrementAmount = Math.ceil(percentage / (animationDuration / incrementTime)); 
            const interval = setInterval(() => {
                setCurrentPercentage(prev => {
                    if (prev + incrementAmount >= percentage) {
                        clearInterval(interval);
                        return percentage; 
                    }
                    return prev + incrementAmount; 
                });
            }, incrementTime);
    
            return () => clearInterval(interval); 
        }, [percentage]);
    
        return (
            <div className="skill-bar">
                <div className="skill-name">{skill}</div>
                <div className="progress">
                    <div
                        className="progress-done"
                        style={{ width: `${currentPercentage}%` }}
                    />
                    {/* Position percentage text above the bar */}
                    <div className="progress-text">{currentPercentage}%</div>
                </div>
            </div>
        );
    };
export default SkillBar