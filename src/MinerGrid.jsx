import React from 'react';
import './MinerGrid.css';

const stateColors = {
  10: 'green',
  20: 'yellow',
  30: 'orange',
  40: 'pink',
  50: 'red',
  60: 'black',
};

const MinerGrid = ({ data }) => {
  const renderGrid = () => {
    const pdus = Array.from({ length: 9 }, (_, i) => i + 1);
    return pdus.map((pdu) => {
      const miners = data.filter((miner) => miner.pdu === pdu);
      return (
        <div className="pdu-group" key={pdu}>
          {miners.map((miner) => {
            const backgroundColor = stateColors[miner.s];
            if (!backgroundColor) {
              return null;
            }
            return (
              <div
                className="miner"
                key={miner.port}
                style={{ backgroundColor }}
                title={`PDU: ${miner.pdu}\nPort: ${miner.port}\nState: ${
                  miner.s
                }\nHashrate (5s): ${miner.TH5s || 'N/A'}\nHashrate (avg): ${
                  miner.THAvg || 'N/A'
                }\nTemp: ${miner.tB || 'N/A'}\nFreq: ${
                  miner.freq || 'N/A'
                }\nPower: ${miner.w || 'N/A'}`}
              >
                {miner.port}
              </div>
            );
          })}
        </div>
      );
    });
  };

  return <div className="miner-grid">{renderGrid()}</div>;
};

export default MinerGrid;
