import xlsx from "xlsx";

export const fetchXlsx=(filePath:string)=>{
try {
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
  
    const jsonData = xlsx.utils.sheet_to_json(worksheet);
   return jsonData;
} catch (error) {
  console.error('Error:', error);
}

}
