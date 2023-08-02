import React, { useContext } from 'react';
import styles from './Deploy.module.css';
import ServicesCard from './ServicesCard';
import { useLocation } from 'react-router-dom';
import { FormDataContext } from '../../context/formDataContext';

const DeployInfo = () => {
    // const {formData} = useContext(FormDataContext);
    const { formData } = useContext(FormDataContext);
    const location = useLocation();
    // const data = location.state?.data || location.state?.formData;
    const apiResponse = location.state?.apiResponse || location.state?.Jresp;
    const deploy = location.state?.deployResponse;
    const data = apiResponse?.data;

    let imageSrc = '../../public/aws-logo.png'; // Default image
    if (formData.cloud_provider === 'AWS' && formData.architecture === 'Classic-three-tier') {
        imageSrc = '../../public/3TierArch.png'; // Specific image for AWS and exampleArchitecture
    } else if (formData.cloud_provider === 'GCP' && formData.architecture === 'Container-based') {
        imageSrc = '../../public/google-cloud-logo.png';
    }

    return(
        <div className='bg-main d-flex flex-column align-items-center'>
            <h2 className={`${styles.cloudHeader} `}>Results</h2>
            <div className='row' style={{ width: "80%", marginBottom: "2rem" }}>
                <div className="col-md-6">
                    <ServicesCard data={data}/>
                </div>
                <div className="col-md-6">
                    <div className={`card ${styles.card}`} style={{ height: '500px', marginBottom: "2rem" }}>   
                        <div className="card-header">Endpoints</div>
                        <div className={`card-body bg-dark ${styles.cardBody}`}>
                            <div>
                                <p style={{ whiteSpace: 'pre-line' }}>{deploy}</p>
                            </div>
                            {/* <p className={`${styles.cloudPrice} card-text`}>como asi</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row' style={{ width: "80%", marginBottom: "2rem" }}>
                <div className="col-md-12">
                    <div className={`card ${styles.card}`} style={{ height: '550px', marginBottom: "2rem" }}>   
                        <div className="card-header">Detailed diagram</div>
                        <div className={`card-body bg-dark ${styles.cardBody}`}>
                            <img src={imageSrc} alt="AWS Logo" style={{ height: '550px', marginTop: "2rem", marginBottom: "2rem" }} className={'.mt-5'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeployInfo;
