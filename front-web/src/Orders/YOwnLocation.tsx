import * as React from "react";
import { GeolocatedProps, geolocated } from "react-geolocated";
 
interface IDemoProps {
    label: string;
}
 
class Demo extends React.Component<IDemoProps & GeolocatedProps> {
    render(): JSX.Element {
        return (
            <div>
                label: {this.props.label}
                lattitude: {this.props.coords && this.props.coords.latitude}
            </div>
        );
    }
}
 
export default geolocated;