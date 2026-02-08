"use client";
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { sayHello } from '../libs/denzil-francis-lib';
import {Button} from '@mui/material';


export default function DenzilFrancis() {
    const [name, setName] = useState<string>("");
    const [greeting, setGreeting] = useState<string>("");

    async function handleClick() {
        const result = await sayHello(name);
        setGreeting(result);
    }


  return (
    <div style={{display:"grid", placeItems:"center", height:"100vh"}}> 
       <div style={{display:"flex", flexDirection:"column"}}>
        <Typography sx={{fontSize:"32px"}}>{greeting}</Typography>
        <div style={{display:"flex", marginTop:"60px"}}>
            <TextField id="outlined-basic" label="Enter Name" variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <Button 
                onClick={handleClick}
                sx={{background:"pink", marginLeft:"12px", color:"black"}}
            >
                Click Me!
            </Button>
            </div>
        </div>
    </div>
  );
}
