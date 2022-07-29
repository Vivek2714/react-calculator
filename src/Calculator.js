import React from 'react';

class Calculator extends React.Component{

  constructor(){
    super();
		this.state = {
			firstNumber  : "",
			secondNumber : "",
			result       : ""
		}
  }

  render(){

		// Set value in state
		const onFieldChange = (props) => {
			const name  = props.target.name; 
			const value = props.target.value; 
			if( name == "firstNumber" ){
				this.setState( { "firstNumber" : value } );
			}
			if( name == "secondNumber" ){
				this.setState( { "secondNumber" : value } );
			}
		}

		// Calculate result
		const calculationHandler = (props) => {

			// Get input field values
			const firstNumber = this.state.firstNumber;
			const secondNumber = this.state.secondNumber;	

			// Clicked button value
			const value = props.target.value; 

			if( 
				firstNumber == "" ||
				secondNumber == "" 
			){
				alert("Invalid inputs passed");
				return;
			}

			var output = "";
			switch(value){
				case 'sum':
					output = parseInt(firstNumber) + parseInt(secondNumber);
				break;
				case 'sub':
					output = parseInt(firstNumber) - parseInt(secondNumber);
				break;
				case 'mul':
					output = parseInt(firstNumber) * parseInt(secondNumber);
				break;
				case 'div':
					output = parseInt(firstNumber) / parseInt(secondNumber);
				break;
			}

			// SHow output in Output field
			this.setState( { "result" : output } );
  	}

		// Add styles
		const styles = {
			container : {
				width           : "100%",
				float           : "left",
				position        : "absolute",
				height          : "100%",
				fontFamily      : "cursive"
			},
			fieldRow : {
				width           : "100%",
				float           : "left",
				padding         : "10px",
				boxSizing       : "border-box"
			},
			heading : {
				textAlign       : "center",
			},
			label : {
				width           : "49%",
				padding         : "10px",
				float           : "left",
				boxSizing       : "border-box",
				fontWeight      : "bold"
			},
			field : {
				width           : "49%",
				padding         : "10px",
				float           : "left",
				boxSizing       : "border-box",
				border          : "1px solid #c7c7c7"
			},
			button : {
				width           : "24%",
				marginRight     : "1%",
				padding         : "10px",
				float           : "left",
				border          : "1px solid #c7c7c7",
				background      : "#000",
				color           : "#FFFFFF",
				fontWeight      : "bold",
				cursor          : "pointer"
			}
		}

		// Create view
    return(
			<div style={styles.container}>
				<h1 style={styles.heading}>Calculator</h1>
				<div style={styles.fieldRow}>
					<label style={styles.label}>Number 1</label>
					<input style={styles.field} type="text" name="firstNumber" onChange={onFieldChange} value={this.state.firstNumber}></input>
				</div>
				<div style={styles.fieldRow}>
					<label style={styles.label}>Number 2</label>
					<input style={styles.field} type="text" name="secondNumber" onChange={onFieldChange} value={this.state.secondNumber}></input>
				</div>
				<div style={styles.fieldRow}>
					<label style={styles.label}>Output</label>
					<input style={styles.field} type="text" value={this.state.result}disabled></input>
				</div>
				<div style={styles.fieldRow}>
					<button onClick={calculationHandler} style={styles.button} value="sum">+</button>
					<button onClick={calculationHandler} style={styles.button} value="sub">-</button>
					<button onClick={calculationHandler} style={styles.button} value="mul">X</button>
					<button onClick={calculationHandler} style={styles.button} value="div">/</button>
				</div>
			</div>
    );
  }

}

export default Calculator;