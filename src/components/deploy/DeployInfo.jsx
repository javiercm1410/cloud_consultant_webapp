import React from 'react';
import styles from './Deploy.module.css';
import ServicesCard from './ServicesCard';
import { useLocation } from 'react-router-dom';
import { FormDataContext } from '../../context/formDataContext';

const DeployInfo = () => {
    // const {formData} = useContext(FormDataContext);

    const location = useLocation();
    // const data = location.state?.data || location.state?.formData;
    const apiResponse = location.state?.apiResponse || location.state?.Jresp;
    const deploy = location.state?.deployResponse;
    const data = apiResponse?.data;

    return(
        <div className='bg-main vh-100 d-flex flex-column align-items-center'>
            <h2 className={`${styles.cloudHeader} `}>Results</h2>
            <div className='row' style={{ width: "80%", marginBottom: "2rem" }}>
                <div className="col-md-6">
                    <ServicesCard data={data}/>
                </div>
                <div className="col-md-6">
                    <div className={`card ${styles.card}`} style={{ height: '550px', marginBottom: "2rem" }}>   
                        <div className="card-header">Endpoints</div>
                        <div className={`card-body bg-dark ${styles.cardBody}`}>
                            <div>
                                <p>{JSON.stringify(deploy, null, 2)}</p>
                            </div>
                            {/* <p className={`${styles.cloudPrice} card-text`}>como asi</p> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeployInfo;
