import styled from "styled-components";
import React from "react";
import moment from 'moment';
import {Button} from '@material-ui/core';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Legend
} from "recharts";

const GraphDiv = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #003972;
  color: #ffffff;
`;

const TextDiv = styled.div` 
    text-align: left;
    padding-left: 4em;
    & h1 {
        font-size: 4em;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    & p {
        margin-top: 0;
        font-size: 1.5em;
    }
`

const VideoDiv = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
`

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 5em;
`

const data = [
    { x: 1, y: 1, w: 1, f: 1, o: 1, z: 0, time: "1503617297689", date: "2021-06-17 14:24:36"},
    { x: 2, y: 2, w: 1, f: 3, o: 2, z: 1, time: "1503616962277", date: "2021-06-18 14:24:36"},
    { x: 3, y: 1, w: 2, f: 2, o: 2, z: 0, time: "1503616882654", date: "2021-06-19 14:24:36"},
    { x: 4, y: 1, w: 2, f: 1, o: 1, z: 1, time: "1503613184594", date: "2021-06-20 14:24:36"},
    { x: 5, y: 2, w: 1, f: 0, o: 2, z: 1, time: "1503611308914", date: "2021-06-21 14:24:36"},
    { x: 6, y: 1, w: 3, f: 1, o: 1, z: 0, time: "1503611408914", date: "2021-06-22 14:24:36"},
    { x: 7, y: 1, w: 1, f: 3, o: 1, z: 1, time: "1503613184594", date: "2021-06-23 14:24:36"},
    { x: 8, y: 2, w: 2, f: 1, o: 2, z: 1, time: "1503611308914", date: "2021-06-24 14:24:36"},
    { x: 9, y: 1, w: 0, f: 2, o: 1, z: 0, time: "1503611408914", date: "2021-06-25 14:24:36"},
  ];
  
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];  


const test_date = "2015-08-17 14:24:36";
const test_time = new Date(test_date).getTime();


const xTickFormatter = (date) => {
    const time = new Date(date).getTime();
    return moment(new Date(time)).format("MM/DD");
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    var info = [];
    for (var i = 0; i < payload.length; i++) {
        info.push(<p style={{color: "black"}}>{`${payload[i].name} : ${payload[i].value}`}</p>);
    } 
    return (
      <div style={{backgroundColor: '#f1f1f1'}}>
        <p style={{color: "black"}}>{`Date: ${moment(new Date(label)).format("MMMM DD YYYY")}`}</p>
        <p style={{color: "black"}}>{`Time: ${moment(new Date(label)).format("h:mma")}`}</p>
        {info}
      </div>
    );
  }

  return null;
};

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value } = props;
  console.log(payload);
  if (payload.z == 0) {
    return (
      <svg
      x={cx - 10} y={cy - 10} width={40} height={40}
      fill={stroke}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
    >
      <path d="M330.667 0c-37.042 0-71.875 14.427-98.042 40.615l-192 192C14.437 258.812 0 293.635 0 330.667c0 76.458 62.208 138.667 138.667 138.667 37.063 0 71.875-14.427 98.042-40.615l192-191.99c26.208-26.198 40.625-61.021 40.625-98.063C469.333 62.208 407.125 0 330.667 0zM149.875 213.875l-64 63.99C71.771 291.969 64 310.729 64 330.667a10.66 10.66 0 01-10.667 10.667 10.66 10.66 0 01-10.667-10.667c0-25.646 9.979-49.75 28.125-67.885l64-63.99c4.167-4.167 10.917-4.167 15.083 0 4.168 4.166 4.168 10.916.001 15.083zm248.667-7.313l-88.457 88.447-135.753-135.768 88.46-88.46c18.125-18.135 42.229-28.115 67.875-28.115 52.938 0 96 43.063 96 96 0 25.646-9.979 49.761-28.125 67.896z" />
    </svg>
    );
  }

  return null;
};

const Graph = () => {

    const [faceShow, setFaceShow] = React.useState(false);
    const [motorShow, setMotorShow] = React.useState(true);
    const [speechShow, setSpeechShow] = React.useState(false);
    const [overallShow, setOverallShow] = React.useState(false);

  return (
    <GraphDiv >
        <TextDiv>
            <h1>Graph</h1>
            <p>Watch this video for information on how to complete the study tasks.</p>
        </TextDiv>
        <VideoDiv>
        
        <ButtonDiv>

        <Button variant="contained"
              size="large"
              style={{marginBottom: '0', backgroundColor: motorShow ? "#003972" : "#948e8c", color: "white", borderRadius: "0" }}
              onClick={() => {setMotorShow(!motorShow); console.log(motorShow)}}
              >
                  MOTOR
        </Button>
        <Button variant="contained"
              size="large"
              style={{marginBottom: '0', backgroundColor: faceShow ? "#003972" : "#948e8c", color: "white", borderRadius: "0" }}
              onClick={() => {setFaceShow(!faceShow); console.log(faceShow)}}
              >
                  FACE
        </Button>
        <Button variant="contained"
              size="large"
              style={{marginBottom: '0', backgroundColor: speechShow ? "#003972" : "#948e8c", color: "white", borderRadius: "0" }}
              onClick={() => {setSpeechShow(!speechShow); console.log(speechShow)}}
              >
                  SPEECH
            </Button>

            <Button variant="contained"
              size="large"
              style={{marginBottom: '0', backgroundColor: overallShow ? "#003972" : "#948e8c", color: "white", borderRadius: "0" }}
              onClick={() => {setOverallShow(!overallShow); console.log(overallShow)}}
              >
                  OVERALL
            </Button>

        </ButtonDiv>
        <LineChart
      width={800}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }
    }
    >
      <CartesianGrid />
      <XAxis
        dataKey = 'date'
        //domain = {['auto', 'auto']}
        name = 'Time'
        tickFormatter = {xTickFormatter}
        type = 'category'
        interval={0}
        allowDataOverflow
      />
      <YAxis type="number" dataKey="y" name="PD Rating" unit="" domain={[0, 4]}/>
      <Tooltip content={<CustomTooltip />}/>
      <Legend />
      {motorShow ? <Line name="motor" dataKey="y" stroke="#8884d8" strokeWidth={4} dot={<CustomizedDot />}/> : null}
      {speechShow ? <Line name="speech" dataKey="w" stroke="red" strokeWidth={4} dot={<CustomizedDot />}/> : null}
      {faceShow ? <Line name="face" dataKey="f" stroke="#003972" strokeWidth={4} dot={<CustomizedDot />}/> : null}
      {overallShow ? <Line name="overall" dataKey="o" stroke="black" strokeWidth={4} dot={<CustomizedDot />}/> : null}
      <Brush 
      dataKey="x"
      height={30}
      stroke="#8884d8" />
    </LineChart>
        <h1> {moment(new Date(test_time)).format("MMMM")}</h1>
        </VideoDiv>
    </GraphDiv>
  );
};

export default Graph;




/*import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  ZoomAndPan,
  ScatterSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { scaleTime } from 'd3-scale';
import { ArgumentScale, ValueScale } from '@devexpress/dx-react-chart';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {
    symbol,
    symbolDiamond,
  } from 'd3-shape';

const Point = (type, styles) => (props) => {
    const {
      arg, val, color,
    } = props;
    return (
      <path
        fill={color}
        transform={`translate(${arg} ${val})`}
        d={symbol().size([10 ** 2]).type(type)()}
        style={styles}
      />
    );
  };

  const DiamondPoint = Point(symbolDiamond, {
    stroke: 'white',
    strokeWidth: '1px',
  });

const generateData = (n) => {
  const ret = [];
  let y = 0;
  const dt = new Date(2017, 2, 10);
  for (let i = 0; i < n; i += 1) {
    dt.setDate(dt.getDate() + 1);
    y = Math.round(Math.random() * 4);
    ret.push({ x: new Date(dt), y });
  }
  return ret;
};
const data = generateData(100);

const getMode = (zoom, pan) => {
  if (zoom && pan) {
    return 'both';
  }
  if (zoom && !pan) {
    return 'zoom';
  }
  if (!zoom && pan) {
    return 'pan';
  }
  return 'none';
};

const chartRootStyle = { marginRight: '20px' };

const ChartRoot = props => (
  <Chart.Root {...props} style={chartRootStyle} />
);

const LineWithDiamondPoint = props => (
    <React.Fragment>
      <LineSeries.Path {...props} />
      <ScatterSeries.Path {...props} pointComponent={DiamondPoint} />
    </React.Fragment>
  );
  
const modifyDomain = domain => [0, 4];
const scale = () => scaleLog().base(2);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
      zoomArgument: true,
      panArgument: true,
      zoomValue: false,
      panValue: false,
    };
  }



  render() {
    const {
      data: chartData, zoomValue, panValue, zoomArgument, panArgument,
    } = this.state;
    return (
      <Paper>
        <Chart data={chartData} rootComponent={ChartRoot}>
          <ArgumentScale factory={scaleTime} />
          <ArgumentAxis />
          <ValueAxis />
          <ValueScale modifyDomain={modifyDomain} factory={scale} />
          <LineSeries valueField="y" argumentField="x" seriesComponent={LineWithDiamondPoint}/>
          <ZoomAndPan
            interactionWithArguments={getMode(zoomArgument, panArgument)}
            interactionWihValues={getMode(zoomValue, panValue)}
          />
        </Chart>
      </Paper>
    );
  }
}
*/


/*
import styled from "styled-components";
import React from "react";
import moment from 'moment';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Brush,
} from "recharts";

const GraphDiv = styled.div`
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #003972;
  color: #ffffff;
`;

const TextDiv = styled.div` 
    text-align: left;
    padding-left: 4em;
    & h1 {
        font-size: 4em;
        padding-bottom: 0;
        margin-bottom: 0;
    }
    & p {
        margin-top: 0;
        font-size: 1.5em;
    }
`

const VideoDiv = styled.div`
    display: flex;
    background-color: #C4C4C4;
`

const data = [
    { x: 1, y: 1, z: 0, time: "1503617297689", date: "2021-06-17 14:24:36"},
    { x: 2, y: 2, z: 1, time: "1503616962277", date: "2021-06-18 14:24:36"},
    { x: 3, y: 1, z: 0, time: "1503616882654", date: "2021-06-19 14:24:36"},
    { x: 4, y: 1, z: 1, time: "1503613184594", date: "2021-06-20 14:24:36"},
    { x: 5, y: 2, z: 1, time: "1503611308914", date: "2021-06-21 14:24:36"},
    { x: 6, y: 1, z: 0, time: "1503611408914", date: "2021-06-22 14:24:36"},
    { x: 7, y: 1, z: 1, time: "1503613184594", date: "2021-06-23 14:24:36"},
    { x: 8, y: 2, z: 1, time: "1503611308914", date: "2021-06-24 14:24:36"},
    { x: 9, y: 1, z: 0, time: "1503611408914", date: "2021-06-25 14:24:36"},
  ];
  
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];  

const test_date = "2015-08-17 14:24:36";
const test_time = new Date(test_date).getTime();


const xTickFormatter = (date) => {
    const time = new Date(date).getTime();
    return moment(new Date(time)).format("MM/DD");
}

const Graph = () => {
  return (
    <GraphDiv>
        <TextDiv>
            <h1>Graph</h1>
            <p>Watch this video for information on how to complete the study tasks.</p>
        </TextDiv>
        <VideoDiv>
        
        <ScatterChart
      width={800}
      height={400}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid />
      <XAxis
        dataKey = {'date'}
        //domain = {['auto', 'auto']}
        name = 'Time'
        tickFormatter = {xTickFormatter}
        type = 'category'
        interval={0}
        allowDataOverflow
      />
      <YAxis type="number" dataKey="y" name="PD Rating" unit="" domain={[0, 4]}/>
      <Tooltip />
      <Scatter name="A school" data={data} fill="#8884d8"> 
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[data[index].z % COLORS.length]} />
        ))}
      </Scatter>
      <Brush dataKey="x" startIndex={1} endIndex={4} height={20}/>
    </ScatterChart>
        <h1> {moment(new Date(test_time)).format("MMMM")}</h1>
        </VideoDiv>
    </GraphDiv>
  );
};

export default Graph;


//<XAxis type="number" dataKey="x" name="stature" unit="cm" />

*/