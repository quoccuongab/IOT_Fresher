import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React, { useState } from 'react';
import InfoBox from '../infoBox/index';
import './style.scss';
import MouseTooltip from 'react-sticky-mouse-tooltip';


function Map(props) {
    const [isShow, setIsShow] = useState(true);


    const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);
    function Trigger(e) {
        setIsMouseTooltipVisible(true)
    }
    const onMouseLeaves = (e) => {
        setIsMouseTooltipVisible(false)

    }
    return (
        <div className='map'
            onMouseOver={Trigger}
            onMouseLeave={onMouseLeaves} >
            {isShow && <InfoBox


            />}
            <Button
                type="primary"
                onClick={() => setIsShow(!isShow)}
                className="button-show">
                {isShow ? <CaretLeftOutlined style={{ marginLeft: '0' }} /> : <CaretRightOutlined style={{ marginLeft: '0' }} />}
            </Button>
            <MouseTooltip

                visible={isMouseTooltipVisible}
                offsetX={15}
                offsetY={10}
                style={{ color: 'red', height: ' 200px', width: '300px', backgroundColor: 'red' }}
            >
            </MouseTooltip>

        </div >
    );
}

export default Map;