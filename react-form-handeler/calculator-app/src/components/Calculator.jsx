import {React,useState}from 'react'
import { Container,Button,Form,FormGroup } from 'react-bootstrap';

export default function Calculator() {
    // destructuring with useState
    const[setValue,setValueData]=useState('0');
    // set values in result
    const handelValue=(buttonValue)=>{
        if(setValue==='0')
        {
            setValueData(buttonValue)
            // alert('buttonValue')
        }
        else 
        {
            setValueData(setValue + buttonValue)
        }


    }
    // set calculations
    const setCalculation=()=>
    {
        try 
        {
          setValueData(eval(setValue),toString())
          //alert('hi')
        }
        catch(error)
        {
          setValueData('Error')
          //alert('hi')
        }

    }

    // sqrt 
    // sqroot
    // backspace
    // 1/x
    
    // clear set values in result
    const handleClear=()=>{
        setValueData('0');
        //alert('hi')
    }
  return (
    <Container>
        <div className='calculator mt-5'>
        <div className='row'>
        <div className='col-sm-4'>
         <div className='input-group'>
            <input type='text' placeholder='0' value={setValue}  className='form-control'  />
         </div>
         <div className='input-group'>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('7')}}>7</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('8')}}>8</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('9')}}>9</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('+')}}>+</Button>
        
         </div>
         
         <div className='input-group'>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('4')}}>4</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('5')}}>5</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('6')}}>6</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('-')}}>-</Button>
        
         </div>

         
         <div className='input-group'>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('1')}}>1</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('2')}}>2</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('3')}}>3</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('*')}}>*</Button>
        
         </div>
         
         <div className='input-group'>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('0')}}>0</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={handleClear}>C</Button>
            <Button type='button' className='btn btn-outline-primary bg-primary text-white' onClick={setCalculation}>=</Button>
            <Button type='button' className='btn btn-outline-primary' onClick={()=>{handelValue('/')}}>/</Button>
        
         </div>
        </div>
        </div>
        <div className='col-sm-8'></div>

        </div>
    </Container>
  )
}
