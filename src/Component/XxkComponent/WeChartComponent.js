import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { G2, Chart, Geom, Axis, Tooltip, View } from "bizcharts";
import Slider from "bizcharts-plugin-slider";
import * as al from "alasql";

import * as ax from "axios";
import * as DataSet from "@antv/data-set";

const ApiUrl = {
    "WeChat": "http://10.101.2.2:50500/api/clinic/ClinicWeChatRegistryPayment"
}

const cols = {
    value: {
        min: 0
    },
    VISIT_DATE: {
        range: [0, 1]
    }
};

class WeChatComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            WeChatClinicData: []
        }
    }
    componentDidMount() {

        const _this = this;
        ax.get(ApiUrl.WeChat)
            .then((res) => {
                
                const ress = al("select * from ? where VISIT_DATE>'2019-06-01'", [res.data]);
                console.log(ress);

                this.setState({
                    WeChatClinicData: ress
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    render() {        

        return (
            <div>
                <Chart height={400} data={this.state.WeChatClinicData} forceFit >
                    <Axis name="VISIT_DATE" label={{ rotate: 60 }} />
                    <Axis name="OFF_LINE_REG_ACCOUNT" />
                    <Geom type="line" position="VISIT_DATE*OFF_LINE_REG_ACCOUNT" size={2} color={"#02db46"} />
                    <Geom type="line" position="VISIT_DATE*ON_LINE_REG_ACCOUNT" size={2} color={"#f586a0"}/>
                    
                    <Tooltip
                        crosshairs={{
                        type:"y"
                    }}
                    />
                </Chart>
            </div>
        )
    }
}
export default WeChatComponent;
