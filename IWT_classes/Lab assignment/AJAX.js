   <button onclick = 'addNum()'>click me</button>

                <script>
                        const head = document.getElementById('head')

                        function addNum(){
                                const request = new XMLHttpRequest()

                                request.open('GET', '/update')

                                request.onload = () => {
                                        const result = JSON.parse(request.responseText)
                                        head.innerHTML = result.data
                                }

                                request.send()

                        }


                </script>

const express = require('express')
// const parser = require('cookie-parser')
const app = express();

const root = __dirname;

const num = [1,2,3,4,5,6]
let index = -1;



app.listen(8080,(err)=>{
        console.log("i am listenin");
})

app.get('/', (req, res) => {

        res.sendFile(root + '/index.html')

})

app.get('/update', (req, res) => {
        index++

        if(index >= 6){
                index = 0
        }

        let obj = {
                data : num[index]
        }

        res.json(obj)
})

/*
app.get('/update',(req,res)=>{
        index++;
        if(index>=6) index=0;
        let obj={
                data: num[index];
        }
        res.json(obj);
})
*/



