import React from  'react'
import { useEffect, useState } from 'react'
// import axios from 'axios';
import DataTable from 'react-data-table-component';
import '../Styles/table.css'

function TablesValue() {
    const [tableData,setTableData]=useState([])
    const [search,setScarch]=useState("")
    const [filter,setFilter]=useState([])
   

    



    useEffect(()=>{
        
        
        fetch('https://sim.iamvouched.com/v1/escrow/fetch_escrow_account_transactions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIwNjA1OTliMi0xZGM4LTQ4MzUtYjRkNS05NjliNDdkNDQzNmYiLCJuYW1lIjoiWFlaIEludmVzdG1lbnQgVGVjaG5vbGdvaWVzIFB2dCBMdGQiLCJyZWciOiJXOEo1OXVQZ0RzVThCVW03QXVZQyIsImNvbmZpZyI6Inh5ekludmVzdCIsImlhdCI6MTY2MjQ5Mjc3NX0.umqDcA_8qP9A6EkKQoBKh_f6aURNwZNAdCztgU6baBk'
      },
      body:JSON.stringify({
        escrow_id:"av-test"
      })
      
}).then((response)=> {
    return response.json();
   })
   .then((data)=> {
    console.log(data);
    setTableData(data.data)
    setFilter(data.data)
   })
    },[]);


    useEffect(()=>{
        const result= tableData.filter(value=>{

          return   value.remitter_name.toLowerCase().match(search.toLowerCase())
        })
        setFilter(result)
    },[search])



    const columns=[

        {
            name:"Data",
            id: "name",
            selector:(row) => row.tran_date.slice(0,10),
            sortable:true,
        },
        {
            name:"Contact Name",
            id: "name",
            selector:(row) => {
                if(row.type==="Collect"){
                    return row.remitter_name
                }else{
                    return row.payeename
                }
            }


        },
        {
            name:"Debit",
            id: "name",
            selector:(row) => row.payout_ref,
            style: {
                color: "red",
              },
        },
        {
            name:"Credit",
            id: "name",
            selector:(row) => row.collect_ref,
            style: {
                color: "green",
              },
        },
        {
            name:"A/c Balance",
            id: "name",
            selector:(row) => row.balance
        },
        {
            name:"Transaction Note",
            id: "name",
            selector:(row) => row.balance
        },

        {
            name:"Remarks",
            id: "name",
            selector:(row) => row.transaction_note
        },
        {
            name:"UTR/BANKRRN",
            id: "name",
            selector:(row) => row.utr

        },
        {
            name:"A/c /UPI",
            id: "name",
            selector:(row) => {
                if(row.type==="Collect"){
                    return row.remitter_acc_no
                }else{
                    return row.payee_account_no
                }
            }

        },


    ]
 return (
   <div className='Tables-main'>
    <div className='sub-head'>
        <div className='input'>
            <div className='img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI2xpGoHy64FQVrYg6AGou7OMrDTi0740RrKoPfiDRsuuHGGFl765GgJBrJQ46gUU__I&usqp=CAU" height="30px" width="30px" />
            </div>
                <div className='search'>
                <input type="text" placeholder="Search" value={search} 
               onChange={(e)=>{setScarch(e.target.value)}}/>
                </div>
               
        </div>

        <div className='button'>
        <button>Export</button>
        </div>
    </div>

    <div className='Tables'>
        <DataTable columns={columns} 
           data={filter} 
            pagination
            fixedHeader
           fixedHeaderScrollHeight='500px'
           highlightOnHover
        />
   </div>

   </div>
  )
}

export default TablesValue