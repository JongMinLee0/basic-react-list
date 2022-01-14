import React, { useEffect, useState } from 'react';
import { List, Detail } from './views/index';
import { Route } from 'react-router-dom';
import useFetch from "./helper/api";
import logo from './loading.gif';

const App = () => {
  const [list, setList] = useState([]);
  const {response, loading} = useFetch({
      url : "https://picsum.photos/v2/list",
      target : null
  });

  // 데이터 받아온 후 리스트 초기화
  useEffect(()=>{
      setList(response)
  }, [response]);

  return (
    <div className="App">
      {
        loading ? (
          <img src={logo} alt="loading..." />
        ) : (
          <>
            <Route exact path="/" render={()=><List list={list} setList={(data)=>setList([...data])} />} />
            <Route path="/detail/:findText/:id" render={()=><Detail list={list} />}/>
          </>
        )
      }
    </div>
  );
}

export default App;
