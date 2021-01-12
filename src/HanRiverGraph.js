import { getHanRiver } from './action';
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const options = {
    legend:{
        display: true,
        labels: {
            fontColor: 'black'
        }
    },
    scales: {
        yAxes: [{
            ticks: {
                min: 0,
                stepSize: 1,
            }
        }]  
    },
    maintainAspectRatio: false
}

const HanRiverGraph = () => {
    let riverInfo = useSelector(state => state.data);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHanRiver());
    }, [dispatch]);

    let calculatedArr = [ 3.9, 4.7, 7.9, 12.5, 17.1, 21.9, 23.6, 21.1, 18.8, 16.4, 11.6, 5.8, riverInfo.temp]
    let rankColor = ["#ABBBBB", "#AABBBB", "#AAABBB", "#AAAABB", "#AAAAAB", "#BBBBBB", "#CBBBBB", "#CCBBBB", "#CCCBBB", "#CCCCBB", "#CCCCCB", "#CCCCCC", "#CDDDDD"]

    const data = {
        labels: ['1월','2월','3월','4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월', '오늘'],
        datasets: [
            {
                label: "2020년 월 평균 한강 수온",
                backgroundColor: rankColor,
                borderColor: rankColor,
                borderWidth: 1,
                hoverBackgroundColor: rankColor,
                hoverBorderColor: rankColor,
                data: calculatedArr
            }
        ]
    };


    return(
        <Bar className="_chart"
            data={data}
            options={options}
        />
    )
};

export default HanRiverGraph;