import React, { Component } from 'react';

import './App.css';

class App extends Component {


state={
  step1:true,
  step2:false,
  step3:false,
 
  formvalue:{
    name:"",
    lastname:"",
    phonenumber:"",
    email:"",
    company:"",
    location:""

  }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h2>React Multi Step Form</h2>
        </header>
        <br/> <br/> <br/>
<div className="row">
<div className="col-lg-4"></div>
<div className="col-lg-4">
        <div className="card">
    <div className="card-block">

        <div className="form-header  purple darken-4">
            <h3><i className="fa fa-lock"></i>{this.state.step1?" Login step1":this.state.step2?"Login Step2: ":"Login Step3:"} </h3>
        </div>
        {/* Step 1 */}
{this.state.step1 &&
       <>
        <div className="md-form">
            <i className="fa fa-envelope prefix"></i>
            <input type="text" id="form2" className="form-control"
            placeholder="Name"
            onChange={(e)=>{
              this.setState({formvalue:{...this.state.formvalue,name:e.target.value}})

            }}
            />
            
        </div>

        <div className="md-form">
            <i className="fa fa-lock prefix"></i>
            <input type="text" id="form4" className="form-control"
             placeholder="Last Name"

             onChange={(e)=>{
              this.setState({formvalue:{...this.state.formvalue,lastname:e.target.value}})

            }}
            />
           
        </div>

        <div className="text-center">
            <button className="btn btn-deep-purple" 
            
            onClick={()=>{
              this.setState({step1:false,step2:true})
              
            }}
            >next</button>
        </div>
        </>
}
{/* Step 2 */}
{this.state.step2 &&
  <>
   <div className="md-form">
       <i className="fa fa-envelope prefix"></i>
       <input type="text" id="form2" className="form-control"
       placeholder="email"
       onChange={(e)=>{
        this.setState({formvalue:{...this.state.formvalue,email:e.target.value}})

      }}
       />
       
   </div>

   <div className="md-form">
       <i className="fa fa-lock prefix"></i>
       <input type="text" id="form4" className="form-control"
        placeholder="Phone number"
        onChange={(e)=>{
          this.setState({formvalue:{...this.state.formvalue,phonenumber:e.target.value}})
  
        }}
       />
      
   </div>

   <div className="text-center">
       <button className="btn btn-deep-purple"  onClick={()=>{
              this.setState({step1:false,step2:false,step3:true})
            }} >Next</button>
   </div>
   </>
}
{this.state.step3 &&
  <>
   <div className="md-form">
       <i className="fa fa-envelope prefix"></i>
       <input type="text" id="form2" className="form-control"
       placeholder="company"
       onChange={(e)=>{
        this.setState({formvalue:{...this.state.formvalue,company:e.target.value}})

      }}
       
       />
       
   </div>

   <div className="md-form">
       <i className="fa fa-lock prefix"></i>
       <input type="text" id="form4" className="form-control"
        placeholder="location"
        onChange={(e)=>{
          this.setState({formvalue:{...this.state.formvalue,location:e.target.value}})
  
        }}
       />
      
   </div>

   <div className="text-center">
       <button className="btn btn-deep-purple"
       
       onClick={()=>{
         console.log("the form data is",this.state.formvalue)
       }}
       >Submit</button>
   </div>
   </>
}

    </div>

    </div>
    
    </div>
    <div className="col-lg-4"></div>

</div>
<br /> 
<p style={{color:"red",fontWeight:"600"}}>validation has not included it will be soon updated </p>
  <br/>
  you can see data in console after hitting submit button 
      </div>
    );
  }
}

export default App;
