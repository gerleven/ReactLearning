import { Component, ReactNode } from "react";

interface ClassPropsInterface{prop1?: string, prop2?: number}
interface ClassStateInterface{prop1: string, prop2: number}

export default class ComponenteCicleDeVida extends Component<ClassPropsInterface, ClassStateInterface>{
    constructor(props:ClassPropsInterface){
        super(props);
        this.state= {prop1: "value3", prop2: 2};
    }
    
    componentDidMount(){
        console.log("Did Mount!");
    }

    componentDidUpdate(prevProps: ClassPropsInterface, prevState: ClassStateInterface){
        console.log("Did Update!");
        console.log("Prev Props: "+prevProps.prop1+" - "+prevProps.prop2);
        console.log("Prev State: "+prevState.prop1+" - "+prevState.prop2);
    }

    componentWillUnmount(){
        console.log("Will Unmount!");
    }

    render(): ReactNode {
        const {prop1, prop2} = this.state;

        const updateState = ()=>{
            this.setState(prev=>({...prev, prop2: (prev.prop2*2)}))
        }

        return <>
        <h3>Componente de clase con ciclo de vida</h3>
        <p>prop1: {this.state.prop1}</p>
        <p>prop2: {prop2}</p>
        <button onClick={updateState}>Update State</button>
        <br />
        </>
    }
}