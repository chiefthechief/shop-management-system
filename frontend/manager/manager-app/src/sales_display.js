import React from 'react';


const Daily = () =>{
    
    const teller_sales = () =>{

        let sales = [
            {
                name: "Akwasi",
                sales: 450
            },
            {
                name: "total",
                sales: 1000
            }
        ]

        return sales;
    }
    
    let teller_online = {
        height : "80%",
    }
    let teller_1 = {
        height : "60%",
    }
    let teller_2 = {
        height : "30%",
    }
    let teller_3 = {
        height : "50%",
    }
    let teller_4 = {
        height : "100%"
    }

    let max = teller_sales().find(max => max.name === "total")
    let max_min = teller_sales().find(max_min => max_min.name === "total")
    let max_min_min = teller_sales().find(max_min_min => max_min_min.name === "total")
    let min = teller_sales().find(min => min.name === "total");
    
    return (
        <>
             <div className='scale'>
                        <p className='max'>{max.sales}</p>
                        <p className='max-min'>{max_min.sales * 0.75}</p>
                        <p className='max-min-min'>{max_min_min.sales * 0.5}</p>
                        <p className='min'>{min.sales * 0.25}</p>
                    </div>
                    <div className='teller'>
                        <hr className='max'/>
                        <hr className='max-min'/>
                        <hr className='max-min-min'/>
                        <hr className='min'/>
                      <div className='teller-space'>
                        <div className='teller-1'>
                            <label id='name'>Kwame</label>
                            <div style ={teller_1} className='sales-graph'></div>
                        </div>
                        <div className='teller-2'>
                            <label id='name'>Akwasi</label>
                            <div  style ={teller_2} className='sales-graph'></div>
                        </div>
                        <div className='teller-3'>
                            <div style ={teller_3} className='sales-graph'></div>
                            <label id='name'>Kwadwo</label>
                        </div>
                        <div className='teller-4'>
                            <label id='name'>Kwabena</label>
                            <div style ={teller_4} className='sales-graph'></div>
                        </div>
                        <div className='teller-online'>
                            <label id='name'>Online</label>
                            <div  style ={teller_online} className='sales-graph'></div>
                        </div>
                      </div>
                    </div>
        </>
    );
}


export default Daily