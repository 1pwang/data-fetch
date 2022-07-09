#! /usr/bin/env node 

import { writeFile } from 'fs'
import fetch from 'node-fetch'

const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {'Content-Type': 'Application-json'}
})

const data = await res.json();

const storeId5 = data.filter((p)=> p.userId === 5)

const stringifDataSet = JSON.stringify(storeId5)

const formattedDataSet = stringifDataSet.split(',').join('\n')

await writeFile(new URL('dataFile.csv', import.meta.url), formattedDataSet ,(err) => {
   
    if(err) throw err;
    console.log('Write complete')})


 