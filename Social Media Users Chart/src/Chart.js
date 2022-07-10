import React, {useEffect, useState} from 'react';
import Area from "./components/Area";
import ChartItem from "./components/ChartItem";
function App() {
  const getRandomNumber=()=>{
    return Math.floor(Math.random()*100+1)
  }
  const [barData, setBarData] = useState([
    {
      id: 1,
      title: "Facebook",
      color: "#181AE5",
      value: getRandomNumber(),
    },
    {
      id: 2,
      title: "Instagram",
      color: "#F93CA9",
      value: getRandomNumber(),
    },
    {
      id: 3,
      title: "Twitter",
      color: "#18C5E5",
      value: getRandomNumber(),
    },
    {
      id: 4,
      title: "Tiktok",
      color: "#F3355B",
      value: getRandomNumber(),
    },

  ]);
  const findBigBarItem=(data)=>{
    return  data.sort((val1,val2)=>val2.value-val1.value)[0].value
  }

  const [bigBarData,setBigBarData]=useState(findBigBarItem(barData))

  const setBarDataWithRandom=()=>{
    let data=[...barData]
    data.forEach((item)=>{
      item.value+=getRandomNumber()
    })
    setBigBarData(findBigBarItem(data))
    setBarData(data)
  }

  useEffect(()=>{
    let timer;
    timer=setInterval(()=>{
      setBarDataWithRandom()
    },600)
  },[])

  const renderBarItem=(item,index)=>{
    let rate=item.value/bigBarData
    rate=rate * (1000 - 40)
    const percent=(rate*100)/1050
    return <ChartItem
      key={item.id}
      backgroundColor={item.color}
      width={percent+"%"}
      text={item.title}
      count={item.value}
      top={(index===0?20:(index*37)+20)+'px'}

    />
  }

  return (
      <>
        <div className="app-title">Number of Social Media Users Worldwide</div>
        <Area data={barData}>
          {barData.map((item,index)=>renderBarItem(item,index))}
        </Area>
      </>);
}

export default App;
