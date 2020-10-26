import { Fragment } from 'react';
import { ChromePicker } from 'react-color';



const Create = () => {
   return (
      <Fragment>
         <style jsx>
            {`
               .container {
                  display: flex;
                  width: 100vw;
                  height: 100vh;
                  align-items: center;
                  justify-content: center;
               }
               .content-box {
                  position: relative;
                  width: 400px;
                  height: 400px;
               }
               .layer {
                  position: absolute;
                  width: 100%;
                  height: 0;
                  border-radius: 10px 10px 0 0;
                  cursor: pointer;
                  top: 0;
                  left: 0;
               }
               .ly-1 {
                  height: 100%;
                  background: #ddd;
                  border-radius: 10px;
                  z-index: 1;
               }
               .ly-2 {
                  height: 85%;
                  background: #ccc;
                  z-index: 2;
               }
               .ly-3 {
                  height: 67%;
                  background: #bbb;
                  z-index: 3;
               }
               .ly-4 {
                  height: 41%;
                  background: #aaa;
                  z-index: 4;
               }
               .picker {
                  position: absolute;
                  z-index: 100;
                  top: 100%;
                  left: 10px;
               }
            `}
         </style>
         <div className="container">
            <div className="content-box">
               <div className="layer ly-1"></div>
               <div className="layer ly-2"></div>
               <div className="layer ly-3"></div>
               <div className="layer ly-4"></div>
            </div>
            <ChromePicker className="picker" />
         </div>
      </Fragment>
   )
}


export default Create;
