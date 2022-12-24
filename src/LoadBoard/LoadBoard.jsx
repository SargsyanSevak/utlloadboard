import React, { useContext} from 'react';
import Header from '../Header/Header';
import LoadList from '../LoadList/LoadList';
import { ContextValue } from '../Context/Context';
import "../index.css"
import Filter from '../Filter/Filter';
import Skeleton_UI from '../Skeleton/Skeleton';


function LoadBoard() {
  
    const {data,setData} = useContext(ContextValue)
      return (
        <div className="App">
          <Header 
          loads={data} setLoads={setData}
          />
          <Filter/>
          {!data.length ? <Skeleton_UI/> : <LoadList 
          loads={data}
          />}
          
        </div>
      );
    }
    
    export default LoadBoard;