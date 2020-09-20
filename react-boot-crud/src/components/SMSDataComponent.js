import React from 'react';
import wretch from 'wretch';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

import Moment from 'moment';

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
            endDate2:''
        }
    }

    componentDidMount(){
    wretch(FETCH_ALLRECORD_API)
     .get()
     .json(json => {
        this.setState({data:json})
      })

    }

    fetchByStartDate=()=>{
        wretch(FETCH_BY_START_DATE_API+"?startDate="+this.state.startDate1+"&endDate="+this.state.startDate2)
        .get()
        .json(json => {
           this.setState({data:json})
         }) 
    }

    fetchByEndDate=()=>{
        wretch(FETCH_BY_END_DATE_API+"?startDate="+this.state.endDate1+"&endDate="+this.state.endDate2)
        .get()
        .json(json => {
           this.setState({data:json})
         })
    }

    handleChange = (name, date) => {
        var change = {};
        change[name] = date;
         this.setState(change);
         console.log(name," : ",date)
      };

    render (){
         return(
            <div> 
                <h3 className="text-center">Search By Start Date</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>Start Date</td>
                        <td>End Date</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td  colSpan="2">
                        {/* <DatePicker name="startDate1"
        selected={this.state.startDate1}
        onChange={this.handleChange.bind(this, 'startDate1')}
      />
                        </td>
                        <td>
                        <DatePicker name="startDate2"
        selected={this.state.startDate2}
        onChange={this.handleChange.bind(this, 'startDate2')}
      /> */}
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={this.fetchByStartDate}>Search</button>
                        </td>
                    </tr>
                    </tbody>
          </table>

          <h3 className="text-center">Search By End Date</h3>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>Start Date</td>
                        <td>End Date</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td colSpan="2">
                        {/* <DatePicker name="endDate1"
        selected={this.state.endDate1}
        onChange={this.handleChange.bind(this, 'endDate1')}
      />
                        </td>
                        <td>
                        <DatePicker name="endDate2"
        selected={this.state.endDate1}
        onChange={this.handleChange.bind(this, 'endDate2')}
      /> */}
                       
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <button onClick={this.fetchByEndDate}>Search</button>
                        </td>
                    </tr>
                    </tbody>
             </table>
                <h1 className="text-center">SMS Data</h1>
                <table className="table table-striped">
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