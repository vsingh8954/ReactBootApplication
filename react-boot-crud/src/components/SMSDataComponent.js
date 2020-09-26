import React from 'react';
import wretch from 'wretch';
//import Button from 'react-button';
 import DatePicker from "react-datepicker";
 import "react-datepicker/dist/react-datepicker.css";

// import Moment from 'moment';
// import ReactDatePicker from 'react-datepicker';
// import { SingleDatePicker } from 'react-dates';

const FETCH_ALLRECORD_API = "http://localhost:8090/getAllRecords";
const FETCH_BY_START_DATE_API = "http://localhost:8090/fetchByStartDate";
const FETCH_BY_END_DATE_API = "http://localhost:8090/fetchByEndDate";

class SMSDataComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            startDate1:'',
            startDate2:'',
            endDate1:'',
            endDate2:'',
            noRecord:false
        }
        this.onChange1 = this.onChange1.bind(this);
        this.onChange2 = this.onChange2.bind(this);
        this.onChange3 = this.onChange3.bind(this);
        this.onChange4 = this.onChange4.bind(this);
    }

    componentDidMount(){
    
    wretch(FETCH_ALLRECORD_API)
     .get()
     .json(json => {
         console.log(json)
         if(json == null){
         this.setState({noRecord:true})
         }
         else{
        this.setState({data:json,noRecord:false})
         }
      })
      this.setState({}) 
     
    }

fetchByStartDate=()=>{
var stDate1 = (this.state.startDate1.getMonth() + 1)+"/"+this.state.startDate1.getDate()+"/"+this.state.startDate1.getFullYear();
var stDate2 = (this.state.startDate2.getMonth() + 1)+"/"+this.state.startDate2.getDate()+"/"+this.state.startDate2.getFullYear();

        console.log("fetchByStartDate : ",stDate1," : ",stDate2)
        wretch(FETCH_BY_START_DATE_API+"?startDate="+stDate1+"&endDate="+stDate2)
        .get()
        .json(json => { console.log(json)
            if(json == null){
                console.log("in if ")
         this.setState({noRecord:true})
            }
         else{ console.log("in else")
        this.setState({data:json,noRecord:false})
         }
         }) 
    }

    fetchByEndDate=()=>{
        var eDate1 = (this.state.endDate1.getMonth() + 1)+"/"+this.state.endDate1.getDate()+"/"+this.state.endDate1.getFullYear();
        var eDate2 = (this.state.endDate2.getMonth() + 1)+"/"+this.state.endDate2.getDate()+"/"+this.state.endDate2.getFullYear();

        wretch(FETCH_BY_END_DATE_API+"?startDate="+eDate1+"&endDate="+eDate2)
        .get()
        .json(json => {
            if(json == null){
                this.setState({noRecord:true})
                   }
                else{
               this.setState({data:json,noRecord:false})
                }
         })
    }

onChange1 = (date) => {
        this.setState({
          startDate1: date
        });
 };

 onChange2 = (date) => {
    this.setState({
      startDate2: date
    });
};

onChange3 = (date) => {
    this.setState({
      endDate1: date
    });
};

onChange4 = (date) => {
    this.setState({
      endDate2: date
    });
};

    render (){
        console.log(this.state.noRecord)
         return(
            <div> 
    <div >
        <h3>Search by Start Date</h3>
       
        <table width="50%">
           
            <tbody>
                <tr><td>
                <label>
          Start Date 1:
          </label>
                    <DatePicker 
          onChange={this.onChange1}  
          selected={this.state.startDate1}
        /></td>
                <td>
                <label>
          Start Date 2:
          </label>
                    <DatePicker 
          onChange={this.onChange2}
          selected={this.state.startDate2}
        /></td>
        <td>
        <button onClick={this.fetchByStartDate}>
  Search
</button>
        </td>
        </tr>
    
    </tbody>
    </table>
</div>
<div>
<h3>Search by End Date</h3>
    <table width="50%">
           
            <tbody>
                <tr><td>
                <label>
          End Date 1:
          </label>
                    <DatePicker
          onChange={this.onChange3}
          selected={this.state.endDate1}
        /></td>
                <td>
                <label>
          End Date 2:
          </label><DatePicker
          onChange={this.onChange4}
          selected={this.state.endDate2}
        /></td>
        <td>
        <button onClick={this.fetchByEndDate}>
  Search
</button>
        </td>
        </tr>
    
    </tbody>
    </table>
        </div>        
 <h1 className="text-center">SMS Data</h1>

            <p hidden={!this.state.noRecord}>No Record Found</p>

                <table className="table table-striped" hidden={this.state.noRecord}>
                    <thead>
                        <tr>
                            <td>S.No</td>
                            <td>City Name</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td>Price</td>
                            <td>Status</td>
                            <td>Color</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(
                            data => 
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.city}</td>
                                <td>{data.startdate}</td>
                                <td>{data.enddate}</td>
                                <td>{data.price}</td>
                                <td>{data.status}</td>
                                <td>{data.color}</td>
                            </tr>
                        )

                        }

                    </tbody>

                </table>
            </div>
        )
    }
}

export default SMSDataComponent;