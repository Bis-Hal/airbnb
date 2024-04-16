// // import { NextRequest, NextResponse } from 'next/server';
// // import fs from 'fs';



// // interface country {
// //     name: string
// //     code: String,
// //     latitude: number,
// //     longitude: number,
// // }

// // export async function extractFileContent() {

// //     const body : country[] = [];

// //     const workbook = new ExcelJS.Workbook();
// //         await workbook.xlsx.readFile(filePath);

// //     const worksheet = workbook.getWorksheet(1); // Get the first sheet
// //     worksheet.eachRow({ includeEmpty: true }, (row: any[], rowNumber: number) => {
// //         if (rowNumber != 1) {
// //             const columns = JSON.stringify(row.values).split(",");
// //             console.log("Country " + columns[1].split('"')[1]);
// //             console.log("Country Code " + columns[2].split('"')[1]);
// //             console.log("Latitude " + columns[3]);
// //             console.log("longitude " + columns[4]

// //             );            
// //         }


// //     });
// // }

// // export async function GET(req: Request, res: NextResponse) {





// // }

// import path from 'path';
// import ExcelJS, { Row } from 'exceljs';

// const FILE_PATH_FEATURE_IMPORTANCE = path.join(process.cwd(), 'public/database', 'feature_importance.xlsx');
// const FILE_PATH_FEATURE_IMPORTANCE_PRICE_PRED_CUST = path.join(process.cwd(), 'public/database', 'feature_importance_price_pred_cust.xlsx');
// const FILE_PATH_FEATURE_IMPORTANCE_WHOLE_RATING = path.join(process.cwd(), 'public/database', 'feature_importance_whole_rating.xlsx');



// export async function getFeatureImportance() {
//  return await getFeatureImportanceData(FILE_PATH_FEATURE_IMPORTANCE);
// }

// export async function getFeatureImportanceWholeRating() {
//    getFeatureImportanceData(FILE_PATH_FEATURE_IMPORTANCE_WHOLE_RATING);
    
// }

// export async function getFeatureImportancePricePredCust() {
//     return getFeatureImportanceData(FILE_PATH_FEATURE_IMPORTANCE_PRICE_PRED_CUST);
  
    
// }


// async function getFeatureImportanceData(path:string){
//     var body : {label:string, stats:number}[] = []
//     const workbook = new ExcelJS.Workbook();

//     await workbook.xlsx.readFile(path);
//     const worksheet = workbook.getWorksheet(1);

//     worksheet?.eachRow({includeEmpty: true},(row: Row, rowNumber: number)=>{
//        console.log("Feature : " + row.getCell(1));
//        console.log("Importance : " + row.getCell(2));
//        body.push({label:row.getCell(1).toString(),stats:parseInt(row.getCell(1).toString(),0)})
//     })

//     return body;
   
// }

// import { NextRequest, NextResponse } from 'next/server';
// import { List } from 'postcss/lib/list';
// import { promisify } from 'util';





// export async function GET(req: Request, res: NextResponse) {

//   var body : {lable: string, status:number}[] = [];

//   await getFeatureImportance().then(
//     value =>{
//       value.map((label,stats) => body.push({lable:label.label, status:stats}))
//     }
//   )
//   console.log("Body"+body)
  

// return NextResponse.json(body)


 
// }


