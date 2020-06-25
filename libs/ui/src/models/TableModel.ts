export class PieChartDataModel{
    public data: any[];
    public columns: any[];

    public constructor(_data: any[], _columns: any[]){
        this.data = _data;
        this.columns = _columns;
    }
}