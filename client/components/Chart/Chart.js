import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import ReactHighcharts from 'react-highcharts'
import moment from 'moment';

class Overview extends PureComponent {
    constructor(props) {
        super(props);

         this.state = {
             highChartsConfig: {
                 chart: {
                     zoomType: 'x',
                     backgroundColor: 'rgba(0, 218, 179, .4)',
                     height: 380
                 },
                 title: {
                     text: '',
                     style: {
                         color: 'rgb(255, 255, 255)'
                     }
                 },
                 plotOptions: {
                     column: {
                         depth: 25
                     },
                     tooltip: {
                         pointFormat: '{point}'
                     }
                 },
                 xAxis: {
                     title: {
                         text: 'Timestamp of Exchange Price',
                         style: {
                             fontSize: '15px',
                             color: 'rgb(255, 255, 255)'
                         }
                     },
                     categories: [],
                     labels: {
                         style: {
                             fontSize: '11px',
                             color: 'rgb(255, 255, 255)'
                         }
                     }
                 },
                 yAxis: {
                     title: {
                         text: 'BTC Price',
                         style: {
                             fontSize: '15px',
                             color: 'rgb(255, 255, 255)'
                         }
                     },
                     labels: {
                         style: {
                             fontSize: '11px',
                             color: 'rgb(255, 255, 255)'
                         }
                     }
                 },
                 legend: {
                     enabled: true,
                     itemStyle: {
                         color: 'rgb(255,255,255)'
                     }
                 },
                 series: []
             }
         };
    }

    getCoinNameToRender() {
        switch (this.props.selectedMember) {
            case 'huey':
                return 'ethereum';
            break;

            case 'luey':
                return 'litecoin';
            break;

            case 'duey':
                return 'dash';
            break;
        
            default:
                return 'ethereum';
            break;
        }
    }

    drawChart(props) {
        if (props.coins.length) {
            const chartSeries = [];
            const chartCategories = [];
            const coinToRender = this.getCoinNameToRender();

            props.coins.forEach((coin) => {
                if(coin.name == coinToRender) {
                    chartSeries.push({
                        name: `${coin.exchangeName} - ${coin.name}`,
                        data: coin.prices.map((p) => p.price)
                    });
                }
            });

            this.setState({
                highChartsConfig: {
                    ...this.state.highChartsConfig,
                    title: { 
                        ...this.state.highChartsConfig.title, 
                        text: `${coinToRender[0].toUpperCase() + coinToRender.slice(1)} 
                               Prices`
                    },
                    series: chartSeries,
                    xAxis: { 
                        ...this.state.highChartsConfig.xAxis, 
                        categories: props.coins[0].prices.map((p) => moment(p.date).format('MM/DD/YY | hh:mm')) 
                    }
                }
            });

            setTimeout(() => {
                this.refs.chart.getChart().redraw();
            }, 500);
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.drawChart(this.props);
        }, 500);
    }

    componentWillReceiveProps(props) {
        setTimeout(() => {
            this.drawChart(props);
        }, 500);
    }

    render() {
        return (
            <div className='chart-container'>
                <ReactHighcharts config={ this.state.highChartsConfig } ref='chart' />  
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        coins: state.coins.coins,
        selectedMember: state.members.selectedMember
    };
}

export default connect(mapStateToProps)(Overview);
