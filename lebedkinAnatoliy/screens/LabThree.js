/* eslint-disable prettier/prettier */
import React, {useState, useMemo, useEffect} from 'react';
import {Text, Button, View} from 'react-native';
import axios from 'axios';

export const LabThree = () => {
    const avgTemp = [
        {name: 'january',
        temp:[-5.8,-5.9,-5.9,-5.9,-6.0,-6.0,-6.1,-6.1,-6.2,-6.2,-6.2,-6.3,-6.3,-6.4,-6.5,-6.5,-6.6,-6.6,-6.7,-6.7,-6.8,-6.8,-6.9,-6.9,-7.0,-7.0,-7.0,-7.1,-7.1,-7.1,-7.1]},
        {name: 'february',
        temp:[-7.2,-7.2,-7.2,-7.2,-7.2,-7.2,-7.1,-7.1,-7.1,-7.0,-7.0,-6.9,-6.8,-6.8,-6.7,-6.6,-6.5,-6.4,-6.3,-6.1,-6.0,-5.9,-5.7,-5.6,-5.4,-5.2,-5.0,-4.8,-4.7]},
        {name: 'march',
        temp:[-4.7,-4.5,-4.2,-4.0,-3.8,-3.6,-3.4,-3.1,-2.9,-2.7,-2.4,-2.2,-1.9,-1.7,-1.4,-1.2,-0.9,-0.6,-0.4,-0.1,0.2,0.4,0.7,1.0,1.2,1.5,1.8,2.0,2.3,2.5,2.8]},
        {name: 'april',
        temp:[3.1,3.3,3.6,3.9,4.1,4.4,4.6,4.9,5.1,5.4,5.6,5.9,6.1,6.4,6.6,6.9,7.1,7.4,7.6,7.8,8.1,8.3,8.5,8.8,9.0,9.2,9.4,9.7,9.9,10.1]},
        {name: 'may',
        temp:[10.3,10.5,10.7,11.0,11.2,11.4,11.6,11.8,12.0,12.1,12.3,12.5,12.7,12.9,13.1,13.2,13.4,13.6,13.7,13.9,14.0,14.2,14.3,14.5,14.6,14.8,14.9,15.0,15.2,15.3,15.4]},
        {name: 'june',
        temp:[15.5,15.6,15.8,15.9,16.0,16.1,16.2,16.3,16.4,16.5,16.6,16.7,16.8,16.9,17.0,17.1,17.2,17.2,17.3,17.4,17.5,17.6,17.7,17.8,17.9,17.9,18.0,18.1,18.2,18.3]},
        {name: 'july',
        temp:[18.4,18.4,18.5,18.6,18.7,18.7,18.8,18.9,18.9,19.0,19.1,19.1,19.2,19.2,19.3,19.3,19.3,19.4,19.4,19.4,19.4,19.4,19.4,19.4,19.4,19.4,19.3,19.3,19.3,19.2,19.1]},
        {name: 'august',
        temp:[19.1,19.0,18.9,18.8,18.7,18.6,18.5,18.4,18.3,18.2,18.0,17.9,17.7,17.6,17.4,17.2,17.1,16.9,16.7,16.5,16.3,16.1,15.9,15.7,15.5,15.3,15.1,14.9,14.7,14.5,14.3]},
        {name: 'september',
        temp:[14.1,13.9,13.7,13.5,13.3,13.1,12.8,12.6,12.4,12.2,12.1,11.9,11.7,11.5,11.3,11.1,10.9,10.7,10.6,10.4,10.2,10.0,9.9,9.7,9.5,9.4,9.2,9.0,8.9,8.7]},
        {name: 'october',
        temp:[8.5,8.3,8.2,8.0,7.8,7.7,7.5,7.3,7.1,6.9,6.8,6.6,6.4,6.2,6.0,5.8,5.6,5.4,5.2,4.9,4.7,4.5,4.3,4.0,3.8,3.6,3.3,3.1,2.9,2.6,2.4]},
        {name: 'november',
        temp:[2.1,1.9,1.6,1.4,1.1,0.9,0.7,0.4,0.2,-0.1,-0.3,-0.5,-0.8,-1.0,-1.2,-1.5,-1.7,-1.9,-2.1,-2.3,-2.5,-2.7,-2.9,-3.0,-3.2,-3.4,-3.5,-3.7,-3.8,-4.0]},
        {name: 'december',
        temp:[-4.1,-4.2,-4.3,-4.4,-4.5,-4.6,-4.7,-4.8,-4.9,-5.0,-5.0,-5.1,-5.2,-5.2,-5.3,-5.3,-5.4,-5.4,-5.4,-5.5,-5.5,-5.5,-5.6,-5.6,-5.6,-5.7,-5.7,-5.7,-5.7,-5.8,-5.8]},
    ];
    const CalculateMonthAverage = (currentMonth) => {
        const [sumTemp, setSumTemp] = useState(0);
        const [sumDays, setSumDays] = useState(0);
        avgTemp.map((month) => {
            month.temp.map((day) => {
                if (month.name === currentMonth) {
                    setSumTemp(sumTemp + day);
                    setSumDays(sumDays + 1);
                } else {
                    setSumTemp(sumTemp);
                    setSumDays(sumDays);
                }
            });
        });
        return sumTemp / sumDays;
    };
    const [diffTemp, SetDiffTemp] = useState();
    const [currentTemp, SetCurrentTemp] = useState();

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/3.0/onecall?lat=55.7504461&lon=37.6174943&appid=8a3030d891e4292b46899d107d77809f&units=metric')
        .then((response) => {
            SetCurrentTemp(response.current.temp);
        });
    });

    return (
        <View>
            <Text>Calculate difference between month average and current temperatures</Text>
            <Button
                title={'Calc'}
                onPress={() => {
                    SetDiffTemp(CalculateMonthAverage('january'));
                }}
            />
            <Text>{diffTemp}</Text>
        </View>
    );
};
