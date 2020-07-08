export class TableDataModel{
    public RowData: any[];
    public ColumnDefinitons: any[];

    public constructor(_data: any[], _columns: any[]){
        this.RowData = _data;
        this.ColumnDefinitons = _columns;
    }
}