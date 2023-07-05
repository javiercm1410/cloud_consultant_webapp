import React from 'react';
import styles from './Deploy.module.css';

const DeployInfo = () => {
    return(
        <div className='bg-main vh-100 d-flex flex-column align-items-center'>
            <h2 className={`${styles.cloudHeader} `}>Choose a cloud provider</h2>
            <div className={`card ${styles.card}`} style={{ height: '150px', marginTop: "2rem", marginBottom: "2rem", width: "50%" }}>   
                <div className={`card-body bg-dark ${styles.cardBody}`}> {/* Add bg-dark class here */}
                    <p className={`${styles.cloudPrice} card-text`}>como asi</p>
                </div>
            </div>
        </div>
    );
};

export default DeployInfo;
