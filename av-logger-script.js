function onOpen() {
  // console.log("I am working")
  const sheet = SpreadsheetApp.getActiveSheet()
  const editedCell = sheet.getCurrentCell()
  const columnToSortBy = 1 

  if (sheet.getName() == "AV Logger" && editedCell.getColumn() == columnToSortBy) {
    const rangeDate = sheet.getRange("A2:A")
    rangeDate.setNumberFormat("MMMM d, yyyy hh:mm AM/PM") // code will auto append 12:00AM if no time is given, i.e. for manual entries

    const range = sheet.getRange("A2:G")
    range.sort({column: columnToSortBy, ascending: false}) 
  } 
} 

