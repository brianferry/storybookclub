export class PieChartModel{
    public data: PieChartDataModel[];
    public colorScheme: any;

    public constructor(_data: PieChartDataModel[], _colorScheme: string[]){
        this.data = _data;
        this.colorScheme = {
            domain: _colorScheme
        };
    }
}

export class PieChartDataModel{
    public name: string;
    public value: number;

    public constructor(_name: string, _value: number){
        this.name = _name;
        this.value = _value;
    }
}