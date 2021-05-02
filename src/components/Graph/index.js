import styled from "styled-components";
import React from "react";
import moment from "moment";
import { Button } from "@material-ui/core";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  Legend,
} from "recharts";

const GraphContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  padding-right: 3em;
  height: 82vh;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  & svg.recharts-surface tspan {
    font-size: 0.8rem !important;
    color: black !important;
    font-family: Hind, sans-serif;
  }

  & .recharts-legend-item-text {
    font-family: Hind, sans-serif;
  }
`;

const DateDiv = styled.div`
  width: 100%;
  margin-left: 12%;
  text-align: left;
  display: flex;
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10%;
  
  & button {
    margin-left: 1em;
  }

  & button p {
    padding: 0;
  }
`;

const data = [
  {
    x: 1,
    y: 1,
    w: 1,
    f: 1,
    o: 1,
    z: 0,
    time: "1503617297689",
    date: "2021-06-17 14:24:36",
  },
  {
    x: 2,
    y: 2,
    w: 1,
    f: 3,
    o: 2,
    z: 1,
    time: "1503616962277",
    date: "2021-06-18 14:24:36",
  },
  {
    x: 3,
    y: 1,
    w: 2,
    f: 2,
    o: 2,
    z: 0,
    time: "1503616882654",
    date: "2021-06-19 14:24:36",
  },
  {
    x: 4,
    y: 1,
    w: 2,
    f: 1,
    o: 1,
    z: 1,
    time: "1503613184594",
    date: "2021-06-20 14:24:36",
  },
  {
    x: 5,
    y: 2,
    w: 1,
    f: 0,
    o: 2,
    z: 1,
    time: "1503611308914",
    date: "2021-06-21 14:24:36",
  },
  {
    x: 6,
    y: 1,
    w: 3,
    f: 1,
    o: 1,
    z: 0,
    time: "1503611408914",
    date: "2021-06-22 14:24:36",
  },
  {
    x: 7,
    y: 1,
    w: 1,
    f: 3,
    o: 1,
    z: 1,
    time: "1503613184594",
    date: "2021-06-23 14:24:36",
  },
  {
    x: 8,
    y: 2,
    w: 2,
    f: 1,
    o: 2,
    z: 1,
    time: "1503611308914",
    date: "2021-06-24 14:24:36",
  },
  {
    x: 9,
    y: 1,
    w: 0,
    f: 2,
    o: 1,
    z: 0,
    time: "1503611408914",
    date: "2021-06-25 14:24:36",
  },
];

const test_date = "2021-06-25 14:24:36";
const test_time = new Date(test_date).getTime();

const xTickFormatter = (date) => {
  const time = new Date(date).getTime();
  return moment(new Date(time)).format("MM/DD");
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    var info = [];
    for (var i = 0; i < payload.length; i++) {
      info.push(
        <p
          style={{ color: "black" }}
        >{`${payload[i].name} : ${payload[i].value}`}</p>
      );
    }
    return (
      <div style={{ backgroundColor: "#f1f1f1", padding: "1em" }}>
        <p style={{ color: "black" }}>{`Date: ${moment(new Date(label)).format(
          "MMMM DD YYYY"
        )}`}</p>
        <p style={{ color: "black" }}>{`Time: ${moment(new Date(label)).format(
          "h:mma"
        )}`}</p>
        {info}
      </div>
    );
  }

  return null;
};

const CustomizedDot = (props) => {
  const { cx, cy, payload } = props;
  console.log(payload);
  if (payload.z === 0) {
    return (
      <svg
        x={cx - 10}
        y={cy - 10}
        width={50}
        height={50}
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
      >
        <path stroke="" d="M330.667 0c-37.042 0-71.875 14.427-98.042 40.615l-192 192C14.437 258.812 0 293.635 0 330.667c0 76.458 62.208 138.667 138.667 138.667 37.063 0 71.875-14.427 98.042-40.615l192-191.99c26.208-26.198 40.625-61.021 40.625-98.063C469.333 62.208 407.125 0 330.667 0zM149.875 213.875l-64 63.99C71.771 291.969 64 310.729 64 330.667a10.66 10.66 0 01-10.667 10.667 10.66 10.66 0 01-10.667-10.667c0-25.646 9.979-49.75 28.125-67.885l64-63.99c4.167-4.167 10.917-4.167 15.083 0 4.168 4.166 4.168 10.916.001 15.083zm248.667-7.313l-88.457 88.447-135.753-135.768 88.46-88.46c18.125-18.135 42.229-28.115 67.875-28.115 52.938 0 96 43.063 96 96 0 25.646-9.979 49.761-28.125 67.896z" />
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
    <GraphContainer>
      <DateDiv>
        <h1>{moment(new Date(test_time)).format("MMMM DD, YYYY")}</h1>
      </DateDiv>
      <ButtonDiv>
        <Button
          variant="contained"
          size="large"
          style={{
            marginBottom: "0",
            paddingTop: "0",
            paddingBottom: "0",
            backgroundColor: motorShow ? "#003972" : "#999393",
            color: "white",
            borderRadius: "22px",
          }}
          onClick={() => {
            setMotorShow(!motorShow);
            console.log(motorShow);
          }}
        >
          <p>MOTOR</p>
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{
            marginBottom: "0",
            backgroundColor: faceShow ? "#003972" : "#999393",
            color: "white",
            paddingTop: "0",
            paddingBottom: "0",
            paddingRight: "2em",
            paddingLeft: "2em",
            borderRadius: "22px",
          }}
          onClick={() => {
            setFaceShow(!faceShow);
            console.log(faceShow);
          }}
        >
          <p>FACE</p>
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{
            marginBottom: "0",
            paddingTop: "0",
            paddingBottom: "0",
            backgroundColor: speechShow ? "#003972" : "#999393",
            color: "white",
            borderRadius: "22px",
          }}
          onClick={() => {
            setSpeechShow(!speechShow);
            console.log(speechShow);
          }}
        >
          <p>SPEECH</p>
        </Button>
        <Button
          variant="contained"
          size="large"
          style={{
            marginBottom: "0",
            paddingTop: "0",
            paddingBottom: "0",
            backgroundColor: overallShow ? "#003972" : "#999393",
            color: "white",
            borderRadius: "22px",
          }}
          onClick={() => {
            setOverallShow(!overallShow);
            console.log(overallShow);
          }}
        >
          <p>OVERALL</p>
        </Button>
      </ButtonDiv>
      <LineChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20
        }}
      >
        <CartesianGrid />
        <XAxis
          dataKey="date"
          name="Time"
          tickFormatter={xTickFormatter}
          type="category"
          interval={0}
          allowDataOverflow
        />
        <YAxis
          type="number"
          dataKey="y"
          name="PD Rating"
          unit=""
          domain={[0, 4]}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {motorShow ? (
          <Line
            name="motor"
            dataKey="y"
            stroke="#003972"
            strokeWidth={3}
            dot={<CustomizedDot />}
          />
        ) : null}
        {speechShow ? (
          <Line
            name="speech"
            dataKey="w"
            stroke="#B2ACAB"
            strokeWidth={3}
            dot={<CustomizedDot />}
          />
        ) : null}
        {faceShow ? (
          <Line
            name="face"
            dataKey="f"
            stroke="#0071E2"
            strokeWidth={3}
            dot={<CustomizedDot />}
          />
        ) : null}
        {overallShow ? (
          <Line
            name="overall"
            dataKey="o"
            stroke="#676363"
            strokeWidth={3}
            dot={<CustomizedDot />}
          />
        ) : null}
        <Brush
          dataKey="x"
          height={30}
          stroke="#003972"
          fontFamily="Hind, san-serif"
        />
      </LineChart>
    </GraphContainer>
  );
};

export default Graph;
