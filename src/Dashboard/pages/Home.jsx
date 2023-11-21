import React, { useContext, useState } from 'react'
import { ContextValue } from '../../Context/Context'
import { Chart } from "react-google-charts";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AdminHome from '../../components/AdminHome';


const Home = () => {
  const { data } = useContext(ContextValue)
  let userName = localStorage.getItem('userName')

  const allLoads = data.filter(function (el) {
    return el.owner === userName
  })
  const approvedLoads = allLoads.filter(function (el) {
    return el.status === 'approved'
  }).length
  const onRoadLoads = allLoads.filter(function (el) {
    return el.status === 'onroad'
  }).length

  const deliveredLoads = allLoads.filter(function (el) {
    return el.status === 'delivered'
  }).length
  const canceledLoads = allLoads.filter(function (el) {
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
      <AdminHome />
    </div>
  )
}

export default Home