import React from 'react';
import homebottomimg from '../../../../static/images/DSM_flow_New.png';
function Bottom() {
    const texts = ['Storlytics leverages more than 20 years of battery energy storage projects development to simplify modeling BESSs', ' Input CSV format files for expected battery dispatch profile ',
        'Specify the number of battery modules, racks and inverters to match power and energy needed in provided Point of Interconnect (POI) profile using the "Sizing Assist Tool"', ' Simulate performance of specified battery energy storage system and plug and chug designs to reach optimal performance" ', ' Simulate performance of specified battery energy storage system and plug and chug designs to reach optimal performance" ', 'Create CSV files with 8760s (Hourly or sub-hourly) of important system parameters like power flow at battery, inverter and point of interconnect (POI)'];

    return (<div className=' '>
        <div className=' w-full  lg:flex lg:flex-row md:flex md:flex-col flex-wrap 2xl:p-40 2xl:pt-20 lg:p-20  md:p-10 sm:p-10  p-5  '>

            <div className=' lg:w-1/2 md:flex md:flex-col md:w-full sm:w-full sm:mt-10    '>

                <div className=' lg:mt-0 leading-10 '>

                    <h1 className='headingcolor z-10  text-left leading-10 font-semibold xl:text-4xl  2xl:text-6xl lg:text-4xl lg:mt-10 text-3xl mb-5  '> Energy Storage Systems Modeling Simplified</h1>
                    <div className='list-outside textcolor text-left z-10 leading-10 flow-root  '>   <p  className='2xl:text-2xl xl:text-xl lg:text-xl md:text-lg sm:text-base text-base 2xl:mt-5 mt-0'>

                        Storlytics leverages more than 20 years of battery energy storage projects development to simplify modeling BESSs   </p>
                        <div className='mt-5 '>
                            {texts.map(text => <li className=' list-outside  leading-10 2xl:mt-4 mt-0 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-base text-base  '> {text}  </li>)}
                        </div></div>




                </div>
            </div>
            <div className=' lg:w-1/2 md:w-full lg:h-full lg:mt-32 md:mt-10 sm:mt-8 mt-5 '>
                <img className='  w-auto 2xl:p-10 xl:p-0 md:p-0   p-5  xl:pt-0  ' src={homebottomimg} />
            </div>

        </div>

    </div>);
}

export default Bottom;