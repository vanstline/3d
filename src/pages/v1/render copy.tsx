/* eslint-disable lines-between-class-members */
/* eslint-disable react/sort-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
/* eslint-disable require-jsdoc */
import * as React from 'react';
import { Form, Button, Select } from 'antd';
import SceneComponent from '@/pages/scene';
import './render.less';
import 'antd/dist/antd.css';

interface IState {
    data: any[];
    modelIndex: number;
    quality: number;
}

const { Item } = Form;
const { Option } = Select;

/**
 * Render
 *
 * @class Render
 * @extends {React.Component<{}, IState>}
 */
class Render extends React.Component<{}, IState> {
    private scene = React.createRef<SceneComponent>();

    private qualitySelect = React.createRef<HTMLSelectElement>();

    private modelSelect = React.createRef<HTMLSelectElement>();

    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            modelIndex: 0,
            quality: 0
        };
    }

    componentDidMount() {
        this.loadConfig(this.GetRequest('config') || '');
    }

    GetRequest(value: any) {
        const url = decodeURI(window.location.search);
        const object = {};
        if (url.indexOf('?') != -1) {
            const str = url.substring(1);
            const strs = str.split('&');
            for (let i = 0; i < strs.length; i++) {
                object[strs[i].split('=')[0]] = strs[i].split('=')[1];
            }
        }
        return object[value];
    }

    loadConfig(configName: string) {
        if (configName === '') {
            configName = 'default';
        }
        const url: string = `assets/config/${configName}.json`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                this.parseConfigData(data);
            })
            .catch(() => {
                if (configName != 'default') {
                    this.loadConfig('default');
                }
            });
    }

    parseConfigData(obj: any) {
        this.setState({
            data: obj.data
        });

        // this.scene.current.loadObjModel('assets/model/cloth/jeans/', 'R369WYGF32P28EKF689H20NDG')
        this.scene?.current?.loadObjModel(obj.data[0].baseUrl, obj.data[0].fileName);
        this.qualitySelect?.current?.addEventListener('change', this.changeQualite.bind(this));
        this.modelSelect?.current?.addEventListener('change', this.changeModel.bind(this));
    }

    changeModel(evt: any) {
        const index = evt.target.value;
        this.setState({
            modelIndex: index
        });
    }

    changeQualite(evt: any) {
        const index = evt.target.value;
        this.setState({
            quality: index
        });
    }

    loadModel() {
        const mid = this.state.modelIndex;
        const qid = this.state.quality;
        this.scene?.current?.loadObjModel(this.state.data[mid].baseUrl, this.state.data[mid].fileName, qid);
    }
    changeStats(value: boolean) {
        this.scene?.current?.changeStats(value);
    }

    changeAxis(value: boolean) {
        this.scene?.current?.changeAxis(value);
    }

    render() {
        const list = this.state.data;

        return (
            <div className="imp-container">
                <div className="imp-tool">
                    {/* <Col className="gutter-row" span={4}>
                            <Switch
                                checkedChildren="性能"
                                unCheckedChildren="性能"
                                defaultChecked
                                onChange={(value) => {
                                    this.changeStats(value);
                                }}
                            />
                        </Col>
                        <Col className="gutter-row" span={4}>
                            <Switch
                                checkedChildren="坐标"
                                unCheckedChildren="坐标"
                                defaultChecked
                                onChange={(value) => {
                                    this.changeAxis(value);
                                }}
                            />
                        </Col> */}
                    <Form layout="inline">
                        <Item label="模型选择">
                            {/* <select ref={this.modelSelect}>
                                {this.state.data.map((item, index) => (
                                    <option key={index} value={index}>
                                        {item.name}
                                    </option>
                                ))}
                            </select> */}
                            <Select defaultValue={0}>
                                {list.map((item, index) => (
                                    <Option key={index} value={index}>
                                        {item.name}
                                    </Option>
                                ))}
                            </Select>
                        </Item>
                        <Item label="像素选择">
                            {/* <select ref={this.qualitySelect}>
                                <option value={0}>2k</option>
                                <option value={1}>1024</option>
                                <option value={2}>512</option>
                            </select> */}
                            <Select defaultValue="0">
                                <Option value={0}>2k</Option>
                                <Option value={1}>1024</Option>
                                <Option value={2}>512</Option>
                            </Select>
                        </Item>
                        <Item>
                            <Button
                                onClick={() => {
                                    this.loadModel();
                                }}
                            >
                                确认
                            </Button>
                        </Item>
                    </Form>
                    {/* <Col className="gutter-row" span={3}>
                            &nbsp;
                        </Col>
                        <Col className="gutter-row" span={3}>
                            像素选择&nbsp;
                            <select ref={this.qualitySelect}>
                                <option value={0}>2k</option>
                                <option value={1}>1024</option>
                                <option value={2}>512</option>
                            </select>
                        </Col>
                        <Col className="gutter-row" span={2}>
                            <Button
                                onClick={() => {
                                    this.loadModel();
                                }}
                            >
                                确认
                            </Button>
                        </Col> */}
                </div>
                <SceneComponent ref={this.scene} />
                <div className="imp-three-mask" />
            </div>
        );
    }
}

export default Render;
