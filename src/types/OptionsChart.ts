export interface OptionsChart {
    title: {
        text: string,
    },
    tooltip?: {},
    legend: {
        data?: string[]
    },
    xAxis: {
        type: string,
        boundaryGap: boolean,
        data: string[],
        name: string,
    },
    yAxis: {
        type: string,
    },
    series: [
        {
            name: string,
            data: number[],
            type: string,
            areaStyle: {}
        }
    ]

}