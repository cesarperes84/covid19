const csv2JSON = (csv: string) => {
    const lines=csv.split("\n");
    const result = [];
    const headers=lines[0].split(",");
  
    for(let i=1;i<lines.length;i++){
  
        const obj = {};
        const currentline=lines[i].split(",");
  
        for(let j=0;j<headers.length;j++){
            // @ts-ignore
            obj[headers[j]] = currentline[j];
        }
  
        result.push(obj);
  
    }
    console.log('result', result);
    // @ts-ignore
    // const xxx = JSON.parse(result);
    console.log('xxx', typeof xxx);
    //return result; //JavaScript object
    return result; //JSON
  };
  
  export default csv2JSON;
  