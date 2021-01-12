import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getHanRiver } from './action';
import HanRiverGraph from './HanRiverGraph';
import './stlye.css';

const HanRver = () => {
    let riverInfo = useSelector(state => state.data);
    let requestStatus = useSelector(state => state.status);

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHanRiver());
    }, [dispatch]);

    if(requestStatus === ''){
        return(
            <h1>
                수온 재는중....
            </h1>
        )
    }

    return(
        <div className="hanriver">
            <div className="hanrivergraph" >
                <HanRiverGraph/>
            </div>
            <div className="hanriver-info">
                <div style={{fontSize: 35}}>현재 한강 수온</div>
                <div style={{fontSize: 30}}>{riverInfo.temp}℃</div>
                <div style={{fontSize: 15}}>{riverInfo.time}</div>
            </div>
        </div>
    )
};

export default HanRver;