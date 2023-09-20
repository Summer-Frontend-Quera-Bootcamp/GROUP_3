import React, { useState, ChangeEvent } from 'react';
import Input from './components/Input';

function App() {
  return (
    <div>
        <Input type='text' label='ایمیل' ></Input>
        <Input type='password' label='رمز عبور'></Input>
    </div>
  );
}




export default App;
