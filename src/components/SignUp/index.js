import styled from "styled-components";
import { useHistory } from "react-router-dom";
import React, {useContext} from 'react';
import AppContext from '../../components/AppContext';

const SignUpDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  margin-top: 2em;
  display: flex;
  justify-items: center;
  align-items: center;
  width: 80%;
  height: 70vh;
  border-radius: 6px;
  background-color: #ffffff;
  color: #000000;
`;

const CardContent = styled.div`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  text-align: center;
  align-items: center;

  & h2 {
    padding-top: 0;
    margin-top: 0;
    font-size: 2em;
  }

  & p {
    padding-left: 2em;
    padding-right: 2em;
    font-size: 1.5em;
  }

  & button {
    margin-top: 2em;
    color: #ffffff;
    padding-top: 2em;
    padding-bottom: 2em;
    padding-right: 3em;
    padding-left: 3em;
    border: none;
    border-radius: 40px;
    background-color: #003972;

    & p {
      font-size: 2.5em;
      padding: 0;
      margin: 0;
    }
  }

  & button:hover {
    background-color: #002D5A;
  }
`;

const Divider = styled.div`
  border-left: 2px solid #000000;
  height: 80%;
`

const SignUp = () => {

  const {isPatient, setIsPatient} = useContext(AppContext);

  let history = useHistory(); 

  return (
    <SignUpDiv>
      <TextDiv>
        <h1>Sign In</h1>
      </TextDiv>
      <Content>
        <Card>
          <CardContent>
            <h2>Patients</h2>
            <svg
              width="225"
              height="217"
              viewBox="0 0 225 217"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M111.685 116.926C111.918 116.926 112.151 116.926 112.43 116.926C112.523 116.926 112.616 116.926 112.71 116.926C112.849 116.926 113.036 116.926 113.176 116.926C126.827 116.701 137.87 112.072 146.024 103.22C163.963 83.7173 160.981 50.2843 160.654 47.0938C159.49 23.1425 147.748 11.6836 138.057 6.33609C130.835 2.33672 122.401 0.179747 112.989 0H112.663C112.616 0 112.523 0 112.477 0H112.197C107.025 0 96.8679 0.808863 87.1298 6.15635C77.3452 11.5038 65.4172 22.9627 64.2524 47.0938C63.9262 50.2843 60.9443 83.7173 78.8828 103.22C86.99 112.072 98.0327 116.701 111.685 116.926ZM76.6929 48.2172C76.6929 48.0824 76.7395 47.9476 76.7395 47.8577C78.277 15.638 101.993 12.1779 112.151 12.1779H112.337C112.43 12.1779 112.57 12.1779 112.71 12.1779C125.29 12.4475 146.676 17.3906 148.121 47.8577C148.121 47.9925 148.121 48.1274 148.167 48.2172C148.214 48.5318 151.475 79.0888 136.659 95.1762C130.788 101.557 122.96 104.703 112.663 104.793C112.57 104.793 112.523 104.793 112.43 104.793C112.337 104.793 112.29 104.793 112.197 104.793C101.947 104.703 94.0722 101.557 88.2481 95.1762C73.4779 79.1787 76.6463 48.4869 76.6929 48.2172Z"
                fill="black"
              />
              <path
                d="M208.18 172.378C208.18 172.333 208.18 172.288 208.18 172.243C208.18 171.883 208.133 171.524 208.133 171.119C207.854 162.222 207.248 141.416 187.026 134.766C186.887 134.721 186.7 134.676 186.56 134.631C165.547 129.463 148.074 117.779 147.888 117.645C145.046 115.712 141.132 116.386 139.128 119.128C137.125 121.869 137.824 125.643 140.666 127.576C141.458 128.115 160.002 140.562 183.206 146.314C194.062 150.044 195.273 161.233 195.6 171.479C195.6 171.883 195.6 172.243 195.646 172.602C195.693 176.647 195.413 182.893 194.668 186.488C187.12 190.622 157.533 204.912 112.523 204.912C67.7004 204.912 37.9272 190.577 30.3324 186.443C29.5869 182.848 29.2608 176.602 29.354 172.557C29.354 172.198 29.4005 171.838 29.4005 171.434C29.7267 161.188 30.9381 149.999 41.7944 146.269C64.998 140.517 83.5422 128.025 84.3343 127.531C87.1765 125.598 87.8754 121.824 85.8719 119.083C83.8683 116.341 79.9545 115.667 77.1123 117.6C76.9259 117.735 59.5465 129.418 38.4397 134.586C38.2533 134.631 38.1135 134.676 37.9737 134.721C17.7522 141.416 17.1465 162.222 16.8669 171.075C16.8669 171.479 16.8669 171.838 16.8203 172.198C16.8203 172.243 16.8203 172.288 16.8203 172.333C16.7737 174.669 16.7271 186.668 19.1966 192.689C19.6625 193.858 20.5012 194.846 21.6194 195.52C23.0172 196.419 56.518 217 112.57 217C168.622 217 202.123 196.374 203.52 195.52C204.592 194.846 205.477 193.858 205.943 192.689C208.273 186.713 208.226 174.714 208.18 172.378Z"
                fill="black"
              />
            </svg>
            <p>Track your diagnostic data over time.</p>
            <button onClick={() => {setIsPatient(true); console.log(isPatient); history.push('/log-in');}}><p>I am a Patient</p></button>
          </CardContent>
          <Divider/>
          <CardContent>
            <h2>Providers</h2>
            <svg
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M207.421 208.735L197.689 151.757C196.64 145.618 192.285 140.687 186.322 138.888L160.072 130.967C159.528 124.551 156.897 118.497 152.519 113.705C149.016 109.872 144.611 107.081 139.755 105.541C140.586 104.619 141.357 103.7 142.064 102.801C148.306 94.8617 151.648 86.115 152.499 80.1462H154.524C159.791 80.1462 164.076 75.8613 164.076 70.5938V65.6971C164.076 62.1818 162.099 58.9965 159.125 57.3435V45.5684C159.125 43.789 157.683 42.3466 155.903 42.3466C154.124 42.3466 152.682 43.7886 152.682 45.5684V58.7873C151.427 59.0051 149.93 59.3815 148.399 60.0265C148.242 60.0836 148.089 60.1498 147.945 60.2293C147.599 60.387 147.253 60.5533 146.908 60.7406V34.778C146.908 27.6053 141.073 21.7701 133.9 21.7701H125.008C121.94 21.7701 118.944 22.8387 116.57 24.7801L115.697 25.4934C114.094 26.8039 112.071 27.5258 110.001 27.5258C107.93 27.5258 105.907 26.8039 104.304 25.4934L103.432 24.7801C101.057 22.8392 98.061 21.7701 94.9939 21.7701H86.1006C78.9279 21.7701 73.0927 27.6053 73.0927 34.778V60.7406C72.7477 60.5533 72.4013 60.387 72.0554 60.2293C71.9111 60.1498 71.7589 60.0836 71.6021 60.0265C70.0707 59.3815 68.5732 59.0051 67.319 58.7873V25.3623C67.319 14.9304 75.8062 6.44316 86.2381 6.44316H133.762C144.194 6.44316 152.681 14.9304 152.681 25.3623V30.4266C152.681 32.2059 154.124 33.6484 155.902 33.6484C157.681 33.6484 159.124 32.2064 159.124 30.4266V25.3623C159.124 11.3777 147.747 0 133.762 0H86.2381C72.2531 0 60.8758 11.3777 60.8758 25.3623V57.3439C57.902 58.997 55.9245 62.1818 55.9245 65.6975V70.5942C55.9245 75.8618 60.2098 80.1466 65.4769 80.1466H67.502C68.3524 86.1154 71.6949 94.8621 77.9374 102.801C78.6434 103.699 79.4134 104.618 80.2436 105.539C69.0803 109.085 60.9394 119.121 59.9292 130.967L33.6779 138.888C27.7151 140.687 23.3598 145.618 22.3114 151.757L18.3591 174.895C18.0596 176.649 19.2387 178.313 20.9922 178.613C22.7454 178.913 24.4104 177.734 24.7103 175.98L28.6626 152.842C29.2968 149.127 31.9316 146.144 35.5389 145.056L59.8184 137.731V144.103C54.2531 145.128 49.5175 148.951 47.5671 154.248C47.0493 155.653 46.7275 157.126 46.6106 158.623L44.2641 188.742C44.0871 191.01 44.8721 193.27 46.4168 194.939C47.9616 196.609 50.1525 197.567 52.4277 197.567H56.4445C58.2238 197.567 59.6663 196.125 59.6663 194.345C59.6663 192.565 58.2238 191.124 56.4445 191.124H52.4277C51.9426 191.124 51.476 190.92 51.1464 190.563C50.8173 190.208 50.6501 189.726 50.6879 189.243L53.0345 159.124C53.1054 158.217 53.3 157.325 53.6137 156.474C54.9706 152.789 58.635 150.294 62.7329 150.265L63.2636 150.261C63.2885 150.261 63.313 150.261 63.3375 150.261C67.3203 150.261 70.8459 152.519 72.333 156.03C72.7502 157.015 73.0037 158.055 73.0871 159.124L75.4345 189.243C75.4719 189.726 75.3047 190.208 74.9756 190.564C74.6464 190.92 74.1794 191.124 73.6943 191.124H69.6775C67.8982 191.124 66.4557 192.566 66.4557 194.345C66.4557 196.124 67.8982 197.567 69.6775 197.567H73.6943C75.9695 197.567 78.1609 196.609 79.7052 194.939C81.2503 193.269 82.0354 191.01 81.8583 188.742L79.5109 158.623C79.3734 156.86 78.9545 155.142 78.2657 153.516C76.1435 148.507 71.6055 145.025 66.2611 144.082V135.787L77.3359 132.445C78.3435 134.567 80.3402 139.153 84.2955 149.039C88.2817 159.014 93.2365 171.799 97.9884 184.229C98.0223 184.333 98.0614 184.435 98.1052 184.534C101.276 192.832 104.352 200.959 106.983 207.97C107.455 209.227 108.657 210.06 110 210.06C111.343 210.06 112.544 209.227 113.016 207.97C115.647 200.959 118.723 192.832 121.894 184.534C121.939 184.435 121.977 184.333 122.011 184.229C126.76 171.807 131.712 159.029 135.696 149.058C139.657 139.159 141.655 134.569 142.663 132.445L153.738 135.787V154.816C146.065 156.306 140.252 163.074 140.252 171.177C140.252 180.368 147.73 187.846 156.922 187.846C166.114 187.846 173.592 180.369 173.592 171.177C173.592 163.1 167.818 156.349 160.181 154.829V137.731L184.461 145.057C188.068 146.145 190.703 149.128 191.338 152.842L201.07 209.82C201.232 210.765 200.98 211.689 200.362 212.421C199.744 213.153 198.876 213.557 197.917 213.557H22.0828C21.1242 213.557 20.2562 213.154 19.6379 212.421C19.02 211.689 18.7682 210.765 18.9297 209.82L22.1417 191.016C22.4411 189.262 21.2621 187.598 19.5085 187.298C17.7554 186.997 16.0904 188.178 15.7904 189.931L12.5785 208.735C12.0994 211.542 12.8776 214.4 14.7132 216.576C16.5497 218.752 19.2357 220 22.0828 220H197.917C200.764 220 203.45 218.752 205.286 216.576C207.122 214.399 207.9 211.542 207.421 208.735ZM152.72 65.3507C154.436 64.9228 155.814 64.9305 155.83 64.9309C156.385 64.9382 156.925 64.8085 157.404 64.5571C157.548 64.9142 157.632 65.2979 157.632 65.6975V70.5942C157.632 72.3087 156.238 73.7034 154.523 73.7034H152.72V65.3507ZM67.2799 73.7034H65.4765C63.762 73.7034 62.3673 72.3087 62.3673 70.5942V65.6975C62.3673 65.2979 62.4524 64.9142 62.5954 64.5575C63.0745 64.8089 63.6142 64.9387 64.1698 64.9309C64.1943 64.9352 65.5684 64.9275 67.2799 65.3525V73.7034ZM73.7231 77.3158V68.8518C74.6993 69.1445 75.7671 69.1045 76.7528 68.6933C78.4436 67.9877 79.5359 66.3493 79.5359 64.5184V34.778C79.5359 31.1584 82.4809 28.2133 86.1006 28.2133H94.993C96.5777 28.2133 98.1259 28.7654 99.3526 29.7683L100.225 30.4816C102.975 32.7306 106.447 33.9685 110 33.9685C113.553 33.9685 117.024 32.7302 119.775 30.4816L120.647 29.7683C121.873 28.7654 123.422 28.2133 125.007 28.2133H133.899C137.519 28.2133 140.464 31.1584 140.464 34.778V64.5189C140.464 66.3493 141.556 67.9882 143.247 68.6937C143.812 68.9292 144.403 69.0435 144.989 69.0435C145.426 69.0435 145.859 68.9795 146.277 68.8548V77.3158C146.277 82.0196 143.025 91.1539 136.998 98.8187C135.002 101.358 132.436 104.085 129.276 106.469C129.176 106.536 129.08 106.609 128.989 106.686C124.094 110.305 117.8 113.077 110 113.077C102.199 113.077 95.9057 110.305 91.0107 106.686C90.9191 106.609 90.8238 106.536 90.7241 106.47C87.5646 104.085 84.9985 101.358 83.0017 98.8187C76.9754 91.1543 73.7231 82.0196 73.7231 77.3158ZM131.106 129.366L110 145.142L88.8936 129.366C90.9866 126.706 92.1592 123.291 92.1592 120.244V115.051C97.1225 117.72 103.045 119.521 110 119.521C116.955 119.521 122.878 117.72 127.84 115.051V120.244C127.84 123.291 129.013 126.706 131.106 129.366ZM83.5169 125.77C81.7964 125.115 79.8891 125.007 78.0848 125.497C78.0057 125.515 77.9284 125.536 77.8532 125.559L66.723 128.917C68.6055 119.661 76.1216 112.293 85.7161 110.866V120.244C85.7161 122.265 84.8137 124.355 83.5169 125.77ZM92.2606 151.632C92.2546 151.617 92.2486 151.602 92.243 151.587C92.0797 151.174 91.9186 150.767 91.7588 150.364C91.73 150.291 91.7012 150.219 91.6724 150.147C91.516 149.753 91.3609 149.362 91.2079 148.977C91.1972 148.95 91.1864 148.923 91.1757 148.896C90.6983 147.696 90.2381 146.544 89.7955 145.441C89.7633 145.362 89.7311 145.28 89.6988 145.201C89.5716 144.885 89.4466 144.573 89.3224 144.265C89.2769 144.152 89.2318 144.041 89.1866 143.929C89.0663 143.631 88.9469 143.334 88.8291 143.044C88.7939 142.957 88.7595 142.873 88.7247 142.787C88.5112 142.26 88.3023 141.747 88.0987 141.246C88.0437 141.111 87.9874 140.973 87.9328 140.839C87.8529 140.644 87.7751 140.454 87.6969 140.263C87.6127 140.057 87.5285 139.852 87.446 139.651C87.415 139.576 87.3828 139.496 87.3519 139.422C87.327 139.361 87.3042 139.306 87.2797 139.246C86.9076 138.342 86.5539 137.49 86.2184 136.689C86.2158 136.682 86.2128 136.676 86.2102 136.669C86.0314 136.243 85.8566 135.826 85.6886 135.429C85.6013 135.223 85.5154 135.021 85.4312 134.822L103.583 148.389L95.9985 151.611C95.9852 151.617 95.9714 151.623 95.9581 151.629L92.7913 152.974C92.6117 152.52 92.4359 152.075 92.2606 151.632ZM99.9477 171.358C99.3114 169.707 98.6703 168.046 98.0279 166.387C97.0233 163.792 96.0638 161.325 95.1455 158.974L96.3478 158.464L101.26 164.174L99.9477 171.358ZM110.062 197.542C109.97 197.351 109.86 197.17 109.733 197.001C108.277 193.154 106.429 188.285 104.384 182.928L107.392 166.46H112.608L115.615 182.928C113.473 188.54 111.548 193.615 110.062 197.542ZM113.816 160.017H106.184L102.572 155.819L110 152.664L117.427 155.819L113.816 160.017ZM121.972 166.387C121.329 168.046 120.688 169.707 120.052 171.358L118.74 164.173L123.652 158.463L124.854 158.974C123.936 161.324 122.976 163.792 121.972 166.387ZM134.312 135.429C134.152 135.805 133.986 136.2 133.817 136.603C133.795 136.656 133.773 136.709 133.751 136.761C133.584 137.161 133.414 137.569 133.238 137.994C133.226 138.022 133.214 138.052 133.203 138.08C133.05 138.447 132.894 138.825 132.736 139.21C132.706 139.282 132.678 139.349 132.649 139.422C132.613 139.508 132.576 139.599 132.54 139.687C132.469 139.859 132.398 140.034 132.326 140.209C132.237 140.425 132.149 140.641 132.058 140.862C132.029 140.932 132 141.006 131.971 141.077C131.746 141.626 131.516 142.193 131.281 142.774C131.244 142.866 131.207 142.955 131.17 143.047C131.054 143.335 130.935 143.628 130.816 143.923C130.77 144.039 130.723 144.154 130.676 144.271C130.553 144.576 130.429 144.884 130.303 145.197C130.268 145.284 130.233 145.374 130.197 145.461C129.76 146.549 129.307 147.684 128.836 148.867C128.821 148.906 128.806 148.944 128.79 148.983C128.638 149.365 128.484 149.754 128.329 150.145C128.3 150.218 128.271 150.291 128.241 150.365C128.081 150.77 127.919 151.179 127.755 151.594C127.752 151.602 127.749 151.61 127.745 151.617C127.568 152.065 127.391 152.515 127.209 152.975L124.039 151.628C124.028 151.623 124.017 151.619 124.006 151.614L116.417 148.39L134.569 134.823C134.484 135.021 134.398 135.223 134.312 135.429ZM142.146 125.559C142.146 125.559 142.145 125.559 142.145 125.559C142.142 125.558 142.139 125.557 142.137 125.556C140.267 124.995 138.274 125.088 136.483 125.77C135.186 124.355 134.284 122.265 134.284 120.244V110.862C143.939 112.285 151.432 119.583 153.29 128.921L142.146 125.559ZM167.149 171.177C167.149 176.816 162.561 181.403 156.922 181.403C151.283 181.403 146.696 176.816 146.696 171.177C146.696 165.538 151.283 160.95 156.922 160.95C162.561 160.95 167.149 165.538 167.149 171.177Z"
                fill="black"
              />
            </svg>
            <p>Keep track of patients over time.</p>
            <button onClick={() => {setIsPatient(false); console.log(isPatient); history.push('/log-in');}}><p>I am a Provider</p></button>
          </CardContent>
        </Card>
      </Content>
    </SignUpDiv>
  );
};

export default SignUp;
