import { useState } from 'react';
import './App.scss';
import Map from './component/Map';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import InfoBox from './component/infoBox';

function App() {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className="App">
      {isShow && <InfoBox />}
      <Button
        type="primary"
        onClick={() => setIsShow(!isShow)}
        className="button-show">
        {isShow ? <CaretLeftOutlined style={{ marginLeft: '0' }} /> : <CaretRightOutlined style={{ marginLeft: '0' }} />}
      </Button>

    </div>
  );
}

export default App;
