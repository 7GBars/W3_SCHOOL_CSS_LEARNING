export const onDragStart = (event: any) => {
  event.dataTransfer.effectAllowed = "copyMove";
}
export const onDragEnter = (event:any, tableRef: any) => {
  const target = event.target
  if(tableRef.current?.contains(target)) {
    event.dataTransfer.dropEffect = "none";
  }
  console.log(  tableRef.current?.contains(target))
}