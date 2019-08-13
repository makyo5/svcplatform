import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { G2, Chart, Geom, Axis, Tooltip, View } from "bizcharts";
import Slider from "bizcharts-plugin-slider";

import * as al from "alasql";
import * as moment from "moment";

import * as ax from "axios";
import * as DataSet from "@antv/data-set";

const ApiUrl = {
    "WeChat": "http://10.101.2.2:50500/api/clinic/ClinicWeChatRegistryPayment"
}

class WeChatComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WeChatClinicData: [],
            Frequency:""
        }
    }
    componentDidMount() {

        const _this = this;
        ax.get(ApiUrl.WeChat)
            .then((res) => {
                
                const ress = al("select * from ? where YEAR='2019' ORDER BY WEEK ASC", [res.data]);
                console.log(ress);
                console.log(moment());

                this.setState({
                    WeChatClinicData: ress
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {
        if (this.state.WeChatClinicData==[]) {
            return (
                <div>Loading...</div>
            )
        }
        else {
            return (
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                        <div>挂号数量</div>
                        <Chart height={200} data={this.state.WeChatClinicData} forceFit >
                            <Axis name="WEEK" label={{
                                rotate: 60
                            }} />                    
                            <Geom type="line" position="WEEK*OFF_LINE_REG_ACCOUNT" size={2} color={"#2fb9f5"} />
                            <Geom type="line" position="WEEK*ON_LINE_REG_ACCOUNT" size={2} color={"#f687a1"} />
                            <Tooltip
                                crosshairs={{
                                type:"y"
                            }}
                            />
                        </Chart>
                        </Grid.Column>
                        <Grid.Column>
                        <div>缴费数量</div>
                        <Chart height={200} data={this.state.WeChatClinicData} forceFit >
                            <Axis name="WEEK" label={{
                                rotate: 60
                            }} />                    
                            <Geom type="line" position="WEEK*OFF_LINE_FEE_ACCOUNT" size={2} color={"#2fb9f5"} />
                            <Geom type="line" position="WEEK*ON_LINE_FEE_ACCOUNT" size={2} color={"#f687a1"} />
                            <Tooltip
                                crosshairs={{
                                type:"y"
                            }}
                            />
                        </Chart>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <div>挂号金额</div>
                        <Chart height={200} data={this.state.WeChatClinicData} forceFit >
                            <Axis name="WEEK" label={{
                                rotate: 60
                            }} />                    
                            <Geom type="line" position="WEEK*OFF_LINE_REG_CHARGE" size={2} color={"#2fb9f5"} />
                            <Geom type="line" position="WEEK*ON_LINE_REG_CHARGE" size={2} color={"#f687a1"} />
                            <Tooltip
                                crosshairs={{
                                type:"y"
                            }}
                            />
                        </Chart>
                        </Grid.Column>
                        <Grid.Column>
                        <div>缴费金额</div>
                        <Chart height={200} data={this.state.WeChatClinicData} forceFit >
                            <Axis name="WEEK" label={{
                                rotate: 60
                            }} />                    
                            <Geom type="line" position="WEEK*OFF_LINE_FEE_CHARGE" size={2} color={"#2fb9f5"} />
                            <Geom type="line" position="WEEK*ON_LINE_FEE_CHARGE" size={2} color={"#f687a1"} />
                            <Tooltip
                                crosshairs={{
                                type:"y"
                            }}
                            />
                        </Chart>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            )
        }
        
    }
}
export default WeChatComponent;
