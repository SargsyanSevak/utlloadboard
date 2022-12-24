import React, { useContext, useState} from 'react'
import { ContextValue } from '../../Context/Context'
import { Chart } from "react-google-charts";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnnouncementIcon from '@mui/icons-material/Announcement';


const Home = () => {
  const {data} = useContext(ContextValue)
  let userName = localStorage.getItem('userName')

  const allLoads = data.filter(function(el){
    return el.owner === userName
  })
  const approvedLoads = allLoads.filter(function(el){
    return el.status === 'approved'
  }).length
  const onRoadLoads = allLoads.filter(function(el){
    return el.status === 'onroad'
  }).length
 
  const deliveredLoads = allLoads.filter(function(el){
    return el.status === 'delivered'
  }).length
  const canceledLoads = allLoads.filter(function(el){
    return el.status === 'canceled'
  }).length
 
  const dataArray = [
    ["Task", "statistics"],
    ["Ճանապարհին", onRoadLoads],
    ["Չեղարկված", canceledLoads],
    ["Հաստատված", approvedLoads],
    ["Բեռնաթափված", deliveredLoads]
  ];
  const [value, onChange] = useState(new Date());
  return (
<div className='content home_page'>
    <div className="loadsInfo">
        <div className="loadsInfoItem">
          <span className='loadIcon'><i className="fa fa-solid fa-list-check"></i></span> Բեռների քանակ
          <span className='count'>{allLoads.length}</span>
          </div>
        <div className="loadsInfoItem">
          <span className='loadIcon'><i className="fa fa-solid fa-check-double"></i></span> Հաստատված
          <span className='count'>{approvedLoads}</span>
          </div>
        <div className="loadsInfoItem">
          <span className='loadIcon'><i className="fa fa-duotone fa-road"></i></span>Ճանապարհին
          <span className='count'>{onRoadLoads}</span>
          </div>
        <div className="loadsInfoItem">
          <span className='loadIcon'><i className="fa fa-duotone fa-truck-ramp-box"></i></span> Բեռնաթափված
          <span className='count'>{deliveredLoads}</span>
          </div>
        <div className="loadsInfoItem">
          <span className='loadIcon'><i className="fa fa-solid fa-ban"></i></span> Չեղարկված
          <span className='count'>{canceledLoads}</span>
          </div>
      </div>
      <div className="statistics">
        {
         (approvedLoads || onRoadLoads || deliveredLoads || canceledLoads)?
          <Chart className='chart'
            chartType="PieChart"
            data={dataArray}
            height={"400px"}
            style={{
              width : '500px',
              maxWidth : '100%'
            }}
              />
                      :
                      <div className='isChart'>
                        <AnnouncementIcon fontSize='large'/>
                        <p>Գրաֆիկը անհասանելի է, քանի որ Դուք դեռ չունեք բեռներ:</p>
                        </div>
        }
      
        <div className='calendar'>
        <Calendar
         onChange={onChange} 
         value={value} />
        <div className="calendar_body"></div>
        </div>
      </div>
    </div>
  )
}

export default Home