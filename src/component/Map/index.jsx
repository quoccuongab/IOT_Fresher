import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React, { useState } from 'react';
import InfoBox from '../infoBox/index';
import './style.scss';
import MouseTooltip from 'react-sticky-mouse-tooltip';


function Map(props) {
    const text = <span>prompt text</span>;

    const buttonWidth = 70;
    const [isShown, setIsShown] = useState(false);
    const [isMouseTooltipVisible, setIsMouseTooltipVisible] = useState(false);
    function changeBackground(e) {
        setIsMouseTooltipVisible(true)
    }

    const onMouseLeaves = (e) => {
        setIsMouseTooltipVisible(false)

    }

    return (
        <div className="map" onMouseOver={changeBackground} onMouseLeave={onMouseLeaves}>

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